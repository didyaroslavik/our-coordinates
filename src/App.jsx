import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="font-title absolute top-3 left-1/2 -translate-x-1/2 z-[1000] text-xl md:text-4xl font-medium tracking-wide text-blue-900 bg-white/80 backdrop-blur px-4 md:px-6 py-2 rounded-full shadow-sm text-center whitespace-nowrap"
      >
        Наші щасливі координати
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        className="w-full h-full"
      >
        <MapView onLocationClick={handleLocationClick} />
      </motion.div>

      <AnimatePresence>
        {selectedLocation && (
          <LocationModal location={selectedLocation} onClose={handleClose} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App