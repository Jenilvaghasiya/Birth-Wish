import { motion } from 'framer-motion'
import { Heart, Sparkles, Star, Crown } from 'lucide-react'

const TimelinePage = () => {
  const moments = [
    {
      icon: Sparkles,
      title: 'Your Smile',
      description: 'Brightens my entire day and makes everything better',
      position: 'left'
    },
    {
      icon: Heart,
      title: 'Your Kindness',
      description: 'Touches hearts and makes the world a better place',
      position: 'right'
    },
    {
      icon: Star,
      title: 'Your Presence',
      description: 'Makes ordinary moments feel extraordinary',
      position: 'left'
    },
    {
      icon: Crown,
      title: 'Your Spirit',
      description: 'Inspires everyone around you to be their best',
      position: 'right'
    }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 py-20 pb-32 md:pb-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4 glow-text">
            What Makes You Special
          </h2>
          <p className="text-gray-400 text-lg">Every reason why you're amazing</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {moments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: moment.position === 'left' ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`flex items-center gap-8 ${
                  moment.position === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${moment.position === 'right' ? 'md:text-right' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-2xl p-6 md:p-8 border border-white/10 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className={`flex items-center gap-4 mb-4 ${
                      moment.position === 'right' ? 'md:justify-end' : ''
                    }`}>
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <moment.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-playfair font-bold">
                        {moment.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
                      {moment.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:block relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="w-4 h-4 rounded-full bg-primary border-4 border-black"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      className="absolute inset-0 bg-primary rounded-full blur-md"
                    />
                  </motion.div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-block glass rounded-full px-8 py-4 border border-primary/30">
            <p className="text-primary text-lg md:text-xl font-cormorant italic">
              And countless more reasons...
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TimelinePage
