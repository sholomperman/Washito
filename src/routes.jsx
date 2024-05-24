import { Home, Profile, SignUp } from "@/pages";
import TerminosDeUso from './pages/terminos-de-uso';// its not getting export from index.js for some reason


export const routes = [
  {
    //name: "Ingreso",
    path: "/",
    element: <Home />,
  },
  {
    name: "",
    path: "/registro-washito",
    element: <Profile />,
  },
  {
    name: "",
    path: "/terminos-y-condisiones",
    element: <TerminosDeUso />,
  },
];

export default routes;
