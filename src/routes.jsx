import { Home, ComoLavar } from "@/pages";
import TerminosDeUso from './pages/terminos-de-uso';
import Blog from './pages/blog';// its not getting export from index.js for some reason
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
  // {
  //   name: "",
  //   path: "/*",
  //   element: <FourHundredFour />,
  // },
]


export const routes = [
  {
    name: "Ingreso",
    path: "/",
    element: <Home />,
  },
  // {
  //   name: "Blog",
  //   path: "/blog",
  //   element: <Blog />,
  // },
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
