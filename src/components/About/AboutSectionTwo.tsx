import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-10 md:py-10 lg:py-10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/3">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[400px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/TELEFONO.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/TELEFONO.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <SectionTitle
              title="Descarga Nuestra App"
              paragraph="¡Cuidamos tu salud donde quiera que estés!"
              mb="44px"
            />
            </div>
            
            <div className="w-full flex flex-row px-4 lg:w-1/3">
              <div className="mr-10">
                <Image
                    src="/images/about/google-play-blanco.png"
                    alt="playstore"
                    width={300}
                    height={200}
                  />
              </div>
              <div>
                <Image
                    src="/images/about/appstore-blanco.png"
                    alt="appstore"
                    width={300}
                    height={200}
                  />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
