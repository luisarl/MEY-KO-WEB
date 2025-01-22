import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-10 md:py-10 lg:py-10">
        <div className="container">
          {/* <SectionTitle
            title="¿Por qué elegir M-KARE?"
            paragraph=""
          /> */}
          <div className="w-full flex flex-row mb-[100px]">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-primary dark:text-white sm:text-4xl md:text-[45px]">
            ¿Por qué elegir 

              <Image className="inline-flex ml-5 "
                src="/images/logo/M-KareTITULO-AZUL.png" 
                alt='mkare' 
                width={300} 
                height={100}
              />
            ?
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
            
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
