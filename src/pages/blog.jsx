import { Typography, Card, CardBody } from "@material-tailwind/react";
import {contents} from '../data/blog'
import car404 from '../img/404-car.png'

function ContentCard({ img, title, desc }) {
const randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  return (
    <Card
      className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl transition-transform duration-300"
      style={{ backgroundColor: randomColor.toString() }}
      color="transparent"
    >
      <img
        src={img}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70" />
      <CardBody className="relative flex flex-col justify-end">
        <Typography variant="h4" color="white">
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          color="white"
          className="my-2 font-normal"
        >
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

export function blog() {
  return (
    <section className="container mx-auto px-8 py-10 lg:py-28">
      <Typography
        variant="h2"
        color="blue-gray"
        className="!text-2xl !leading-snug lg:!text-3xl"
      >
        Blog
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 max-w-lg !font-normal !text-gray-500"
      >
        We&apos;re constantly trying to express ourselves and actualize our
        dreams. If you have the opportunity to play this game of life you need
        to appreciate every moment.
      </Typography>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        {contents.map(({ img, title, desc }) => (
          <ContentCard key={title} img={img ? img : car404} title={title} desc={desc} />
        ))}
      </div>
    </section>
  );
}

export default blog;