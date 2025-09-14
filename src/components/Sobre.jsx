import { useState } from 'react'
import { usePlay } from '@/hooks/usePlay'
import audio from '@/assets/flower-yellow.mp3'
export default function RomanticEnvelope({ message = '' }) {
  const [open, setOpen] = useState(false)
  const { play, togglePlay } = usePlay(audio)

  const openCard = () => {
    setOpen(!open)
    togglePlay()
  }
  return (
    <div className="flex items-center justify-center h-screen ">
      <div
        className="relative w-120 h-100 cursor-pointer"
        onClick={() => openCard()}
      >
        <h2 className="text-center text-white text-2xl font-bold mb-8">
          ESTE AÑO NO SERÁS ESPECTADORA
        </h2>
        <div
          className={`absolute left-1/2 bottom-0 w-[240px] h-[150px] bg-white rounded-md shadow-xl border border-gray-200 transition-all duration-700 ease-in-out z-20 flex items-center justify-center text-dark text-center font-serif italic text-lg px-5
          ${
            open
              ? '-translate-x-1/2 -translate-y-[190px] opacity-100'
              : '-translate-x-1/2 translate-y-0 opacity-0'
          }
        `}
          style={{
            backgroundImage: 'linear-gradient(135deg, #fff 25%, #fdf2f8 100%)'
          }}
        >
          {message}
        </div>

        {/* Sobre */}
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full drop-shadow-2xl"
        >
          {/* base */}
          <rect
            x="20"
            y="80"
            width="360"
            height="180"
            rx="8"
            fill="url(#paperGradient)"
            stroke="#e5c07b"
            strokeWidth="2"
          />

          {/* pliegue inferior */}
          <polygon
            points="20,260 200,150 380,260"
            fill="url(#bottomFold)"
            stroke="#e5c07b"
            strokeWidth="2"
          />

          {/* laterales */}
          <polygon
            points="20,80 140,140 140,185 20,260"
            fill="url(#sideLeft)"
            stroke="#e5c07b"
            strokeWidth="2"
          />

          {/* Rectángulo que conecta las puntas de los triángulos */}

          <polygon
            points="380,80 260,140 260,185 380,260"
            fill="url(#sideRight)"
            stroke="#e5c07b"
            strokeWidth="2"
          />
          <rect
            x="120"
            y="140"
            width="165"
            height="50"
            fill="url(#centerRect)"
          />

          {/* solapa */}
          <polygon
            points="20,80 200,170 380,80"
            fill="url(#flap)"
            stroke="#e5c07b"
            strokeWidth="2"
            className={`origin-top transition-transform duration-700 ease-in-out ${
              open ? 'rotate-x-180' : 'rotate-x-0'
            }`}
            style={{ transformBox: 'fill-box', transformOrigin: '50% 0%' }}
          />

          <circle
            cx="200"
            cy="115"
            r="22"
            fill="#fff0f6"
            stroke="green"
            strokeWidth="2"
          />
          <text
            x="200"
            y="123"
            textAnchor="middle"
            fontSize="22"
            className="fill-yellow-500"
          >
            🌻
          </text>

          {/* Gradientes */}
          <defs>
            <linearGradient
              id="centerRect"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#f4d03f"
              />
              <stop
                offset="50%"
                stopColor="#f7dc6f"
              />
              <stop
                offset="100%"
                stopColor="#f4d03f"
              />
            </linearGradient>
            <linearGradient
              id="paperGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#fffaf0"
              />
              <stop
                offset="100%"
                stopColor="#fef3c7"
              />
            </linearGradient>
            <linearGradient
              id="bottomFold"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#fde68a"
              />
              <stop
                offset="100%"
                stopColor="#fef3c7"
              />
            </linearGradient>
            <linearGradient
              id="sideLeft"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#f9a8d4"
              />
              <stop
                offset="100%"
                stopColor="#fbcfe8"
              />
            </linearGradient>
            <linearGradient
              id="sideRight"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#fbcfe8"
              />
              <stop
                offset="100%"
                stopColor="#f9a8d4"
              />
            </linearGradient>
            <linearGradient
              id="flap"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#f472b6"
              />
              <stop
                offset="100%"
                stopColor="#ec4899"
              />
            </linearGradient>
          </defs>
        </svg>
        <h3 className="text-center text-white text-lg font-serif italic">
          Algo bonito está por llegar... 🌻🌻🌻
        </h3>
      </div>
    </div>
  )
}
