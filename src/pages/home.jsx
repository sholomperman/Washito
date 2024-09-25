import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { Carousel } from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import About from "./about";
import LandingPage from "./landing-page";
import PageTitle from "../widgets/layout/page-title";
import { whatsAppUrl2, whatsAppUrl3 } from '@/widgets/layout';
import SubscriptionPopover from '../widgets/cards/subscriptionPopover';

function Btn({ txt, href }) {
  return (
    <a className='z-10' target="_blank" rel="noreferrer noopener" href={href}>
      <Button className='bg-bg_secondary ' size="lg">{txt}</Button>
    </a>
  )
}


export function Home() {
  return (
    <>
      <LandingPage />
      <section className="p-4 bg-bg_primary">
        <div className="pt-4 flex flex-wrap items-center bg-bg_primary mx-auto -mt-8 w-full px-4 md:p-24">
          <Typography className="mb-8 text-lg text-txt_secondary txt_s_font">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e8eaed"><path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm67-105 28-28-75-75v-112h-40v128l87 87Zm-547 65q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v250q-18-13-38-22t-42-16v-212h-80v120H280v-120h-80v560h212q7 22 16 42t22 38H200Zm280-640q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z" /></svg>
            </div>
            <br />
            <span className="text-2xl text-txt_primary txt_p_font">Lavado de autos a pedido: </span>
            En Lo Barnechea y Las Condes Transforma tu auto en un Washito.
            <br />
            <br />

            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e8eaed"><path d="M320-80q-33 0-56.5-23.5T240-160v-172q0-74 21-142.5T327-611q-38-9-62.5-41T240-724v-42q0-48 41.5-80.5T368-874l356 35q17 2 26.5 13.5T760-799v119q0 15-10.5 26.5T724-640l-36 4q14 49 37 88t55 56l-40 70q-53-31-82-85.5T612-629l-44 4q8 50 30.5 101t45.5 92q18 32 27 67t9 71v134q0 33-23.5 56.5T600-80H320Zm0-676v32q0 18 13 29t31 9l316-30v-48l-316-30q-18-2-31 9t-13 29Zm0 596h280v-134q0-26-6.5-51T574-393q-31-54-54-111.5T488-617l-60 5-26 34q-40 53-61 116.5T320-332v172Zm0 0h280-280Z" /></svg>
            </div>
            <br />
            <span className="text-2xl text-txt_primary txt_p_font">Lavado en seco: </span>
            Cuida tu auto y el medio ambiente con nuestro exclusivo método de lavado en seco.
            <br />
            <br />
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e8eaed"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
            </div>
            <br />
            <span className="text-2xl text-txt_primary txt_p_font">Conveniencia a tu alcance: </span>
            Solicita tu lavado con un clic y deja que nosotros nos encarguemos del resto.
            <br />
            <br />
            <Btn href={whatsAppUrl2} txt='Agenda tu hora' />
            <br />
            <br />
            {/* secont part of page */}
            <div id="AcercaDe" className="py-8 md:scroll-mt-0 scroll-mt-[160px]">
              <PageTitle section='NUESTROS VALORES' />
            </div>

            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e8eaed"><path d="M516-120 402-402 120-516v-56l195-73-203-203 57-57 736 736-57 57-203-203-73 195h-56Zm191-361-63-63 60-160-160 60-63-63 359-133-133 359ZM542-268l41-109-206-206-109 41 196 78 78 196Zm52-326ZM480-480Z" /></svg>
            </div>
            <br />
            <span className="text-2xl text-txt_primary txt_p_font">Conveniencia: </span>
            En Washito entendemos que tu tiempo es valioso. Por eso,
            ofrecemos un servicio de lavado de autos a pedido que se adapta a tu agenda,
            brindándote la libertad de disfrutar de un auto limpio sin salir de casa.
            <br />
            <br />

            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e8eaed"><path d="M440-690v-100q0-42 29-71t71-29h100v100q0 42-29 71t-71 29H440ZM220-450q-58 0-99-41t-41-99v-140h140q58 0 99 41t41 99v140H220ZM640-90q-39 0-74.5-12T501-135l-33 33q-11 11-28 11t-28-11q-11-11-11-28t11-28l33-33q-21-29-33-64.5T400-330q0-100 70-170.5T640-571h241v241q0 100-70.5 170T640-90Zm0-80q67 0 113-47t46-113v-160H640q-66 0-113 46.5T480-330q0 23 5.5 43.5T502-248l110-110q11-11 28-11t28 11q11 11 11 28t-11 28L558-192q18 11 38.5 16.5T640-170Zm1-161Z" /></svg>
            </div>
            <br />
            <span className="text-2xl text-txt_primary txt_p_font">Sostenibilidad: </span>
            Nos comprometemos con el cuidado del medio ambiente.
            Nuestro exclusivo método de lavado en seco reduce significativamente el consumo de agua,
            garantizando un lavado efectivo sin comprometer la salud de nuestro planeta.
            <br />
            <br />

            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e8eaed"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg>
            </div>
            <br />
            <span className="text-2xl text-txt_primary txt_p_font">Calidad: </span>
            En Washito, cada detalle cuenta.
            Nuestro equipo de profesionales está dedicado a proporcionar un servicio de la más alta calidad,
            garantizando que tu auto reciba el cuidado que se merece en cada lavado.
            <br />
            <br />
            <Btn href={whatsAppUrl3} txt='Contactanos' />
          </Typography>
        </div>
        <About />
        {/* <SubscriptionPopover /> */}
      </section>
      <Footer />
    </>
  );
}

export default Home;
