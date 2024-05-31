import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
  Button
} from "@material-tailwind/react";


export function FeatureCard({ color, icon, title, link, text }) {
  return (
    <Card className="rounded-lg shadow-lg shadow-gray-950">
      <CardBody className="px-8 text-center">
        <IconButton
          variant="gradient"
          size="lg"
          color={color}
          className="pointer-events-none mb-6 rounded-full"
        >
          {icon}
        </IconButton>
        <Typography variant="h3" className="mb-8" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="p" className="mb-8" color="blue-gray">
          {text}
        </Typography>
        <a target="_blank" rel="noreferrer noopener" href={link}><Button size="lg">Agregame al Chat</Button></a>
      </CardBody>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
