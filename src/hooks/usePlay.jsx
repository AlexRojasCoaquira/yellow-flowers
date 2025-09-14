import { useState, useRef, useEffect } from 'react'

export function usePlay(src) {
  const [play, setPlay] = useState(false)
  const audioRef = useRef(null)

  if (!audioRef.current) {
    audioRef.current = new Audio(src)
  }

  const togglePlay = () => {
    if (play) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlay(!play)
  }

  useEffect(() => {
    const audio = audioRef.current
    const handleEnded = () => setPlay(false)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  return {
    play,
    togglePlay
  }
}
