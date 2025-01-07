import React from "react";
import sedan from '../img/sedan.png'
import hatchback from '../img/hatchback.png'
import SUV from '../img/SUV.png'

export const servicesData = [
  
  {
    title: "Hatchback",
    price: "13.990",
    icon: (<img style={{width: '40px'}} alt="Hatchback Logo" src={hatchback}/>)
  },
  {
    title: "Sedan",
    price: "14.490",
    icon: (<img style={{width: '40px'}} alt="Sedan Logo" src={sedan}/>)
  },
  {
    title: "SUV",
    price: "15.490",
    icon: (<img style={{width: '40px', height: '50px'}} alt="SUV Logo" src={SUV}/>)
  },
  {
    title: "XL",
    price: "15.990",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e8eaed"><path d="M233.25-200Q186-200 153-233.06q-33-33.05-33-80.27H40v-373.34q0-30.25 21.54-51.79T113.33-760H684l236 236v210.67h-80q0 47.22-33.08 80.27Q773.84-200 726.59-200q-47.26 0-80.26-33.06-33-33.05-33-80.27H346.67q0 47.33-33.08 80.33t-80.34 33ZM600-560h182.67L649.33-693.33H600V-560Zm-246.67 0h180v-133.33h-180V-560Zm-246.66 0h180v-133.33h-180V-560Zm126.57 303.33q23.76 0 40.26-16.4 16.5-16.41 16.5-40.17t-16.41-40.26q-16.4-16.5-40.16-16.5-23.76 0-40.26 16.41-16.5 16.4-16.5 40.16 0 23.76 16.4 40.26 16.41 16.5 40.17 16.5Zm493.33 0q23.76 0 40.26-16.4 16.5-16.41 16.5-40.17t-16.4-40.26Q750.52-370 726.76-370t-40.26 16.41q-16.5 16.4-16.5 40.16 0 23.76 16.41 40.26 16.4 16.5 40.16 16.5ZM106.67-380H142q17-23.33 41.33-35 24.34-11.67 50-11.67 25.67 0 50 11.67 24.34 11.67 41.34 35h310.66q17-23.33 41.34-35 24.33-11.67 50-11.67 25.66 0 50 11.67Q801-403.33 818-380h35.33v-113.33H106.67V-380Zm746.66-113.33H106.67h746.66Z"/></svg>)
  },
];

export default servicesData;
