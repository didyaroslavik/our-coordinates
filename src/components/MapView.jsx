import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import L from 'leaflet'
import { locations } from '../data/locations'

// Custom pin icon — a soft light-blue circle with a white ring,
// built with plain HTML/CSS instead of an image file
const pinIcon = L.divIcon({
  className: '',
  html: `<div style="
    width: 18px;
    height: 18px;
    background: #3b82f6;
    border: 3px solid white;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(59,130,246,0.5);
  "></div>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
})

function MapView({ onLocationClick }) {
  // Center point roughly between Poland and western Ukraine
  const center = [51.0, 21.5]

  return (
    <MapContainer
      center={center}
      zoom={6}
      minZoom={5}
      maxZoom={12}
      style={{ height: '100vh', width: '100%' }}
      zoomControl={true}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />

      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={[loc.lat, loc.lng]}
          icon={pinIcon}
          eventHandlers={{
            click: () => onLocationClick(loc),
          }}
        />
      ))}
    </MapContainer>
  )
}

export default MapView