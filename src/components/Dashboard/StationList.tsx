import { Accordion, Badge, Box, Space, Text, Title } from '@mantine/core';
import { Station } from '../../hooks/useStationsInfo';

export interface stationList {
  title: string;
  station_tag: string;
  installed_date: Date;
  address: string;
  location: { latitude: number; longitude: number };
  uptime: number;
}

export interface stationListProps {
  stationListData: stationList[];
  stationOnClicked: (station: Station) => void;
}

export function StationList({ stationListData, stationOnClicked }: stationListProps) {
  return (
    <>
      <Title>Dashboard</Title>
      <Space h={20} />
      <Box mah={230} style={{ overflowY: 'auto' }}>
        <Accordion variant="separated">
          {stationListData.map((value, i) => (
            <Accordion.Item
              key={i}
              onClick={() => stationOnClicked(value)}
              value={value.station_tag}
            >
              <Accordion.Control>{value.title}</Accordion.Control>
              <Accordion.Panel>
                <Text c="blue">{value.station_tag}</Text>
                <Text>Installed Date: {new Date(value.installed_date).toString()}</Text>
                {value.uptime !== 0 ? (
                  <Badge variant="dot" color="green" size="sm">
                    Online For: {Math.floor((Date.now() - value.uptime) / 3600000)} hrs
                  </Badge>
                ) : (
                  <Badge variant="dot" color="red" size="sm">
                    Offline
                  </Badge>
                )}
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Box>
    </>
  );
}
