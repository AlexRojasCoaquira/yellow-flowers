import { useRef, useState } from 'react'
import audio from '@/assets/flower-yellow.mp3'
export default function BackgroundMusic() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div className="p-4">
      <button
        onClick={toggleMusic}
        className="px-4 py-2 bg-yellow-500 rounded-lg text-white"
      >
        {playing ? 'Pause music' : 'Play music'}
      </button>

      <audio
        ref={audioRef}
        src={audio}
        loop
      />
    </div>
  )
}
