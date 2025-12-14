import { motion } from 'framer-motion'
import { Heart, Mail, Sparkles } from 'lucide-react'

const WishesPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 pb-32 md:pb-8">
      <div className="max-w-4xl w-full">
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
            <Mail className="w-16 h-16 text-primary mx-auto" strokeWidth={1.5} />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4 glow-text">
            A Letter From The Heart
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-3xl p-8 md:p-16 border-2 border-primary/30 relative overflow-hidden"
        >
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30" />
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/30" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/30" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30" />

          <div className="relative z-10 space-y-6 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl font-cormorant italic text-gray-300"
            >
              Dear Best Bestest Friend Forever,
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light"
            >
              <p className="flex items-center justify-center gap-3">
                Every time I see you, my heart skips a beat
                <Heart className="w-5 h-5 text-primary inline animate-pulse" fill="currentColor" />
              </p>

              <p className="flex items-center justify-center gap-3">
                Your smile is the most beautiful thing I've ever seen
                <Sparkles className="w-5 h-5 text-primary inline" />
              </p>

              <p>
                You make ordinary moments feel magical
              </p>

              <div className="py-4">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
              </div>

              <p className="text-xl md:text-2xl font-cormorant italic text-primary">
                On your special day, I want you to know...
              </p>

              <p className="flex items-center justify-center gap-3">
                You deserve all the happiness in the world
                <Heart className="w-5 h-5 text-primary inline animate-pulse" fill="currentColor" />
              </p>

              <p className="text-gray-400">
                And so much more...
              </p>

              <div className="pt-8 space-y-2">
                <p className="text-gray-400 font-light">With all my heart,</p>
                <p className="text-xl font-cormorant italic text-primary">
                  Someone who thinks you're incredible
                </p>
              </div>
            </motion.div>
          </div>

          {/* Floating Hearts */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-10 right-10 opacity-20"
          >
            <Heart className="w-8 h-8 text-primary" fill="currentColor" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute bottom-10 left-10 opacity-20"
          >
            <Heart className="w-6 h-6 text-primary" fill="currentColor" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default WishesPage
