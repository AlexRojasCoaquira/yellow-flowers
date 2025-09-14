import { useEffect, useRef, useState } from 'react'
import bee from '@/assets/bee.webp'
export default function MovingDot({ children }) {
  const [position, setPosition] = useState({ x: 100, y: 100 })
  const [direction, setDirection] = useState({ dx: 2, dy: 2 })
  const [flip, setFlip] = useState(null)
  const requestRef = useRef(null)

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        // console.log(direction.dx)

        let nextX = prev.x + direction.dx
        let nextY = prev.y + direction.dy

        const maxX = window.innerWidth - 20
        const maxY = window.innerHeight - 20

        // evitar que se salga
        if (nextX < 0) nextX = 0
        if (nextX > maxX) nextX = maxX
        if (nextY < 0) nextY = 0
        if (nextY > maxY) nextY = maxY

        return { x: nextX, y: nextY }
      })

      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [direction])

  // cambiar dirección aleatoriamente cada 1 segundo
  useEffect(() => {
    const interval = setInterval(() => {
      const dx = (Math.random() - 0.5) * 6 // -3 a 3
      const dy = (Math.random() - 0.5) * 6
      setDirection({ dx, dy })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setFlip(direction.dx > 0)
  }, [direction])

  return (
    <div
      className="fixed cursor-pointer size-30 transition-transform duration-300 pointer-events-none"
      style={{
        left: position.x,
        top: position.y,
        // usamos transform solo para el flip; left/top mantienen la posición
        transform: flip ? 'scaleX(-1)' : 'none',
        willChange: 'transform, left, top'
      }}
    >
      <img
        src={bee}
        alt="moving dot"
      />
    </div>
  )
}
