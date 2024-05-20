import { Home, Profile, ComoLavar, SignUp } from "@/pages";

export const routes = [
  {
    name: "Ingreso",
    path: "/",
    element: <Home />,
  },
  {
    name: "Registro Washito",
    path: "/registro-washito",
    element: <Profile />,
  },
  {
    name: "Como lavar",
    path: "/como-lavar",
    element: <ComoLavar/>,
  },
];

export default routes;
