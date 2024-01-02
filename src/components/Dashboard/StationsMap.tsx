import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Station } from '../../hooks/useStationsInfo';
import { Viewport } from '../../types/Viewport';

export function StationsMap({
  stationsData,
  viewport,
  setViewport,
}: {
  stationsData: Station[];
  viewport: Viewport;
  setViewport: any;
}) {
  const getMarkerShape = (station: Station) => {
    const markerColor = station.uptime !== 0 ? '#4EFA88' : '#FA4E4E';
    return (
      <svg
        height="20"
        width="20"
        viewBox="0 0 24 24"
        style={{ fill: markerColor, stroke: markerColor }}
      >
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="10" fill="none" strokeWidth="2" />
      </svg>
    );
  };

  return (
    <Map
      {...viewport}
      mapboxAccessToken="pk.eyJ1IjoiYWFzLXNpcyIsImEiOiJjbHBkdXk3MncxN3UwMmlrN252N3dzNHVuIn0.rigw8BSUr0Jpbmsxofl_xA"
      onMove={(evt) => setViewport(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/dark-v11"
    >
      {stationsData.map((station, index) => (
        <Marker
          key={index}
          longitude={station.location.longitude}
          latitude={station.location.latitude}
          // offsetLeft={-10}
          // offsetTop={-10}
        >
          {getMarkerShape(station)}
        </Marker>
      ))}
    </Map>
  );
}
