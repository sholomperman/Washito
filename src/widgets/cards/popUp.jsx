import React, { useState, useEffect } from 'react';
import { Dialog, Input, Button, Spinner } from "@material-tailwind/react";


export const SignUpPopup = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false); // To track if the form is submitted
  const [loading, setLoading] = useState(false); // To track loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000); // 2 seconds delay

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const apiKey = 'https://script.google.com/macros/s/AKfycbwwV-bDK27O28v--yIRywgrVFw-R8FgXf4hOY6odGjWaxmztC8SToOvYOg8FBn7EuR4wA/exec';
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');

    // Create URL-encoded form data string
    const data = new URLSearchParams({
      name: name,
      email: email,
      phone: phone,
    });

    try {
      const response = await fetch(apiKey, {
        method: "POST",
        body: data.toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setSubmitted(true); // Show success message

      } else {
        console.log("Error submitting the form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };
  return (
    <>
      <Dialog open={open} handler={() => setOpen(false)} size="lg">
        <div className="p-6 relative">
          {!submitted ? (
            loading ? (
              <div className="flex flex-col items-center">
                <Spinner className="text-bg_secondary" />
                <p className="mt-4 text-txt_primary">Submitting...</p>
              </div>
            ) : (
              <form  onSubmit={handleSubmit}>
                <span onClick={()=>setOpen(false)} className="text-2xl text-orange-800 font-semibold absolute top-0 right-0 py-2 px-4 cursor-pointer">X</span>
                <h3 className="text-xl font-semibold mb-4 text-txt_primary">¡Únete a Washito! <span className='text-txt_red'>Oferta de <span className='italic'>30%</span></span> </h3>

                <div className="mb-4">
                  <Input type="text" name="name" label="Nombre Completo" required />
                </div>
                <div className="mb-4">
                  <Input type="email" name="email" label="Correo Electronico" required />
                </div>
                <div className="mb-4">
                  <Input type="tel" name="phone" label="Número" required />
                </div>

                <Button type="submit" className="mt-4 bg-bg_secondary">Enviar</Button>
              </form>
            )
          ) : (
            // Success message after form submission
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-txt_primary">¡Gracias!</h3>
              <p className="text-lg text-txt_primary">¡Gracias por unirte a nuestra comunidad!</p>
              <Button onClick={() => setOpen(false)} className="mt-4 bg-bg_secondary">Cerrar</Button>
            </div>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default SignUpPopup;
