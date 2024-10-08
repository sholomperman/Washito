import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { whatsAppUrl1 } from '@/widgets/layout';
import InstaEmbed from "../cards/InstaEmbed";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6 bg-bg_primary">
      <InstaEmbed />
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h3" className="mb-4 text-txt_primary txt_p_font">
              {title}
            </Typography>
            <Typography className="font-normal text-txt_secondary lg:w-2/5">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton className="rounded-full shadow-none bg-transparent text-txt_primary txt_p_font">
                    <Typography>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className={`mx-auto mt-12 grid w-max grid-cols-${menus.length < 2 ? '1': '2'} gap-24 lg:mt-0`}>
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  className="mb-2 block font-medium uppercase text-txt_primary txt_p_font"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-txt_secondary hover:text-txt_primary txt_p_font md:text-left text-center"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-txt_secondary"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Washito",
  description:
    "Una nueva forma revolucionaria de lavar tu autos donde no necesitas esperar y puedes hacerlo a tu conveniencia.",
  socials: [
    // {
    //   color: "gray",
    //   name: "twitter",
    //   path: "https://www.twitter.com/creativetim",
    // },
    // {
    //   color: "gray",
    //   name: "youtube",
    //   path: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    // },
    {
      name: "instagram",
      path: "https://www.instagram.com/washitocar/",
    },
    // {
    //   color: "black",
    //   name: "github",
    //   path: "https://github.com/creativetimofficial/material-tailwind",
    // },
  ],
  menus: [
    {
      name: "Otros recursos",
      items: [
        { name: "admin@washito.cl", path: "mailto:admin@washito.cl" },
        // there is no phone num of W.A
        { name: "Chat de Washito", path: whatsAppUrl1 }
      ],
    },
    // {
    //   name: "other resources",
    //   items: [
    //     {
    //       name: "MIT License",
    //       path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
    //     },
    //     {
    //       name: "Contribute",
    //       path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk",
    //     },
    //     {
    //       name: "Change Log",
    //       path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
    //     },
    //     {
    //       name: "Contact Us",
    //       path: "https://creative-tim.com/contact-us?ref=mtk",
    //     },
    //   ],
    // },
  ],
  copyright: (
    <>
      Copyright © {year} Washito SpA {" "}
      <Link to={'/terminos-y-condisiones'} className="text-txt_secondary transition-colors hover:text-txt_primary txt_p_font">
        Términos de servicio
      </Link>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
