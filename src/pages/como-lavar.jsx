import { Footer } from "@/widgets/layout";

export function ComoLavar() {
  return (
<>
  <section className="text-gray-600 body-font bg-bg_primary">
    <div className="container mx-auto flex md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl m-5 font-normal text-txt_secondary">
        <span className="font-semibold text-txt_primary">Cómo lavar:</span>
        <br />
        Aquí están las instrucciones que debes seguir para formar parte de nuestro equipo.
        </h1>
        <p className="m-5 leading-relaxed text-txt_secondary opacity-70">
          Para calificar como Washito y formar parte de nuestro equipo,
          es necesario leer o ver el video de las instrucciones detalladas de lavado.
          Posteriormente, se llevará a cabo una breve evaluación
          para garantizar que nuestro Washito esté completamente preparado.
          </p>
        <div className="flex justify-center">
          <a href="https://docs.google.com/document/d/1b1AjR3LYzSulU0xFr-tUtxthP92nrKhDNbl3m_hbMos/edit?usp=sharing">
            <button className="inline-flex text-white bg-bg_secondary border-0 py-2 md:mx-5 mx-0.5 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg">Lee la documentación.</button>
          </a>
          <a href="#">
            <button className="inline-flex text-white bg-bg_secondary border-0 py-2 md:mx-5 mx-0.5 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg">Completa el examen</button>
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative h-[250px]">
        <iframe style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0, 
        }} src="https://www.youtube.com/embed/O89t8m-1m7o?si=EMFQNXWnHA5VOK3W&amp;start=142" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  </section>
  <Footer />
</>
  );
}

export default ComoLavar;
