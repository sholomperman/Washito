import React from 'react'
import { Typography, Button } from "@material-tailwind/react";
import './wave.css';
import { whatsAppUrl } from '@/widgets/layout';
import mainImg from '../../public/img/c-car.png'
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

const LandingPage = () => {
  return (
    <>
  <div className="relative flex h-screen content-center items-center justify-center p-5 bg-bg_primary">
    <div className="flex items-center md:flex-row flex-col max-w-8xl h-full container mx-auto">
      <div className="flex flex-wrap md:w-1/2 h-full items-center">
        <div className="ml-auto mr-auto w-full text-center lg:w-8/12">
        <Typography variant="h1" className='md:text-4xl text-2xl mb-1 text-txt_primary'>¡Lavamos tu auto donde sea y cuando sea!{" "}
          <span role="img" aria-labelledby="wave" className="wave">👋🏻</span>
        </Typography>
          <Typography
            variant="h2"
            className="mb-1 md:text-3xl text-lg text-txt_secondary"
          >
          Washito te ofrece la comodidad de un lavado de autos a pedido, 
          sin importar dónde te encuentres. Desde tu hogar hasta tu lugar de trabajo, 
          nuestro equipo de expertos llegará a ti para dejar tu auto impecable.
          </Typography>
        </div>
      </div>
      <div className='md:w-1/2 w-full h-full bg-center bg-no-repeat relative flex items-center justify-center'>
          <img src={mainImg} className="absolute inset-0 w-full h-full object-contain" alt="Background main page" />
          <a className='z-10' target="_blank" rel="noreferrer noopener" href={whatsAppUrl}>
            <Button className='bg-bg_secondary' size="lg text-txt_primary">¡Solicita tu lavado ahora!</Button>
          </a>
      </div>
    </div>
  </div>
  </>
  )
}

export default LandingPage