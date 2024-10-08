import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation} from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from '../../img/banner.png'

export const whatsAppUrl1 = 'https://wa.link/6v9s8c';
export const whatsAppUrl2 = 'https://wa.link/zvv29r';
export const whatsAppUrl3 = 'https://wa.link/nhe4e7';
export const whatsAppUrl4 = 'https://wa.link/9coo7z';

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);
  const { pathname } = useLocation();
  const changeNavBg = pathname.toLowerCase() === '/como-lavar' || pathname.toLowerCase() === '/terminos-y-condisiones' ? true : false;
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          onClick={()=>{setOpenNav(false)}}
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
        >
          {href ? (
            <a
              onClick={()=>{setOpenNav(false)}}
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>

          ) : (
            <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          )}
        </Typography>
      ))} 
    </ul>
  );

  return (
    <MTNavbar className="p-3 py-6 bg-bg_secondary md:rounded-none rounded-tr-none rounded-tl-none">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/">
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
            {brandName}
          </Typography>
        </Link>

        {
          !changeNavBg && <div className="hidden lg:block">{navList}</div>
        }
        <div className="hidden gap-2 lg:flex">
          <a
            href={whatsAppUrl1}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="text" size="sm" className="text-white" fullWidth>
            Ir a Chat de Washitos
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-bg_primary px-4 text-txt_primary txt_p_font m-0"
        open={openNav}
      >
         <div className="container mx-auto">
           {!changeNavBg && navList}
          
          <a
            href={whatsAppUrl1}
            target="_blank"
            className="m-2 block"
            rel="noreferrer"
          >
            <Button className="bg-bg_secondary"  size="sm" fullWidth>
            Ir a Chat de Washitos
            </Button>
          </a>
          {/* {React.cloneElement(action, {
            className: "w-full block",
          })} */}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: <img width={250} alt="Logo de llavado auto" src={logo}/>, //washito-logo.png
  // action: (
  //   <a
  //     href="https://www.creative-tim.com/product/material-tailwind-kit-react"
  //     target="_blank"
  //   >
  //     <Button variant="gradient" size="sm" fullWidth>
  //       free download
  //     </Button>
  //   </a>
  // ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
