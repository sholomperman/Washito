import React from 'react'
// this is a page i didn't need but might need in the Future 
const OldPage = () => {
  return (
    <section className="relative bg-white py-24 px-4">
    <div className="container mx-auto">
      <PageTitle section="Co-Working" heading="Build something">
        Put the potentially record low maximum sea ice extent tihs year down
        to low ice. According to the National Oceanic and Atmospheric
        Administration, Ted, Scambos.
      </PageTitle>
      <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {contactData.map(({ title, icon, description }) => (
          <Card
            key={title}
            color="transparent"
            shadow={false}
            className="text-center text-blue-gray-900"
          >
            <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
              {React.createElement(icon, {
                className: "w-5 h-5 text-white",
              })}
            </div>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              {description}
            </Typography>
          </Card>
        ))}
      </div>
      <PageTitle section="Contact Us" heading="Want to work with us?">
        Complete this form and we will get back to you in 24 hours.
      </PageTitle>
      <form className="mx-auto w-full mt-12 lg:w-5/12">
        <div className="mb-8 flex gap-8">
          <Input variant="outlined" size="lg" label="Full Name" />
          <Input variant="outlined" size="lg" label="Email Address" />
        </div>
        <Textarea variant="outlined" size="lg" label="Message" rows={8} />
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button variant="gradient" size="lg" className="mt-8" fullWidth>
          Send Message
        </Button>
      </form>
    </div>
  </section>
  )
}

export default OldPage