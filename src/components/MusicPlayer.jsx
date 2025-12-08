import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Music, Volume2, VolumeX } from 'lucide-react'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          console.log('Audio play failed')
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        className="fixed top-6 right-6 md:top-10 md:right-10 z-50 p-4 glass rounded-full border border-white/20 hover:border-primary/50 transition-all group"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-primary" />
        ) : (
          <VolumeX className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
        )}
      </motion.button>

      <audio ref={audioRef} loop>
        <source
          src="/song/Tum Ho Toh Saiyaara 320 Kbps.mp3"
          type="audio/mpeg"
        />
      </audio>
    </>
  )
}

export default MusicPlayer
