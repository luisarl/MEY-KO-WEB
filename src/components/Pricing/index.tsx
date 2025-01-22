"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-10 md:py-10 lg:py-10">
      <div className="container">
        <SectionTitle
          title="Membresías"
          paragraph="Que se Adaptan a tus Necesidades."
          
          width="665px"
        />
        
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
          <PricingBox
            image="/images/logo/M-KareTITULO-BLANCO.png"
            packageName="MK-ARE"
            price={isMonthly ? "25" : "25"}
            duration={isMonthly ? "Anuales" : "Anuales"}
            subtitle=""
            boton ={
                <button className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-amber-400 via-white to-amber-500 p-3 text-base font-bold text-primary transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                  Comprar esta membresía 
                  GOLD
                </button>
            }
          >
            <OfferList text="1 Teleconsulta gratis en cualquier especialidad  por
            suscribirte a la membresía." status="active" />
            <OfferList text="5% de descuento permanente anual en tienda Mey-Ko (Tarifa Pública)." status="active" />
            <OfferList text="Acumulación doble de puntos del programa de lealtad Mey-Ko por cada compra que realices." status="active" />
          </PricingBox>
          
          <PricingBox
            image="/images/logo/M-KareTITULO-BLANCO.png"
            packageName="MK-ARE"
            price={isMonthly ? "50" : "50"}
            duration={isMonthly ? "Anuales" : "Anuales"}
            subtitle=""
            boton={
              <button className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-gray-500 via-white to-gray-500 p-3 text-base font-bold text-primary transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
              Comprar esta membresía 
              PLATINIUM
            </button>
            }
          >
            <OfferList text="Telemedicina." status="active" />
            <OfferList text="Medidor de azúcar al 50% de descuento." status="active" />
            <OfferList text="Asesoría médica." status="active" />
            <OfferList text="Asesoría nutricional." status="active" />
            <OfferList text="Validación de recetas internacionales." status="active" />
            <OfferList text="Segunda opinión medica." status="active" />
            <OfferList text="Acumulación doble de puntos del programa de lealtad Mey-Ko por cada compra que realices." status="active" />
          </PricingBox>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
