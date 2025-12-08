import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MobileCursor = () => {
  const [touches, setTouches] = useState([])

  useEffect(() => {
    const handleTouch = (e) => {
      const touch = e.touches[0] || e.changedTouches[0]
      if (touch) {
        const newTouch = {
          id: Date.now() + Math.random(),
          x: touch.clientX,
          y: touch.clientY
        }
        
        setTouches(prev => [...prev, newTouch])
        
        // Remove after animation
        setTimeout(() => {
          setTouches(prev => prev.filter(t => t.id !== newTouch.id))
        }, 1000)
      }
    }

    const handleTouchMove = (e) => {
      const touch = e.touches[0]
      if (touch) {
        const newTouch = {
          id: Date.now() + Math.random(),
          x: touch.clientX,
          y: touch.clientY
        }
        
        setTouches(prev => [...prev, newTouch])
        
        setTimeout(() => {
          setTouches(prev => prev.filter(t => t.id !== newTouch.id))
        }, 800)
      }
    }

    // Add event listeners
    document.addEventListener('touchstart', handleTouch)
    document.addEventListener('touchmove', handleTouchMove)

    return () => {
      document.removeEventListener('touchstart', handleTouch)
      document.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {touches.map((touch) => (
          <motion.div
            key={touch.id}
            initial={{ 
              opacity: 1, 
              scale: 0,
              x: touch.x,
              y: touch.y
            }}
            animate={{ 
              opacity: 0, 
              scale: 2,
              y: touch.y - 50
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: 0,
              top: 0
            }}
          >
            {/* Heart Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#DC143C"
              className="drop-shadow-lg"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Ripple effect on touch */}
      <AnimatePresence>
        {touches.map((touch) => (
          <motion.div
            key={`ripple-${touch.id}`}
            initial={{ 
              opacity: 0.6, 
              scale: 0,
              x: touch.x,
              y: touch.y
            }}
            animate={{ 
              opacity: 0, 
              scale: 3
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary"
            style={{
              left: 0,
              top: 0,
              width: '40px',
              height: '40px'
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default MobileCursor
