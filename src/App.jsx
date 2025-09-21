import { useState } from 'react'
import './App.css'
import BackgroundMusic from './components/Audio'
import FlowerReveal from './components/FlowerReveal'
import flower from '@/assets/image.png'
import { SunflowerReveal } from './components/SunFlower'
import Sobre from './components/Sobre'
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const params = new URLSearchParams(window.location.search)
  const q = params.get('q')
  const decodedQ =
    atob(q).toLocaleLowerCase().charAt(0).toUpperCase() + atob(q).toLocaleLowerCase().slice(1)

  const toggleCard = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <main className="w-full flex gap-10 flex-col items-center justify-center bg-gradient-to-br from-black via-slate-900 to-indigo-950">
        <div className="text-center text-white text-3xl font-bold ">
          {/* ESTE AÑO NO SERÁS ESPECTADORA */}
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <Sobre
          message={`No serás espectadora este año 🌻 ${decodedQ}`}
          showLetter={toggleCard}
        ></Sobre>
      </main>
    </>
  )
}

export default App
