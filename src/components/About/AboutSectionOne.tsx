import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-primary  text-white">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-10 md:pt-10 lg:pt-18">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap">
            
          <div className="w-full px-4 lg:w-2/5">
              <div className="relative  aspect-[25/24] max-w-[400px] lg:mr-0">
                <Image
                  src="/images/about/DOCTORES-ABAJO.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/DOCTORES-ABAJO.png"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/5">
              <SectionTitle
                title="Especialidades Cubiertas en Telemedicina"
                paragraph=""
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap sm:flex-nowrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Medicina Interna" />
                    <List text="Cardiología" />
                    <List text="Pediatría" />
                    <List text="Neurología" />
                    <List text="Gastroenterología" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Neumología" />
                    <List text="Ginecología" />
                    <List text="Oftalmología" />
                    <List text="Traumatología" />
                    <List text="Otorrinolaringología" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Nutrición" />
                    <List text="Dietética" />
                    <List text="Psicología" />
                    <List text="Odontología" />
                    <List text="Dermatología" />
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
    // <section id="about" className="pt-16 py-10 md:py-10 lg:py-10">
    //   <div className="container">
    //     <div className="-mx-4 flex flex-wrap items-center">
    //         <div className="w-full px-4 lg:w-1/2">
    //           <div
    //             className="relative mx-auto mb-12 aspect-[25/24] max-w-[400px] text-center lg:m-0"
    //             data-wow-delay=".15s"
    //           >
    //             <Image
    //               src="/images/about/DOCTORES-ABAJO.png"
    //               alt="about image"
    //               fill
    //               className="drop-shadow-three dark:hidden dark:drop-shadow-none"
    //             />
    //             <Image
    //               src="/images/about/DOCTORES-ABAJO.png"
    //               alt="about image"
    //               fill
    //               className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
    //             />
    //           </div>
    //         </div>

    //         <div className="w-full px-4 lg:w-1/2">
    //           <SectionTitle
    //             title="Especialidades Cubiertas en Telemedicina"
    //             paragraph=""
    //             mb="44px"
    //           />

    //           <div
    //             className="mb-12 max-w-[570px] lg:mb-0"
    //             data-wow-delay=".15s"
    //           >
    //             <div className="mx-[-12px] flex flex-nowrap">
    //               <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
    //                 <List text="Medicina Interna" />
    //                 <List text="Cardiología" />
    //                 <List text="Pediatría" />
    //                 <List text="Neurología" />
    //                 <List text="Gastroenterología" />
    //               </div>

    //               <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
    //                 <List text="Neumología" />
    //                 <List text="Ginecología" />
    //                 <List text="Oftalmología" />
    //                 <List text="Traumatología" />
    //                 <List text="Otorrinolaringologia" />
    //               </div>

    //               <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
    //                 <List text="Nutrición" />
    //                 <List text="Dietética" />
    //                 <List text="Psicología" />
    //                 <List text="Odontología" />
    //                 <List text="Dermatología" />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    // </section>
  );
};

export default AboutSectionOne;
