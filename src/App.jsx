import { useState } from 'react'
import './App.css'
import BackgroundMusic from './components/Audio'
import FlowerReveal from './components/FlowerReveal'
import flower from '@/assets/image.png'
import { SunflowerReveal } from './components/SunFlower'
import Sobre from './components/Sobre'
function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCard = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <main className="w-full flex gap-10 flex-col items-center justify-center bg-gradient-to-br from-black via-slate-900 to-indigo-950">
        <div className="text-center text-white text-3xl font-bold ">
          {/* ESTE AÑO NO SERÁS ESPECTADORA */}
        </div>
        <Sobre
          message="Ella sabía que él sabía... 🌻"
          showLetter={toggleCard}
        ></Sobre>
      </main>
    </>
  )
}

export default App
