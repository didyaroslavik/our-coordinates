import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import { locations } from '../data/locations'

function createPinIcon(size, color, delay) {
  return L.divIcon({
    className: '',
    html: `<div class="map-pin-dot" style="
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border: ${size > 15 ? 3 : 2}px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(59,130,246,0.5);
      animation: pinDrop 0.5s ease-out ${delay}s backwards;
    "></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  })
}

function MapView({ onLocationClick }) {
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
        url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />

      {locations.map((loc, index) => {
        const isDistrict = loc.id.startsWith('warsaw-')
        return (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={createPinIcon(
              isDistrict ? 13 : 18,
              isDistrict ? '#93c5fd' : '#3b82f6',
              0.5 + index * 0.1 // staggered delay
            )}
            eventHandlers={{
              click: () => onLocationClick(loc),
            }}
          />
        )
      })}
    </MapContainer>
  )
}

export default MapView