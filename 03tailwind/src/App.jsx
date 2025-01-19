import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
        <h1 className='bg-green-100 text-black p-4 rounded-xl'>Tailwind Test</h1>
        <Card  btnText="Aman"/>
        <Card  btnText="Piyu"/>
    </>
  )
}

export default App
