import { Home, Profile, SignUp } from "@/pages";
import TerminosDeUso from './pages/terminos-de-uso';// its not getting export from index.js for some reason


export const nonViewRoutes = [
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
]


export const routes = [
  {
    name: "",
    path: "/",
    element: <Home />,
  },
];

export default routes;
