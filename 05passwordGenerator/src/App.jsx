import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [ length, setlength ] = useState(8)
  const [ Allowednumber , setAllowednumber ] = useState(false)
  const [ Allowchar , setAllowchar ] = useState(false)
  const [ password , setpassword ] = useState("")
  const passwordGenerator =  useCallback( () => {
     let pass =""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(Allowednumber) str+= "1234567890"
     if (Allowchar) str+= "{}[]!@#$%*?^&"
     for(let i=1 ; i<=length ; i++)
     {
       let char = Math.floor(Math.random() * str.length + 1)
       pass += str.charAt(char)
     }
     setpassword(pass)
  }, [length,Allowednumber,Allowchar,setpassword]) 
   const passwordref = useRef(null)
  useEffect(()=>{
    passwordGenerator()
  }, [length,Allowchar,Allowednumber,passwordGenerator])
  const copypassword = useCallback(()=>{
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>PasswordGenerator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
       <input
        type='text'
        ref={passwordref}
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        />
        <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 '
        onClick={copypassword}
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 '>
        <div className='flex slider items-center gap-x-1 text-blue-600'>
          <input 
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer '
          onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1 text-blue-600'>
          <input
          type='checkbox'
          defaultChecked={Allowednumber}
          id='numberInput'
          onChange={()=>
            setAllowednumber((prev) => !prev)
          }
          />
          <label htmlFor='numberInput'>Number</label>
        </div>
        <div className='flex items-center gap-x-1 text-blue-600'>
          <input 
          type='checkbox'
          defaultChecked={Allowchar}
          id='characterinput'
          onChange={()=>
            setAllowchar((prev)=> !prev)            
          }
          />
          <label htmlFor="characterinput">Character</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
