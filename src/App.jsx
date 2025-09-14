import { useState } from 'react'
import './App.css'
import Deslize from './components/Deslize'
import BackgroundMusic from './components/Audio'
import FlowerReveal from './components/FlowerReveal'
import flower from '@/assets/image.png'
import SunflowerReveal from './components/SunFlower'
import Sobre from './components/Sobre'
function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCard = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <main className="w-full h-100dvh bg-gray-900 bg-amber-600">
        <Deslize></Deslize>
        <Deslize></Deslize>
        <Deslize></Deslize>
        <Deslize></Deslize>
        <Deslize></Deslize>
        {/* <BackgroundMusic></BackgroundMusic> */}
        {/* <FlowerReveal
          src={flower}
          alt="flower"
          size="h-80"
        ></FlowerReveal> */}
        <Sobre message="Te mereces tus flores amarillas 🌻"></Sobre>
      </main>
    </>
  )
}

export default App
