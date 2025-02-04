import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
          src="/images/features/TELEMEDICINA.png"
          width={120}
          height={120}
          alt="Imagen"
        />
    ),
    title: "Atención de salud a través de telemedicina",
    paragraph:
      "Con médicos especialistas con disponibilidad Ilimitada 24/7 los 365 días del año.",
  },
  {
    id: 1,
    icon: (
      <Image
          src="/images/features/GLUCOMETER.png"
          width={120}
          height={120}
          alt="Imagen"
        />
    ),
    title: "Hasta un 50% de descuento en medidor de glucosa.",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image
          src="/images/features/SIGNO-DOCTOR.png"
          width={120}
          height={120}
          alt="Imagen"
        />
    ),
    title: "Asesoramiento médico y nutricional especializado",
    paragraph:
      "Las 24 horas, todos los días",
  },
  {
    id: 1,
    icon: (
      <Image
          src="/images/features/CORAZON.png"
          width={120}
          height={120}
          alt="Imagen"
        />
    ),
    title: "Coach de bienestar & calidad de vida.",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image
          src="/images/features/PSICOLOGO.png"
          width={120}
          height={120}
          alt="Imagen"
        />
    ),
    title: "Asesoría psicológica",
    paragraph:
      "Se ofrece en horario de lunes a viernes de 8:00 am a 5:00pm.",
  },
  {
    id: 1,
    icon: (
      <Image
          src="/images/features/ARCHIVO.png"
          width={120}
          height={120}
          alt="Imagen"
        />
    ),
    title: "Recetas digitales para el tratamiento de enfermedades.",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image
          src="/images/features/AVION.png"
          width={120}
          height={120}
          alt="Imagen"
        />
    ),
    title: "Asistencia médica durante los viajes.",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image
          src="/images/features/PORCENT.png"
          width={120}
          height={120}
          alt="Imagen"
        />
    ),
    title: "Descuentos permanentes.",
    paragraph:
      "5% de descuentos para clientes oro y 10% para clientes platinum en todas sus compras en MEY-KO. *Aplica restricciones*",
  },
];
export default featuresData;
