import { useState } from 'react'
import { usePlay } from '@/hooks/usePlay'
import audio from '@/assets/flower-yellow.mp3'
import { Envelope } from './Envelope'
import Deslize from './Deslize'
import { SunflowerReveal } from './SunFlower'
export default function RomanticEnvelope({ message = '', showLetter }) {
  const [open, setOpen] = useState(false)
  const { togglePlay } = usePlay(audio)

  const openCard = () => {
    console.log('openCard')
    setOpen(!open)
    togglePlay()
  }
  const letters = Array.from({ length: 3 })
  return (
    <div className="h-full flex items-center justify-center">
      <div
        className="relative w-sm cursor-pointer"
        onClick={() => openCard()}
      >
        <div
          className={`absolute left-1/2 bottom-15 w-[300px] h-[180px] bg-white rounded-md shadow-xl border border-gray-200 transition-all duration-800 ease-in-out flex items-center justify-center text-dark text-center font-serif italic text-lg px-5
          ${
            open
              ? '-translate-x-1/2 opacity-100 animate-updown z-20'
              : '-translate-x-1/2 translate-y-0 opacity-0'
          }
        `}
          style={{
            backgroundImage: 'linear-gradient(135deg, #fff 25%, #fdf2f8 100%)'
          }}
        >
          {message}
        </div>
        <div className="relative h-50 ">
          <Envelope open={open} />
        </div>
        {/* <h3 className="absolute text-center text-white text-lg font-serif italic mt-3">
          Algo bonito está por llegar... 🌻🌻🌻
        </h3> */}

        {open && (
          <>
            {letters.map((_, index) => (
              <Deslize key={index}></Deslize>
            ))}
            <SunflowerReveal></SunflowerReveal>
          </>
        )}
      </div>
    </div>
  )
}
