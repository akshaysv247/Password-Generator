// eslint-disable-next-line no-unused-vars
import {useState} from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Box() {
    const [length, setLength] = useState(8);
  return (
    <div className='w-[90vw] sm:w-[30vw] h-[45vh] bg-[#49494963] flex flex-col items-center rounded p-8 text-white'>
        {/* <h1 className='text-white text-4xl font-semibold'>Random Password Generator</h1> */}
        <div className='flex flex-col w-[75vw] sm:w-[20vw] items-center mt-10'>
        <div className='flex w-full gap-2 justify-between items-center bg-[#1a351ae8]'>
            <h3 className='text-white text-4xl font-semibold'>********</h3>
            <div className='bg-[green] p-2'>
            <button><ContentCopyIcon /></button>
            </div>
        </div>
        <div className='flex-col w-[75vw] sm:w-[20vw] h-full items-center mt-10'>
        <div className='flex w-full gap-2 justify-between'>
            <label>Password Length :</label>
            <input
             type ='number' 
             max='20' 
             min='8' 
             value={length} 
             className='w-12 text-black' 
             onChange={(e)=> setLength(e.target.value)}
            />
        </div>
        <div className='flex w-full gap-2 justify-between'>
            <label>Uppercase Letters :</label>
            <input type='checkbox'/>
        </div>
        <div className='flex w-full gap-2 justify-between'>
            <label>Lowercase Letters :</label>
            <input type='checkbox'/>
        </div>
        <div className='flex w-full gap-2 justify-between'>
            <label>Numbers :</label>
            <input type='checkbox'/>
        </div>
        <div className='flex w-full gap-2 justify-between'>
            <label>Symbols :</label>
            <input type='checkbox'/>
        </div>
        <div className='flex w-full gap-2 justify-center mt-8'>
            <button className='w-fit p-2 bg-[#22a056] rounded-md'>Generate Password</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Box