import { motion } from 'framer-motion'
import { Heart, Camera, Sparkles, Star } from 'lucide-react'

const GalleryPage = () => {
  const photos = [
    { icon: Heart, gradient: 'from-red-900 to-red-600' },
    { icon: Camera, gradient: 'from-gray-800 to-gray-600' },
    { icon: Sparkles, gradient: 'from-red-800 to-pink-600' },
    { icon: Star, gradient: 'from-gray-900 to-red-900' },
    { icon: Heart, gradient: 'from-red-700 to-red-500' },
    { icon: Camera, gradient: 'from-gray-700 to-red-700' }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 pb-32 md:pb-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-6"
          >
            <Camera className="w-16 h-16 text-primary mx-auto" strokeWidth={1.5} />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4 glow-text">
            Memories & Moments
          </h2>
          <p className="text-gray-400 text-lg">Capturing the beautiful journey</p>
        </motion.div>

        <div className="glass rounded-3xl p-6 md:p-12 border border-white/10">
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${photo.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <photo.icon className="w-12 h-12 md:w-16 md:h-16 text-white/80 group-hover:text-white group-hover:scale-110 transition-all" strokeWidth={1.5} />
                </div>
                <div className="absolute inset-0 border-2 border-white/10 group-hover:border-primary/50 rounded-2xl transition-colors" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-light">Add Photo</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Add your favorite photos of Krishi here</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-8"
        >
          <p className="text-xl md:text-2xl font-cormorant italic text-gray-400">
            "Every moment with you is a treasure"
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default GalleryPage
