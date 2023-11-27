import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export function StationsMap() {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoiYWFzLXNpcyIsImEiOiJjbHBkdXk3MncxN3UwMmlrN252N3dzNHVuIn0.rigw8BSUr0Jpbmsxofl_xA"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      // style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/dark-v11"
    />
  );
}
