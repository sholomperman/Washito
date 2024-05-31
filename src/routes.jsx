import { Home, ComoLavar } from "@/pages";
import TerminosDeUso from './pages/terminos-de-uso';// its not getting export from index.js for some reason
import FourHundredFour from "./pages/404";


export const nonViewRoutes = [
  {
    name: "",
    path: "/como-lavar",
    element: <ComoLavar />,
  },
  {
    name: "",
    path: "/terminos-y-condisiones",
    element: <TerminosDeUso />,
  },
  {
    name: "",
    path: "/*",
    element: <FourHundredFour />,
  },
]


export const routes = [
  {
    name: "Ingreso",
    path: "/",
    element: <Home />,
  },
  {
    name: "Precios",
    href: "#Precios",
    element: '',
  },
  {
    name: "Fundadores",
    href: "#Fundadores",
    element: '',
  },
  {
    name: "Acerca de",
    href: "#AcercaDe",
    element: '',
  },
];

export default routes;
