"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Link from "next/link";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-10 md:py-10 lg:py-10">
      <div className="container flex flex-row">
        <SectionTitle
          title="Membresías"
          paragraph="Que se Adaptan a tus Necesidades."
          
          width="665px"
        />
        <div className="mt-20 items-center justify-left space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link
            href="https://meyko-desarrollo-16772699.dev.odoo.com/shop/add_to_cart?product_id=58571&add_qty=1"
            target="_blank"
            className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Individual
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 gap-x-40  gap-y-10 md:grid-cols-2 lg:grid-cols-2">
          <PricingBox
            image="/images/logo/M-KareTITULO-BLANCO.png"
            packageName="MK-ARE"
            price={isMonthly ? "25" : "25"}
            duration={isMonthly ? "Anuales" : "Anuales"}
            subtitle=""
            boton ={
              <a href="https://meyko-desarrollo-16772699.dev.odoo.com/shop/add_to_cart?product_id=58572&add_qty=1" target="_blank">
                <button className="w-full mt-40 items-center justify-center content-center rounded-lg bg-gradient-to-r from-amber-400 from-50% via-amber-300 via-85% to-amber-300 to-100% p-3 boton-membresia text-[35px]  text-primary transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                  Comprar membresía 
                 <br />
                 <strong className="font-bold text-[50px]  text-body-color">GOLD</strong>
                </button>
              </a>
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
              <a href="https://meyko-desarrollo-16772699.dev.odoo.com/shop/add_to_cart?product_id=58573&add_qty=1" target="_blank">
                <button className="w-full mt-16 items-center justify-center rounded-lg bg-gradient-to-r from-gray-300 from-70% via-gray-100 via-90% to-gray-300 to-100% p-3 boton-membresia text-[35px]  text-primary transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                  Comprar membresía 
                  <br />
                  <strong className="font-bold text-[50px]  text-body-color">PLATINUM</strong>
                </button>
              </a>
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
