import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Elige y compra tu membresía",
    designation: "",
    content:
      "Elige la membresía que mas se adapte a tus necesidades y realiza el proceso de compra.",
    image: "/images/testimonials/FOTO-1.png",
    star: 5,
    boton: 'Compra tu membresia',
  },
  {
    id: 2,
    name: "Activa tu membresía",
    designation: "",
    content:
      "Recibirás un correo con tu código de membresía, debes activarlo según el tipo de plan que compraste.",
    image: "/images/testimonials/FOTO-2.png",
    star: 5,
    boton: 'Activa tu membresia',

  },
  {
    id: 3,
    name: "Disfruta de tu membresia",
    designation: "",
    content:
      "¡Listo! Ya puedes disfrutar de tus beneficios descargando nuestra app.",
    image: "/images/testimonials/FOTO-3.png",
    star: 5,
    boton: 'Inicia Sesión',
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-body-color bg-opacity-20 relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Cómo acceder a tu membresia M-KARE"
          paragraph=""
          center
        />

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
