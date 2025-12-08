import { useEffect, useState } from 'react'

const Background = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate particles
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5
    }))
    setParticles(particleArray)
  }, [])

  return (
    <>
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0" />
      
      {/* Red Accent Overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent z-0" />
      
      {/* Animated Grid */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(220, 20, 60, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 20, 60, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle absolute rounded-full bg-white opacity-20"
            style={{
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Spotlight Effect */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]" />
      </div>
    </>
  )
}

export default Background
