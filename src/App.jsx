/* eslint-disable no-unused-vars */
import React from 'react';
import Box from './Components/Box';

function App() {

  return (
    <>
      <div className='w-[100vw] h-[100vh] sm:bg-tangiro bg-tangiro2 bg-right bg-cover flex flex-col gap-8 justify-center items-center'>
        <h1 className='text-4xl text-center sm:text-8xl text-[#3c963c] font-bold'>Random Password Generator</h1>
        <Box />
      </div>
    </>
  )
}

export default App
