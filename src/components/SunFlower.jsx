import React from 'react'

/**
 * SunflowerReveal
 * Props:
 *  - size: px o unidades (por defecto "240") -> controla width y height del SVG (se usa como px)
 *  - duration: duración de la animación en segundos (por defecto 3)
 *  - delay: retraso antes de empezar en segundos (por defecto 0)
 *  - className: clases extra para el contenedor
 */
export default function SunflowerReveal({ size = 240, duration = 3, delay = 0, className = '' }) {
  const petals = Array.from({ length: 16 }).map((_, i) => {
    const angle = (360 / 16) * i
    // cada pétalo es una elipse rotada alrededor del centro (100,90)
    return (
      <ellipse
        key={i}
        cx="100"
        cy="60"
        rx="18"
        ry="36"
        transform={`rotate(${angle} 100 100)`}
        className="petal"
      />
    )
  })

  return (
    <div
      className={`sunflower-container ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="false"
    >
      {/* estilos locales para no tocar globals */}
      <style>{`
        .sunflower-svg { display: block; width: 100%; height: 100%; }
        /* pétalos */
        .petal {
          fill: #FFD44D; /* amarillo cálido */
          stroke: rgba(0,0,0,0.06);
          stroke-width: 0.6;
          transform-origin: 100px 100px;
        }
        /* centro */
        .center {
          fill: radial-gradient(circle at 40% 30%, #7a4b1b 0%, #5a3314 40%, #3b220e 100%);
        }
        /* fallback real: usamos colores sólidos y texturas sencillas */
        .center-circle { fill: #8b4513; }
        .center-dots { fill: rgba(255,255,255,0.06); }

        /* máscara rect que escala verticalmente para revelar la flor */
        .mask-rect {
          transform-origin: 0 0; /* origen top-left */
          transform: scaleY(0);  /* empieza oculto */
          animation: maskScale ${duration}s ease-out ${delay}s forwards;
        }

        /* animación (solo una vez por forwards) */
        @keyframes maskScale {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }

        /* pequeña levitación y suavizado para cuando ya esté visible */
        .flower-group {
          transition: transform 0.5s ease;
        }
        .flower-group.visible {
          transform: translateY(0);
        }
      `}</style>

      <svg
        viewBox="0 0 200 200"
        className="sunflower-svg"
        role="img"
        aria-label="Sunflower"
      >
        {/* definimos un clipPath/ mask que usaremos para revelar verticalmente */}
        <defs>
          <clipPath id="revealClip">
            {/* rect ocupa todo el svg pero lo escalamos en Y */}
            <rect
              x="0"
              y="0"
              width="200"
              height="200"
              className="mask-rect"
            />
          </clipPath>

          {/* opcional: un ligero filtro para suavizar pétalos */}
          <filter
            id="soft"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur
              stdDeviation="0.3"
              result="b"
            />
            <feBlend
              in="SourceGraphic"
              in2="b"
              mode="normal"
            />
          </filter>
        </defs>

        {/* fondo circular suave */}
        <rect
          width="100%"
          height="100%"
          fill="rgba(255,245,220,0.4)"
        />

        {/* Tallo */}
        <g clipPath="url(#revealClip)">
          <rect
            x="96"
            y="100"
            width="8"
            height="80"
            rx="4"
            fill="#6aa84f"
            opacity="0.95"
          />

          {/* hojas */}
          <path
            d="M100 130 C120 120, 150 120, 140 140 C135 152, 115 150, 100 142"
            fill="#6aa84f"
            opacity="0.95"
          />
          <path
            d="M100 150 C80 140, 50 140, 60 160 C65 172, 85 170, 100 162"
            fill="#5a9a3d"
            opacity="0.95"
          />
        </g>

        {/* Grupo principal de flor (pétalos + centro), aplicada la misma clipPath */}
        <g
          clipPath="url(#revealClip)"
          className="flower-group"
        >
          {/* pétalos */}
          <g filter="url(#soft)">{petals}</g>

          {/* centro del girasol (dos círculos para dar sensación) */}
          <circle
            cx="100"
            cy="100"
            r="30"
            className="center-circle"
          />
          <g transform="translate(100 100) scale(0.8)">
            {/* puntos para textura */}
            {Array.from({ length: 24 }).map((_, i) => {
              const a = (Math.PI * 2 * i) / 24
              const r = 18 + (i % 3) * 0.6
              const x = Math.cos(a) * r
              const y = Math.sin(a) * r
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={1.6}
                  fill="#6b3b1a"
                  opacity="0.9"
                />
              )
            })}
          </g>
        </g>
      </svg>
    </div>
  )
}
