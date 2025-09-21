import { useEffect, useRef, useState } from 'react'
import bee from '@/assets/bee.webp'
import flower from '@/assets/favicon.webp'
export default function MovingDot({ children, letter }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [direction, setDirection] = useState({ dx: 2, dy: 2 })
  const [flip, setFlip] = useState(null)
  const requestRef = useRef(null)

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
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
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: flip ? 'scaleX(-1)' : 'none',
        willChange: 'transform, left, top'
      }}
    >
      <img
        src={bee}
        alt="moving dot"
      />
      <img
        src={flower}
        alt="moving dot"
        className="absolute top-2 -left-12 w-16"
      />
      <span className=" absolute top-6 -left-5 uppercase text-white text-xl rounded-full  px-2 py-1">
        {letter}
      </span>
    </div>
  )
}
