import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData } from "@/data";
import { Carousel } from "@material-tailwind/react";
import Services from "./services";
import OldLandingPage from "./old-landing-page";
import LandingPage from "./landing-page";


export function Home() {
  return (
    <>
    {/* <OldLandingPage /> */}
    <LandingPage />
      <section className="bg-white px-4 pb-20 pt-4"> {/* -mt-32 removed from here and added to 47:000 */}
        <div className="container mx-auto" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div className="grid -mt-32 mb-5 grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1" style={{maxWidth: '500px', width: '95%'}}>
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
          </div>
          <Services/>
          <div id="AcercaDe" className="pt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <RocketLaunchIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Descubre Quiénes Somos y Nuestros Valores
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                En Washito, ofrecemos un servicio de lavado de autos único, 
                donde vamos directamente al lugar de estacionamiento del cliente para brindar comodidad y conveniencia. 
                Nuestro compromiso con la excelencia y la satisfacción del cliente es primordial en todo lo que hacemos.
                <br />
                <br />
                Nuestros valores se basan en la integridad, la calidad y el servicio excepcional. 
                Nos esforzamos por superar las expectativas de nuestros clientes en cada lavado, 
                asegurando que cada vehículo reciba un tratamiento meticuloso y un resultado impecable.
                <br />
                <br />
                Descubre la diferencia con Washito y únete a nuestra comunidad de clientes 
                satisfechos que confían en nosotros para mantener sus vehículos en óptimas condiciones, 
                sin importar dónde estén estacionados.
              </Typography>
              {/* <Button variant="filled">read more</Button> */}
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
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
                    continue whatever happens. */}
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="Fundadores" className="px-4 pt-20 pb-48">
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
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
