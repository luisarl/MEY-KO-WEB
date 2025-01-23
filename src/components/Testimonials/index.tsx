import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import Image from "next/image";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Elige y compra tu membresía",
    designation: "",
    content:
      "Elige la membresía que mas se adapte a tus necesidades y realiza el proceso de compra.",
    image: "/images/testimonials/MEDICO-1.png",
    star: 5,
    boton: 'Compra tu membresia',
  },
  {
    id: 2,
    name: "Activa tu membresía",
    designation: "",
    content:
      "Recibirás un correo con tu código de membresía, debes activarlo según el tipo de plan que compraste.",
    image: "/images/testimonials/MEDICO-2.png",
    star: 5,
    boton: 'Activa tu membresia',

  },
  {
    id: 3,
    name: "Disfruta de tu membresia",
    designation: "",
    content:
      "¡Listo! Ya puedes disfrutar de tus beneficios descargando nuestra app.",
    image: "/images/testimonials/MEDICO-3.png",
    star: 5,
    boton: 'Inicia Sesión',
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-body-color relative z-10 py-10 md:py-10 lg:py-10">
      <div className="container">
        <div className="w-full mx-auto text-center mb-10">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-white dark:text-white sm:text-4xl md:text-[45px]">
              Cómo acceder a tu membresia  
              <Image className="inline-flex ml-5 "
                src="/images/logo/M-KareTITULO-BLANCO.png" 
                alt='mkare' 
                width={300} 
                height={100}
              />
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
              
            </p>
        </div>


        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
