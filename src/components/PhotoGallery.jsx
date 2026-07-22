import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function PhotoGallery({ photos, locationName }) {
  const [activeIndex, setActiveIndex] = useState(null)

  if (photos.length === 0) {
    return (
      <div className="text-sm text-blue-300 italic">
        Фото з’являться тут незабаром 📷
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {photos.map((photo, i) => (
          <motion.img
            key={i}
            src={photo}
            alt={locationName}
            className="w-full h-28 md:h-32 object-cover rounded-xl cursor-pointer"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[3000] flex items-center justify-center p-6 bg-blue-950/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.img
              key={activeIndex}
              src={photos[activeIndex]}
              alt={locationName}
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Prev/Next arrows, only if more than 1 photo */}
            {photos.length > 1 && (
              <>
                <button
                  className="absolute left-2 md:left-8 text-white/80 hover:text-white text-3xl w-12 h-12 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveIndex((activeIndex - 1 + photos.length) % photos.length)
                  }}
                >
                  ‹
                </button>
                <button
                  className="absolute right-2 md:right-8 text-white/80 hover:text-white text-3xl w-12 h-12 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveIndex((activeIndex + 1) % photos.length)
                  }}
                >
                  ›
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default PhotoGallery