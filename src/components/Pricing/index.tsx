"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Membresías"
          paragraph="Que se Adaptan a tus Necesidades."
          center
          width="665px"
        />

        {/* <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div> */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
          <PricingBox
            packageName="MK-ARE GOLD"
            price={isMonthly ? "25" : "25"}
            duration={isMonthly ? "Anuales" : "Anuales"}
            subtitle="Individual"
          >
            <OfferList text="Recibe una teleconsulta de asesoria medica en cualquier especialidad o nuticional por
            inscripción a la membresia." status="active" />
            {/* <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Commercial Use" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Lifetime Access" status="inactive" />
            <OfferList text="Free Lifetime Updates" status="inactive" /> */}
          </PricingBox>

          <PricingBox
            packageName="MK-ARE PLATINIUM"
            price={isMonthly ? "50" : "50"}
            duration={isMonthly ? "Anuales" : "Anuales"}
            subtitle="Individual"
          >
            <OfferList text="MEDIDOR DE AZUCAR AL 50% DE DESCUENTO." status="active" />
            <OfferList text="ASESORIA MÉDICA." status="active" />
            <OfferList text="ASESORIA NUTRICIONAL." status="active" />
            <OfferList text="10% de descuento permanente." status="active" />
            <OfferList text="Validacion de recetas internacionales." status="active" />
            <OfferList text="Segunda opinión medica." status="active" />
            <OfferList text="Teleconsultas ilimitadas en cualquiera de nuestras 15 especialidades 24/07/365." status="active" />
            {/* <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Commercial Use" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Lifetime Access" status="inactive" />
            <OfferList text="Free Lifetime Updates" status="inactive" /> */}
          </PricingBox>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
