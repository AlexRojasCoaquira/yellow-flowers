import '@/styles/flowers.css'
export default function FlowerReveal({ src, alt = 'flower', size = 'w-48 h-48' }) {
  return (
    <div className="flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className={`${size} animate-clip-reveal`}
      />
    </div>
  )
}
