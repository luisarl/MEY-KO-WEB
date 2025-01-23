import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
        
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              {/* <div className="mx-auto max-w-[800px] text-left"> */}
              
              <div className="max-w-[600px] text-left">
                <p className="mb-5 text-base !leading-relaxed text-primary dark:text-body-color-dark sm:text-lg md:text-xl">
                ¡Cuidamos tu salud donde quiera que estes!
                </p>
                <h1 className="mb-5 text-3xl font-bold leading-tight text-primary dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Servicio de Telemedicina con Consultas ilimitadas Todo el año
                
                </h1>
                <div className="flex flex-col items-center justify-left space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    SOLICITAR MEMBRESÍA
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
         
          <div className="mt-10 absolute z-[9999]">
            <Image
                // src="/images/logo/logo-2.svg"
                src="/images/hero/LINEA-DE-VIDA.png"
                alt="logo"
                width={2000}
                height={50}
                className=""
              />
          </div>
          <Image
            src="/images/hero/IMAGEN-DOCTOR.png"
            width={1200}
            height={1400}
            alt="Imagen"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
