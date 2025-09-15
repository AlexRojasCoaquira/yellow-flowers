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
      <main className="relative w-full h-100dvh bg-gradient-to-br from-black via-slate-900 to-indigo-950">
        {/* <h2 className="text-center text-white text-2xl font-bold mb-8">
          ESTE AÑO NO SERÁS ESPECTADORA
        </h2> */}
        <Sobre
          message="Ella sabía que él sabía... 🌻"
          showLetter={toggleCard}
        ></Sobre>
      </main>
    </>
  )
}

export default App
