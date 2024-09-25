import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Input,
  Typography,
} from "@material-tailwind/react";

export default function SubscriptionPopover() {
  const arr = [
    {
      label: 'Nombre Completo',
      name: 'name',
    },
    {
      label: 'Correo Electronico',
      name: 'email',
    },
    {
      label: 'Número',
      name: 'phone',
    }
  ]
  return (
    <Popover placement="bottom">
      <PopoverHandler>
        <Button>Suscribirse</Button>
      </PopoverHandler>
      <form className="w-96">
        <Typography variant="h6" color="blue-gray" className="mb-6">
          ¡Únete a Washito!
        </Typography>
        {
          arr.map((i) => (
            <>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-bold"
              >
                {i.label}
              </Typography>
              <Input
                size="lg"
                name={i.name}
                placeholder={i.label}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </>
          ))
        }
        <div className="flex justify-center mt-4">
          <Button variant="gradient" className="flex-shrink-0">
            Suscribirse
          </Button>
        </div>
      </form>
    </Popover>
  );
}