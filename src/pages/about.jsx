import React from "react";
import {
  Card,
  Typography,
} from "@material-tailwind/react";
import { PageTitle } from "@/widgets/layout";
import {  servicesData } from "@/data";

const About = () => {
  
  return (
    <section id="Precios" className="relative py-24 px-4">
    <div className="container mx-auto">
      <PageTitle section="Precios" heading="Más vendidos">
      Nosotros lavamos los autos por fuera muy bien y los dejamos con un brillo espectacular.
      </PageTitle>
      <div className="mx-auto mt-20 mb-0 grid max-w-5xl grid-cols-2 gap-16 md:grid-cols-2 lg:grid-cols-2">
        {servicesData.map(({ title, price, icon }, index) => (
          
          <Card
            key={title}
            color="transparent"
            shadow={false}
            className="text-center"
          >
            <div className="mx-auto mb-6 grid h-14 w-14 place-items-center center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
              {icon}
            </div>
            <Typography variant="p" className="text-txt_primary txt_p_font mb-2 text-xl font-semibold">
              {title}
            </Typography>
            <Typography variant="span" className="text-txt_secondary txt_s_font opacity-70 font-normal text-lg">
              ${price}
            </Typography>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}

export default About