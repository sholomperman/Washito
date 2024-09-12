import { Typography } from "@material-tailwind/react";

export function PageTitle({ section, heading, children }) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography variant="lead" className="font-semibold text-bg_secondary">{section}</Typography>
      <Typography variant="h2" className="my-3 text-txt_secondary txt_s_font">
        {heading}
      </Typography>
      <Typography variant="lead" className="text-txt_secondary txt_s_font opacity-80">
        {children}
      </Typography>
    </div>
  );
}

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
