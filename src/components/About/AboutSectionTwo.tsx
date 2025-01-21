import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/IPAD-IPHONE.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/IPAD-IPHONE.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle
              title="Descarga Nuestra App"
              paragraph="Una forma innovadora de llevar tu historia medica."
              mb="44px"
            />
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/BOTON-GOOGLE.png"
                alt="playstore"
                width={400}
                height={200}
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/BOTON-APPLE.png"
                alt="appstore"
                width={400}
                height={200}
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />

            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
