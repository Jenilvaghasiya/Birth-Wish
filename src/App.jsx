import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import AnimatedCursor from 'react-animated-cursor'
import WelcomePage from './components/WelcomePage'
import IntroPage from './components/IntroPage'
import TimelinePage from './components/TimelinePage'
import GalleryPage from './components/GalleryPage'
import WishesPage from './components/WishesPage'
import InteractivePage from './components/InteractivePage'
import FinalePage from './components/FinalePage'
import PremiumBookDemo from './components/PremiumBookDemo'
import Background from './components/Background'
import Navigation from './components/Navigation'
import MusicPlayer from './components/MusicPlayer'
import MobileCursor from './components/MobileCursor'

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const totalPages = 8

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const pages = [
    <WelcomePage key="welcome" onNext={() => setCurrentPage(1)} />,
    <IntroPage key="intro" />,
    <TimelinePage key="timeline" />,
    <GalleryPage key="gallery" />,
    <WishesPage key="wishes" />,
    <InteractivePage key="interactive" />,
    <PremiumBookDemo key="book" />,
    <FinalePage key="finale" />
  ]

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <>
      {/* Desktop Animated Cursor */}
      {!isMobile && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: '#DC143C',
            mixBlendMode: 'exclusion'
          }}
          outerStyle={{
            border: '2px solid #DC143C',
            mixBlendMode: 'exclusion'
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            {
              target: '.custom',
              options: {
                innerSize: 12,
                outerSize: 12,
                color: '255, 255, 255',
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5
              }
            }
          ]}
        />
      )}

      {/* Mobile Touch Cursor Animation */}
      {isMobile && <MobileCursor />}

      <div className="relative min-h-screen overflow-hidden bg-black">
        <Background />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative z-10"
          >
            {pages[currentPage]}
          </motion.div>
        </AnimatePresence>

        {currentPage > 0 && (
          <Navigation 
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={nextPage}
            onPrev={prevPage}
          />
        )}

        <MusicPlayer />
      </div>
    </>
  )
}

export default App
