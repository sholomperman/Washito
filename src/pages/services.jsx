import React from "react";
import {
  Card,
  Typography,
  Button,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { PageTitle } from "@/widgets/layout";
import {  servicesData } from "@/data";

const Services = () => {
  
  return (
    <section id="Precios" className="relative bg-white py-24 px-4">
    <div className="container mx-auto">
      <PageTitle section="Precios" heading="Más vendidos">
      Nosotros lavamos los autos por fuera muy bien y los dejamos con un brillo espectacular.
      </PageTitle>
      <div className="mx-auto mt-20 mb-0 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-2">
        {servicesData.map(({ title, price }, index) => (
          
          <Card
            key={title}
            color="transparent"
            shadow={false}
            className="text-center text-blue-gray-900"
          >
            <div className="mx-auto mb-6 grid h-14 w-14 place-items-center center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
             <svg xmlns="http://www.w3.org/2000/svg" height={24 + (index * 7)} viewBox="0 -960 960 960" width={24 + (index * 7)} fill="#ffff"><path d="M240-200v40q0 17-11.5 28.5T200-120h-40q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h440q19 0 34.5 11t21.5 29l84 240v320q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40H240Zm-8-360h496l-42-120H274l-42 120Zm-32 80v200-200Zm100 160q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Zm-460 40h560v-200H200v200Z"/></svg>
            </div>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {title}
            </Typography>
            <Typography variant="h4" className="font-normal text-blue-gray-500">
              ${price}
            </Typography>
          </Card>
        ))}
      </div>
      {/* <PageTitle section="Contact Us" heading="Want to work with us?">
        Complete this form and we will get back to you in 24 hours.
      </PageTitle>
      <form className="mx-auto w-full mt-12 lg:w-5/12">
        <div className="mb-8 flex gap-8">
          <Input variant="outlined" size="lg" label="Full Name" />
          <Input variant="outlined" size="lg" label="Email Address" />
        </div>
        <Textarea variant="outlined" size="lg" label="Message" rows={8} />
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button variant="gradient" size="lg" className="mt-8" fullWidth>
          Send Message
        </Button>
      </form> */}
    </div>
  </section>
  )
}

export default Services