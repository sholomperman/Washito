import { Home, Profile } from "@/pages";
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
    name: "Ingreso",
    path: "/",
    element: <Home />,
  },
  {
    name: "Fundadores",
    href: "#Fundadores",
    element: '',
  },
  {
    name: "Precios",
    href: "#Precios",
    element: '',
  },
  {
    name: "Acerca de",
    href: "#AcercaDe",
    element: '',
  },
];

export default routes;
