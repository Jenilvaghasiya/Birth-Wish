import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Heart, Gift, Sparkles, X } from 'lucide-react'

const BirthdayBook = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [isFlipping, setIsFlipping] = useState(false)

  // Exactly 5 pages with specific images
  const pages = [
    {
      image: '/images/1.jpeg',
      wish: "Happy Birthday Krishi! 🎉 May this special day bring you endless joy and wonderful surprises! Your smile lights up every room you enter.",
      pageNumber: 1
    },
    {
      image: '/images/5.jpeg',
      wish: "Wishing you a year filled with happiness, love, and all your heart desires! 💖 You deserve all the beautiful things life has to offer.",
      pageNumber: 2
    },
    {
      image: '/images/10.jpeg',
      wish: "May your birthday be as amazing as you are! ✨ Here's to another year of beautiful memories and incredible adventures ahead.",
      pageNumber: 3
    },
    {
      image: '/images/8.jpeg',
      wish: "Happy Birthday! 🎂 May every moment of your special day be filled with the same joy you bring to everyone around you.",
      pageNumber: 4
    },
    {
      image: '/images/13.jpeg',
      wish: "On your birthday, I wish you happiness, health, and all the love in the world! 🌟 You make every day brighter just by being you!",
      pageNumber: 5
    }
  ]

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(prev => prev + 1)
        setIsFlipping(false)
      }, 600)
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(prev => prev - 1)
        setIsFlipping(false)
      }, 600)
    }
  }

  const openBook = () => {
    setIsOpen(true)
  }

  const closeBook = () => {
    setIsOpen(false)
    setCurrentPage(0)
  }

  if (!isOpen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden p-4">
        {/* Background particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Closed Book */}
        <motion.div
          className="relative cursor-pointer"
          onClick={openBook}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-72 h-96 md:w-80 md:h-[420px] bg-gradient-to-r from-gray-900 via-red-900 to-black rounded-lg shadow-2xl relative overflow-hidden border border-primary/30">
            {/* Book cover design */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            
            {/* Title */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-8">
              <div className="mb-6">
                <Heart className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 animate-pulse" />
              </div>
              
              <h1 className="text-2xl md:text-3xl font-playfair font-bold mb-4 tracking-wide text-white glow-text">
                Birthday
              </h1>
              <h2 className="text-xl md:text-2xl font-playfair text-primary mb-6">
                Memories
              </h2>
              
              <div className="flex items-center gap-2 text-gray-300">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-xs md:text-sm">Click to open</span>
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4">
              <Gift className="w-6 h-6 md:w-8 md:h-8 text-primary/50" />
            </div>
            <div className="absolute bottom-4 left-4">
              <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-primary/30 rounded-full flex items-center justify-center">
                <span className="text-primary text-xs font-bold">{pages.length}</span>
              </div>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-2 md:p-4 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Open Book */}
      <div className="relative w-full max-w-6xl">
        <div className="book-container relative w-full h-[500px] md:h-[600px] lg:h-[700px] perspective-1000">
          {/* Book base */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-2xl transform-gpu">
            
            {/* Left page - Image */}
            <div className="absolute left-0 top-0 w-1/2 h-full bg-white rounded-l-lg shadow-inner overflow-hidden">
              <div className="p-2 md:p-4 h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src={pages[currentPage].image}
                    alt={`Memory ${currentPage + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="text-center text-gray-400 text-xs md:text-sm font-serif mt-2">
                  {pages[currentPage].pageNumber}
                </div>
              </div>
            </div>

            {/* Right page - Wish Text */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-white rounded-r-lg shadow-inner overflow-hidden">
              <div className="p-3 md:p-6 h-full flex flex-col">
                <div className="flex-1 flex flex-col justify-center">
                  <div className="text-center mb-3 md:mb-4">
                    <div className="inline-flex items-center gap-1 md:gap-2 bg-primary text-white px-2 md:px-3 py-1 rounded-full text-xs mb-3 md:mb-4">
                      <Heart className="w-2 h-2 md:w-3 md:h-3" />
                      <span className="text-xs">Memory {currentPage + 1}</span>
                    </div>
                  </div>

                  <div className="text-center space-y-3 md:space-y-4">
                    <h3 className="text-sm md:text-lg font-playfair text-gray-800 mb-2 md:mb-3">
                      Beautiful Moments
                    </h3>
                    
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed px-1 md:px-2">
                      {pages[currentPage].wish}
                    </p>

                    <div className="flex justify-center gap-1 md:gap-2 mt-4 md:mt-6">
                      <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary animate-pulse" />
                      <Heart className="w-3 h-3 md:w-4 md:h-4 text-red-500 animate-pulse" />
                      <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary animate-pulse" />
                    </div>
                  </div>
                </div>
                <div className="text-center text-gray-400 text-xs md:text-sm font-serif">
                  {pages[currentPage].pageNumber}
                </div>
              </div>
            </div>

            {/* Center spine */}
            <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-500 transform -translate-x-1/2 shadow-lg z-10"></div>

            {/* Page flip animation overlay */}
            {isFlipping && (
              <div className="absolute inset-0 pointer-events-none z-20">
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: -180 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="flip-page absolute right-0 top-0 w-1/2 h-full bg-white rounded-r-lg shadow-2xl transform-gpu origin-left overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="p-3 md:p-6 h-full flex flex-col">
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="text-center mb-3 md:mb-4">
                        <div className="inline-flex items-center gap-1 md:gap-2 bg-primary text-white px-2 md:px-3 py-1 rounded-full text-xs mb-3 md:mb-4">
                          <Heart className="w-2 h-2 md:w-3 md:h-3" />
                          <span className="text-xs">Memory {currentPage + 1}</span>
                        </div>
                      </div>

                      <div className="text-center space-y-3 md:space-y-4">
                        <h3 className="text-sm md:text-lg font-playfair text-gray-800 mb-2 md:mb-3">
                          Beautiful Moments
                        </h3>
                        
                        <p className="text-xs md:text-sm text-gray-700 leading-relaxed px-1 md:px-2">
                          {pages[currentPage] && pages[currentPage].wish}
                        </p>

                        <div className="flex justify-center gap-1 md:gap-2 mt-4 md:mt-6">
                          <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary animate-pulse" />
                          <Heart className="w-3 h-3 md:w-4 md:h-4 text-red-500 animate-pulse" />
                          <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary animate-pulse" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-gray-400 text-xs md:text-sm font-serif">
                      {pages[currentPage] && pages[currentPage].pageNumber}
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1 md:left-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 0 || isFlipping}
            className="w-10 h-10 md:w-12 md:h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed border border-white/20"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-1 md:right-4">
          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1 || isFlipping}
            className="w-10 h-10 md:w-12 md:h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed border border-white/20"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={closeBook}
          className="absolute top-2 md:top-4 right-2 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-all duration-300 border border-white/20"
        >
          <X className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        {/* Page Counter */}
        <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-full px-3 md:px-4 py-1 md:py-2 text-white text-xs md:text-sm border border-white/20">
          {currentPage + 1} / {pages.length}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-lg">
          <div 
            className="h-full bg-gradient-to-r from-primary to-red-600 transition-all duration-500 rounded-b-lg"
            style={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default BirthdayBook