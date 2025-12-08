import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import { Gift, Heart, Sparkles, Zap, X } from 'lucide-react'

const InteractivePage = () => {
  const [showConfetti, setShowConfetti] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [showGif, setShowGif] = useState(false)
  const [currentGif, setCurrentGif] = useState('')

  const surprises = [
    "You're the reason I smile every day",
    "Your happiness means everything to me",
    "You deserve all the love in the world",
    "You're absolutely incredible",
    "My day is better because you exist"
  ]

  const specialMessages = [
    "You make the world a better place just by being in it",
    "Your smile is my favorite thing in the world",
    "I'm so grateful you exist",
    "You're the reason I believe in magic",
    "Every day with you in it is a gift"
  ]

  const openGiftBox = () => {
    const surprise = surprises[Math.floor(Math.random() * surprises.length)]
    setModalContent(surprise)
    setShowModal(true)
    triggerConfetti()
    showGifPopup('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGpxd2MyanRsaW00ejd0cGJrbGtzaWI4dHFscWQxMmhraDNrYnU3dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1JmGiBtqTuehfYxuy9/giphy.gif')
  }

  const showSpecialMessage = () => {
    const message = specialMessages[Math.floor(Math.random() * specialMessages.length)]
    setModalContent(message)
    setShowModal(true)
    showGifPopup('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWRhYzh1anl1OHZqMWNpdnU4NjVyNXIxdjR4NzE1dms1eDZ1b3N1aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif')
  }

  const showGifPopup = (gifUrl) => {
    setCurrentGif(gifUrl)
    setShowGif(true)
    setTimeout(() => {
      setShowGif(false)
    }, 3000)
  }

  const triggerConfetti = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000)
  }

  const createHeartExplosion = () => {
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const heart = document.createElement('div')
        heart.innerHTML = '❤️'
        heart.className = 'fixed text-3xl pointer-events-none z-[9999]'
        heart.style.left = '50%'
        heart.style.top = '50%'
        document.body.appendChild(heart)

        const angle = (Math.PI * 2 * i) / 30
        const velocity = Math.random() * 200 + 100
        const tx = Math.cos(angle) * velocity
        const ty = Math.sin(angle) * velocity

        const animation = heart.animate(
          [
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
            { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0)`, opacity: 0 }
          ],
          { duration: 1500, easing: 'cubic-bezier(0, 0.5, 0.5, 1)' }
        )

        animation.onfinish = () => heart.remove()
      }, i * 30)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 pb-32 md:pb-8">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          colors={['#DC143C', '#FFFFFF', '#000000']}
          numberOfPieces={200}
          recycle={false}
        />
      )}

      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4 glow-text">
            Special Surprises
          </h2>
          <p className="text-gray-400 text-lg">Click to reveal the magic</p>
        </motion.div>

        <div className="glass rounded-3xl p-8 md:p-12 border border-white/10">
          {/* Gift Box */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="text-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={openGiftBox}
              className="inline-block rounded-3xl overflow-hidden border-4 border-primary/50 hover:border-primary transition-all shadow-2xl hover:shadow-primary/50"
            >
              <img 
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2k4bXFiYWh2MzRjNm9uZmdqM3ZnaHRmendyanJ3eTVmdHA3OGh4diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gjHkRHSuHqu99y9Yjt/giphy.gif"
                alt="Gift Box"
                className="w-48 h-48 md:w-64 md:h-64 object-cover"
              />
            </motion.button>
            <p className="mt-6 text-gray-400">Click the gift to open</p>
          </motion.div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                createHeartExplosion()
                showGifPopup('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGpxd2MyanRsaW00ejd0cGJrbGtzaWI4dHFscWQxMmhraDNrYnU3dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1JmGiBtqTuehfYxuy9/giphy.gif')
              }}
              className="group flex items-center justify-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all"
            >
              <Heart className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-lg font-light">Heart Explosion</span>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={showSpecialMessage}
              className="group flex items-center justify-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all"
            >
              <Sparkles className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-lg font-light">Secret Message</span>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                triggerConfetti()
                showGifPopup('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWRhYzh1anl1OHZqMWNpdnU4NjVyNXIxdjR4NzE1dms1eDZ1b3N1aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif')
              }}
              className="group flex items-center justify-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all"
            >
              <Zap className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-lg font-light">Celebration</span>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                openGiftBox()
                createHeartExplosion()
              }}
              className="group flex items-center justify-center gap-3 p-6 rounded-2xl bg-primary/10 border border-primary/30 hover:border-primary transition-all"
            >
              <Gift className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-lg font-light">Surprise Me!</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-lg w-full rounded-3xl p-8 md:p-12 border-2 border-primary/30 relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block mb-6"
                >
                  <Heart className="w-16 h-16 text-primary mx-auto" fill="currentColor" />
                </motion.div>

                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light mb-8">
                  {modalContent}
                </p>

                <button
                  onClick={() => setShowModal(false)}
                  className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GIF Popup */}
      <AnimatePresence>
        {showGif && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-[200] pointer-events-none"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="relative"
            >
              <img 
                src={currentGif} 
                alt="Celebration" 
                className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl border-4 border-primary"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default InteractivePage
