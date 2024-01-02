import { useState } from 'react';
import { Grid, Skeleton, Container } from '@mantine/core';
import { IconAlertCircleFilled } from '@tabler/icons-react';
import { StationList } from './StationList';
import { StationsMap } from './StationsMap';
import useStationsInfo, { Station } from '../../hooks/useStationsInfo';
import useVehicleDatas from '../../hooks/useVehicleDatas';
import { VehicleDatasTable } from './VehicleDatasTable';

const child = <Skeleton height={300} radius="md" />;
const ErrorMessage = (
  <div
    style={{
      position: 'relative',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {/* Error icon */}
    <div
      style={{
        position: 'absolute',
        zIndex: '1',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <IconAlertCircleFilled size={40} strokeWidth={2} color="red" />
    </div>

    {/* Skeleton with a loading message */}
    <Skeleton height={300}>Failed to load!</Skeleton>
  </div>
);

export function Dashboard() {
  const { stations, loading: stations_loading, error: stations_err } = useStationsInfo();
  const {
    vehicleDatas,
    loading: vehicle_datas_loading,
    error: vehicle_datas_error,
  } = useVehicleDatas();
  const [viewport, setViewport] = useState({
    longitude: 84.124,
    latitude: 28.3949,
    zoom: 7, // Adjust this value for the desired zoom level
  });

  const handleStationClick = (station: Station) => {
    // Assuming station has latitude and longitude properties
    const { latitude, longitude } = station.location;

    // Adjusting viewport to focus on the station's location with a good zoom amount
    setViewport({
      ...viewport,
      longitude,
      latitude,
      zoom: 18, // Adjust this value for the desired zoom level
    });
  };

  return (
    <Container my="md" size="90vw" pl={{ md: '5rem', sm: '0.1rem', xs: '0.01rem' }}>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          {!stations_loading && !stations_err && (
            <StationList stationOnClicked={handleStationClick} stationListData={stations} />
          )}
          {stations_loading && !stations_err && child}
          {stations_err !== null && ErrorMessage}
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>
          {!stations_loading && !stations_err && (
            <StationsMap viewport={viewport} setViewport={setViewport} stationsData={stations} />
          )}
          {stations_loading && !stations_err && child}
          {stations_err !== null && ErrorMessage}
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>
          {!vehicle_datas_loading && !vehicle_datas_error && (
            <VehicleDatasTable vehicleDatas={vehicleDatas} />
          )}
          {vehicle_datas_loading && !vehicle_datas_error && child}
          {vehicle_datas_error !== null && ErrorMessage}
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
      </Grid>
    </Container>
  );
}
