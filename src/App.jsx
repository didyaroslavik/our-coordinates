import { useState } from 'react'
import MapView from './components/MapView'

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null)

  const handleLocationClick = (location) => {
    setSelectedLocation(location)
    console.log('Clicked:', location.name) // temporary, remove later
  }

  return (
    <div className="relative w-full h-screen bg-white">
      <h1 className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] text-2xl md:text-3xl font-light text-blue-900 bg-white/80 backdrop-blur px-6 py-2 rounded-full shadow-sm">
        Наші щасливі координати
      </h1>

      <MapView onLocationClick={handleLocationClick} />

      {/* Modal will go here tomorrow */}
      {selectedLocation && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[1000] bg-white px-4 py-2 rounded-full shadow-md text-blue-800">
          Selected: {selectedLocation.name}
        </div>
      )}
    </div>
  )
}

export default App