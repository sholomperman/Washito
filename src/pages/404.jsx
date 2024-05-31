import React from 'react'
import { Link } from "react-router-dom";

const FourHundredFour = () => {
  return (
    <div className='flex flex-col justify-center h-[100vh] text-center'>
        <h1 color='red' className='p-4 md:text-9xl text-6xl font-bold text-red-600'>404 <span className='md:text-7xl text-4xl'>😔</span></h1>
        <div className=''>
            <h2 className='md:text-3xl text-2xl font-medium p-4'>Lo siento, esta página no fue encontrada.</h2>
            <h3 className='md:text-3xl text-2xl p-4'>Vuelve al <Link className='text-cyan-600 decoration-solid' to={"/"}>inicio.</Link></h3>
        </div>
    </div>
  )
}

export default FourHundredFour