import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Music, Volume2, Play } from 'lucide-react'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const handleCanPlay = () => setIsLoaded(true)
      const handleError = (e) => {
        console.log('Audio load error:', e)
        setIsLoaded(false)
      }
      
      audio.addEventListener('canplaythrough', handleCanPlay)
      audio.addEventListener('error', handleError)
      
      return () => {
        audio.removeEventListener('canplaythrough', handleCanPlay)
        audio.removeEventListener('error', handleError)
      }
    }
  }, [])

  const toggleMusic = async () => {
    if (!hasInteracted) {
      setHasInteracted(true)
    }
    
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause()
          setIsPlaying(false)
        } else {
          // Set volume
          audioRef.current.volume = 0.5
          await audioRef.current.play()
          setIsPlaying(true)
        }
      } catch (error) {
        console.log('Audio play failed:', error)
        setIsPlaying(false)
      }
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
        title={isLoaded ? (isPlaying ? "Pause Music" : "Play Music") : "Loading..."}
      >
        {!isLoaded ? (
          <Music className="w-6 h-6 text-white/40 animate-pulse" />
        ) : isPlaying ? (
          <Volume2 className="w-6 h-6 text-primary animate-pulse" />
        ) : (
          <Play className="w-6 h-6 text-white/60 group-hover:text-primary transition-colors" />
        )}
      </motion.button>
      
      {/* {!hasInteracted && isLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 right-6 md:top-24 md:right-10 z-40 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg border border-white/20"
        >
          Click to play music 🎵
        </motion.div>
      )} */}

      <audio 
        ref={audioRef} 
        loop
        preload="auto"
      >
        <source
          src="/Tum Ho Toh Saiyaara 320 Kbps.mp3"
          type="audio/mpeg"
        />
        <source
          src="/song/Tum Ho Toh Saiyaara 320 Kbps.mp3"
          type="audio/mpeg"
        />
      </audio>
    </>
  )
}

export default MusicPlayer
