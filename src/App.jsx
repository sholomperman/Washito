import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes, {nonViewRoutes} from "@/routes";


function App() {
  const { pathname } = useLocation();

  return (
    <>
        {/* <div style={{ zIndex: -1 }} className="fixed top-0 h-full w-full bg-black bg-[url('/img/background-2.jpg')] bg-cover bg-center bg" /> */}
        <div style={{ zIndex: -1, backgroundColor: 'rgb(40,40,40,1)' }} className="fixed top-0 h-full w-full bg-black/50  bg-cover bg-center" />
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
        </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        {
          nonViewRoutes.map(
            ({ path, element }, key)=>(
              element && <Route key={key} exact path={path} element={element} />
            )
          )
        }
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
