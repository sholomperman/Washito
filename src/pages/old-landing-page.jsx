import React from 'react'
import { Typography } from "@material-tailwind/react";

const OldLandingPage = () => {
  return (
    <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
    <div style={{ zIndex: -1 }} className="fixed top-0 h-full w-full bg-black bg-[url('/img/background-2.jpg')] bg-cover bg-center bg" />
    <div style={{ zIndex: -1 }} className="fixed top-0 h-full w-full bg-black/50  bg-cover bg-center" />
    <div className="max-w-8xl container relative mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
        <Typography variant="h1" color="white" className='md:text-5xl text-2xl mb-5'>Bienvenido a Washito{" "}
          <span role="img" aria-labelledby="wave" className="wave">👋🏻</span>
        </Typography>
          <Typography
            variant="h2"
            color="white"
            className="mb-6 md:text-4xl text-lg"
          >
            Somos una solución para el lavado de autos, donde lavamos en tu lugar y a tu hora, solo con un par de clics.
          </Typography>
          <Typography variant="lead" color="white" className="opacity-90 md:text-3xl text-base">
            Nuestro objetivo es facilitar los lavados de autos para las personas
            y brindar más empleos a los contratistas que califican para ser washitos.
          </Typography>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OldLandingPage