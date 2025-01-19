import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className='w-full h-screen m-0 p-0 duration-100'
     style={{backgroundColor: color}}>
     <div className='fixed flex-wrap justify-center bottom-12  left-10 right-10'>
      <div className= 'flex flex-wrap justify-center  px-3 py-2 rounded-3xl gap-10 shadow-lg'>
        <button
        onClick={()=> setColor("red")}
        className='outline-black px-2 py-1 shadow-lg text-white rounded-3xl'
        style={{backgroundColor:"red"}}
        >Red</button>
        <button
        onClick={()=> setColor("brown")}
        className='outline-black px-2 py-1 shadow-lg text-white rounded-3xl'
        style={{backgroundColor:"brown"}}
        >brown</button>
        <button
        onClick={()=> setColor("green")}
        className='outline-black px-2 py-1 shadow-lg text-white rounded-3xl'
        style={{backgroundColor:"green"}}
        >Green</button>
        <button
        onClick={()=> setColor("blue")}
        className='outline-black px-2 py-1 shadow-lg text-white rounded-3xl'
        style={{backgroundColor:"blue"}}
        >Blue</button>
        <button
        onClick={()=> setColor("pink")}
        className='outline-black px-2 py-1 shadow-lg text-white rounded-3xl'
        style={{backgroundColor:"pink"}}
        >Pink</button>
        <button
        onClick={()=> setColor("orange")}
        className='outline-black px-2 py-1 shadow-lg text-white rounded-3xl'
        style={{backgroundColor:"orange"}}
        >Orange</button>
        <button
        onClick={()=> setColor("violet")}
        className='outline-black px-2 py-1 shadow-lg text-white rounded-3xl'
        style={{backgroundColor:"violet"}}
        >Violet</button>
        <button
        onClick={()=> setColor("black")}
        className='outline-black px-2 py-1 shadow-lg text-white rounded-3xl'
        style={{backgroundColor:"black"}}
        >Black</button>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
