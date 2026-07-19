import { motion } from 'framer-motion'

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
      {/* Backdrop */}
      <div className="absolute inset-0 bg-blue-950/30 backdrop-blur-sm" />

      {/* Card */}
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

        {/* Photo gallery placeholder — real photos added on Day 4 */}
        {location.photos.length === 0 ? (
          <div className="text-sm text-blue-300 italic">
            Фото з’являться тут незабаром 📷
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {location.photos.map((photo, i) => (
              <img
                key={i}
                src={photo}
                alt={location.name}
                className="w-full h-32 object-cover rounded-xl"
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default LocationModal