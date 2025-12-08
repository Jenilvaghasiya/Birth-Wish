import { motion } from 'framer-motion'
import { Heart, Sparkles, Gift, Star } from 'lucide-react'

const FinalePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 pb-32 md:pb-8">
      <div className="max-w-4xl w-full space-y-8">
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-8 md:p-16 border border-white/10 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <Heart className="w-20 h-20 text-primary" fill="currentColor" strokeWidth={1.5} />
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-primary/30 rounded-full blur-xl"
              />
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8 glow-text">
            A Message From The Heart
          </h2>

          <div className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Krishi, on this special day, I want you to know...
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-2"
            >
              Every moment spent thinking about you is a moment well spent
              <Heart className="w-5 h-5 text-primary inline animate-pulse" fill="currentColor" />
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center gap-2"
            >
              Your smile has the power to turn my worst days into the best ones
              <Sparkles className="w-5 h-5 text-primary inline" />
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              You're not just special, you're extraordinary in every way
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="py-4"
            >
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              I hope this year brings you everything your heart desires,
              all the happiness you deserve,
              and moments that take your breath away
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="text-gray-400"
            >
              Keep shining, keep smiling, keep being the incredible person you are.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex items-center justify-center gap-2"
            >
              The world is lucky to have you
              <Star className="w-5 h-5 text-primary inline" />
            </motion.p>
          </div>
        </motion.div>

        {/* Birthday Wish Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-black opacity-90" />
          <div className="relative z-10 p-8 md:p-16 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="mb-6"
            >
              <Gift className="w-16 h-16 text-white mx-auto" strokeWidth={1.5} />
            </motion.div>

            <h3 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
              My Birthday Wish For You
            </h3>

            <div className="space-y-4 text-base md:text-lg text-white/90 leading-relaxed font-light max-w-2xl mx-auto">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                May your day be filled with laughter, love, and unforgettable moments
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                May all your dreams come true, starting today
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                And may you always know how truly special you are
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
                className="pt-8"
              >
                <p className="text-3xl md:text-5xl font-playfair font-bold text-white">
                  Happy Birthday Krishi
                </p>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <Heart className="w-6 h-6 text-white animate-pulse" fill="currentColor" />
                  {/* <Sparkles className="w-6 h-6 text-white" />
                  <Gift className="w-6 h-6 text-white" />
                  <Sparkles className="w-6 h-6 text-white" /> */}
                  <Heart className="w-6 h-6 text-white animate-pulse" fill="currentColor" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        </motion.div>

        {/* Animated GIF at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.02, 1],
              y: [0, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="rounded-3xl overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/30"
          >
            <img 
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGQ4YmNqcmFleWQzaGJrOTZiNXpyMWNyY2x3Z2lwa2kycG5tbTJoeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SYo1DFS8NLhhqzzjMU/giphy.gif"
              alt="Birthday Celebration"
              className="w-full max-w-md md:max-w-lg h-auto object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default FinalePage
