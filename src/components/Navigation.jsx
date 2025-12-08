import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Navigation = ({ currentPage, totalPages, onNext, onPrev }) => {
  return (
    <>
      {/* Navigation Buttons */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-3 z-50">
        {currentPage > 1 && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onPrev}
            className="p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full hover:bg-white/20 transition-all group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
          </motion.button>
        )}

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/50 flex items-center gap-2"
        >
          {currentPage === totalPages - 1 ? (
            <>
              <span>Start Over</span>
              <ChevronLeft className="w-5 h-5" />
            </>
          ) : (
            <>
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </div>

      {/* Page Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-50"
      >
        <div className="flex items-center gap-2 glass rounded-full px-4 py-2 border border-white/10">
          {Array.from({ length: totalPages - 1 }, (_, i) => i + 1).map((page) => (
            <div
              key={page}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === page
                  ? 'bg-primary w-6'
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default Navigation
