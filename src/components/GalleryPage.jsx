import { motion } from 'framer-motion'
import { Heart, Camera, Sparkles, Star } from 'lucide-react'

const GalleryPage = () => {
  const photos = [
    { image: '/src/images/14.jpeg', title: 'Beautiful Memory' },
    { image: '/src/images/2.jpeg', title: 'Sweet Moment' },
    { image: '/src/images/18.jpeg', title: 'Happy Times' },
    { image: '/src/images/7.jpeg', title: 'Precious Memory' },
    { image: '/src/images/17.jpeg', title: 'Joyful Moment' },
    { image: '/src/images/16.jpeg', title: 'Special Day' }
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
            My ButterCup 
          </h2>
          {/* <p className="text-gray-400 text-lg">Capturing the beautiful journey</p> */}
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
                {/* Photo Image */}
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Border */}
                <div className="absolute inset-0 border-2 border-white/10 group-hover:border-primary/50 rounded-2xl transition-colors" />
                
                {/* Hover Overlay with Title */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <div className="text-center">
                    <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                    <span className="text-white text-sm font-light">{photo.title}</span>
                  </div>
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
            {/* <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Beautiful memories of Krishi's special moments</span>
              <Sparkles className="w-4 h-4" />
            </div> */}
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
