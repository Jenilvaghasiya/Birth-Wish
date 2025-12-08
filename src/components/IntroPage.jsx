import { motion } from 'framer-motion'
import { Heart, Sparkles, Star, Smile } from 'lucide-react'

const IntroPage = () => {
  const qualities = [
    { icon: Smile, text: 'Your smile lights up every room', delay: 0.2 },
    { icon: Heart, text: 'Your kindness touches hearts', delay: 0.4 },
    { icon: Sparkles, text: 'Your presence makes everything better', delay: 0.6 },
    { icon: Star, text: 'You are simply extraordinary', delay: 0.8 }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 pb-32 md:pb-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-16 border border-white/10"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <Heart className="w-16 h-16 md:w-20 md:h-20 text-primary" fill="currentColor" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                />
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 glow-text">
              Happy Birthday
            </h2>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-primary mb-8">
              Krishi
            </h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Today is not just another day. It's the day the world became brighter, 
              more beautiful, because <span className="text-primary font-semibold">you</span> came into it.
            </motion.p>
          </div>

          {/* Divider */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center">
              <Sparkles className="w-6 h-6 text-primary bg-black px-2" />
            </div>
          </div>

          {/* Qualities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualities.map((quality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: quality.delay }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <quality.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-200 font-light">
                  {quality.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default IntroPage
