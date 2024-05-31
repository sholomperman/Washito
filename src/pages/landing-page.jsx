import React from "react";
import "./landing-page.css";
import main from "/img/cartoon-bg.png";
import Type from '../widgets/type'
const LandingPage = () => {

  return (
<section>
  <div id="home">
        <div className="left">
          <h1 className="welcome-txt">Bienvenido a Washito{" "}
          <span role="img" aria-labelledby="wave" className="wave">👋🏻</span>
          </h1>
          <p className="info-txt">
          Lava tu auto sin tener que moverlo a ningún lado.
          </p>
          <div className="typing">
          <Type data={['Hola Washito', 'Lava mi Autito']}/>
          </div>
        </div>
        <div className="right">
          <img
            src={main}
            alt="home pic"
            className="max-h-[450px] w-full object-contain"
          />
        </div>
      </div>
</section>

  );
};

export default LandingPage;
