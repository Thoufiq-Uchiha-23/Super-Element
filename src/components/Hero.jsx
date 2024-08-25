import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center w-full h-auto md:min-h-screen items-center bg-blue-900'>
      <div className='w-[300px] rounded-3xl bg-rose-700 h-[400px] px-5 py-3'>
        <h1>Card Image</h1>
        <p>Card char name</p>
        <p>Card summary</p>
      </div>
    </div>
  )
}

export default Hero