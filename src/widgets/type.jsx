import React from "react";
import Typewriter from "typewriter-effect";

function Type({data}) {
  return (
    <Typewriter
      options={{
        strings: data,
        autoStart: true,
        loop: true,
        deleteSpeed: 150,
      }}
    />
  );
}

export default Type;
