import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import { Footer } from "@/widgets/layout";
import { Carousel } from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import About from "./about";
import LandingPage from "./landing-page";


export function Home() {
  return (
    <>
    <LandingPage />
      <section className="px-4 pb-20 pt-4 bg-bg_primary"> {/* -mt-32 removed from here and added to 47:000 */}
          {/* <div className="grid -mt-32 mb-5 grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1" style={{maxWidth: '500px', width: '95%'}}>
            {featuresData.map(({ color, title, icon, link, text }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                text={text}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                link={link}
              />
            ))}
          </div> */}
          


           {/*  <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                <Carousel loop={true} className="rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1607860108358-47c0441e7adb?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="car wash 1"
                      className="h-full w-full object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1565381169814-50def2eb0387?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
                      alt="car wash 2"
                      className="h-full w-full object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1527581849771-416a9d62308e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="car wash 3"
                      className="h-full w-full object-cover"
                    />
                </Carousel>
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Galoria</Typography>
                  <Typography
                    variant="p"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                  Fotos de Washito
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    {/* The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </Typography>
                </CardBody>
              </Card>
            </div>*/}
    <div id="AcercaDe" className="pt-32 flex flex-wrap items-center bg-bg_primary mx-auto -mt-8 w-full px-4 md:p-24"> 
      <Typography className="mb-8 font-normal text-txt_secondary">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
            <RocketLaunchIcon className="h-6 w-6 text-white" />
        </div>
        <br />
        <span className="font-bold text-txt_primary">Lavado de autos a pedido: </span>
        en Lo Barnechea y Las Condes: Transforma tu auto en un Washito.
        <br />
        <br />

        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
            <RocketLaunchIcon className="h-6 w-6 text-white" />
        </div>
        <br />
        <span className="font-bold text-txt_primary">Lavado en seco: </span>
        Cuida tu auto y el medio ambiente con nuestro exclusivo método de lavado en seco.
        <br />
        <br />

        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
            <RocketLaunchIcon className="h-6 w-6 text-white" />
        </div>
        <br />
        <span className="font-bold text-txt_primary">Conveniencia a tu alcance: </span>
        Solicita tu lavado con un clic y deja que nosotros nos encarguemos del resto.
        <br />
        <br />

        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
          <RocketLaunchIcon className="h-6 w-6 text-white" />
        </div>
        <br />
        <span className="font-bold text-txt_primary">Conveniencia: </span>
        En Washito entendemos que tu tiempo es valioso. Por eso, 
        ofrecemos un servicio de lavado de autos a pedido que se adapta a tu agenda, 
        brindándote la libertad de disfrutar de un auto limpio sin salir de casa. 
        Icono de un reloj para representar la idea de tiempo y conveniencia.
        <br />
        <br />

        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
          <RocketLaunchIcon className="h-6 w-6 text-white" />
        </div>
        <br />
        <span className="font-bold text-txt_primary">Sostenibilidad: </span>
        Nos comprometemos con el cuidado del medio ambiente. 
        Nuestro exclusivo método de lavado en seco reduce significativamente el consumo de agua, 
        garantizando un lavado efectivo sin comprometer la salud de nuestro planeta.
        Imagen de un planeta Tierra con una gota de agua sobre él para simbolizar el cuidado del medio ambiente.
        <br />
        <br />

        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
          <RocketLaunchIcon className="h-6 w-6 text-white" />
        </div>
        <br />
        <span className="font-bold text-txt_primary">Calidad: </span>
        En Washito, cada detalle cuenta. 
        Nuestro equipo de profesionales está dedicado a proporcionar un servicio de la más alta calidad, 
        garantizando que tu auto reciba el cuidado que se merece en cada lavado.
        Icono de un auto brillante y reluciente para representar la calidad y el cuidado en el lavado.
      </Typography>
    </div>
  <About/>
</section>
      {/* <section id="Fundadores" className="px-4 pt-20 pb-48 bg-bg_primary">
        <div className="container mx-auto text-white/95">
          <PageTitle section="Nuestro equipo">
            <h2 className="text-white/70 text-3xl mb-4">Aquí están nuestros fundadores</h2>
            <span className="text-white/70">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
            </span>
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section> */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
