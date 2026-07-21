import { motion } from 'framer-motion'
import PhotoGallery from './PhotoGallery'

function LocationModal({ location, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-blue-950/30 backdrop-blur-sm" />

      <motion.div
        className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-8"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-400 hover:bg-blue-100 transition-colors"
        >
          ✕
        </button>

        <h2 className="text-2xl font-light text-blue-900 mb-4 pr-8">
          {location.name}
        </h2>

        <p className="text-blue-800/80 leading-relaxed mb-6">
          {location.message}
        </p>

        <PhotoGallery photos={location.photos} locationName={location.name} />
      </motion.div>
    </motion.div>
  )
}

export default LocationModal