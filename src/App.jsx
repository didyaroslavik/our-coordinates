import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import MapView from './components/MapView'
import LocationModal from './components/LocationModal'

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null)

  const handleLocationClick = (location) => {
    setSelectedLocation(location)
  }

  const handleClose = () => {
    setSelectedLocation(null)
  }

  return (
    <div className="relative w-full h-screen bg-white">
      <h1 className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] text-2xl md:text-3xl font-light text-blue-900 bg-white/80 backdrop-blur px-6 py-2 rounded-full shadow-sm">
        Наші щасливі координати
      </h1>

      <MapView onLocationClick={handleLocationClick} />

      <AnimatePresence>
        {selectedLocation && (
          <LocationModal location={selectedLocation} onClose={handleClose} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App