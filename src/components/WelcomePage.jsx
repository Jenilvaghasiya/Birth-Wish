import { motion } from 'framer-motion'
import { Gift, Sparkles } from 'lucide-react'

const WelcomePage = ({ onNext }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block mb-8"
          >
            <Gift className="w-20 h-20 md:w-32 md:h-32 text-primary mx-auto" strokeWidth={1.5} />
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 glow-text">
            Something Special
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-3 mb-12"
          >
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Awaits You
            </p>
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="group relative px-12 py-5 bg-primary text-white text-lg md:text-xl font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,20,60,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              Open Your Gift
              <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary-light opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-16 text-sm text-gray-500 font-light tracking-widest uppercase"
          >
            Scroll down to begin
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default WelcomePage
