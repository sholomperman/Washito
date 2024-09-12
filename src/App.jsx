import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes, {nonViewRoutes} from "@/routes";
import { ChatBubbleLeftRightIcon, } from "@heroicons/react/24/solid";
import { whatsAppUrl4 } from '@/widgets/layout';
import PopUp from './widgets/cards/popUp';

function App() {
  return (
    <div className='md:mx-24 mx-0 relative'>
      <a href={ whatsAppUrl4 } target="_blank" rel="noopener noreferrer">
       <ChatBubbleLeftRightIcon className="w-14 h-14 fixed right-5 bottom-5 z-20 p-2 bg-bg_secondary rounded-full wave"/>
      </a>
      <Navbar routes={routes}/>
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
      <PopUp />
    </div>
  );
}

export default App;
