import { Home, Profile, ComoLavar, SignUp } from "@/pages";

export const routes = [
  {
    name: "Ingreso",
    path: "/",
    element: <Home />,
  },
  {
    name: "Registro Washito",
    path: "/registro-Washito",
    element: <Profile />,
  },
  {
    name: "Como lavar",
    path: "/Como-lavar",
    element: <ComoLavar/>,
  },
];

export default routes;
