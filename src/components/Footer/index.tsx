"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-gray-500 bg-opacity-20  pt-16 dark:bg-gray-dark py-10 md:py-10 lg:py-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                {/* <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/LOGO-MENU-MEY-KO.png"
                    alt="logo"
                    className="w-full"
                    width={140}
                    height={30}
                  />*/}

                <p className="mb-9 text-base leading-relaxed font-bold text-black dark:text-body-color-dark">
                  Mey-ko Atiempo
                </p>
                <p className="mb-9 text-base leading-relaxed text-justify font-bold text-black dark:text-body-color-dark">
                  Es una moderna plataforma diseñada bajo concepto multiproducto y multilenguaje, de asistencia medica, de facil y seguro acceso que les permite 
                  a los usuarios obtener beneficios a través de la atrención medica ofrecida por el staff medico de Mey-Ko Atiempo.
                </p>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  SITE MAP
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/#"
                      className="mb-4 inline-block text-base font-bold text-black duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Comprar plan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="mb-4 inline-block text-base font-bold text-black duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Activar Plan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="mb-4 inline-block text-base font-bold text-black duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Afiliados
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="mb-4 inline-block text-base font-bold text-black duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Corporativos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="mb-4 inline-block text-base font-bold text-black duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Embajadores
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="mb-4 inline-block text-base font-bold text-black duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Sucursales
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="mb-4 inline-block text-base font-bold text-black duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Terminos de Privacidad
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  APP
                </h2>
                <ul>
                  <li>
                      <Image
                        src="/images/about/appstore-blanco.png"
                        alt="playstore"
                        width={400}
                        height={300}
                        className="drop-shadow-three mb-5"
                      />
                  </li>
                  <li>
                    <Image
                      src="/images/about/google-play-blanco.png"
                      alt="appstore"
                      width={400}
                      height={300}
                      className="drop-shadow-three"
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-dark dark:text-white">
                  ESCRIBENOS
                </h2>
                <form>
                <div className="flex flex-wrap  bg-primary rounded-xl">
                  <div className="w-full px-4">
                    <div className="py-8">
                      <input
                        type="text"
                        placeholder="Nombre"
                        className="border-stroke w-full rounded-xl border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <input
                        type="text"
                        placeholder="Teléfono"
                        className="border-stroke w-full rounded-xl border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <input
                        type="email"
                        placeholder="Email"
                        className="border-stroke w-full rounded-xl border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full px-4 py-4">
                    <button className="rounded-lg bg-body-color px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Enviar
                    </button>
                  </div>
                </div>
              </form>

                {/* <ul>
                  <li>
                    <Link
                      href="/contact"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Open Support Ticket
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      About
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          <div className="py-2">
            <p className="text-left text-base font-bold text-black  dark:text-white">
              
              <a
                href="mailto:ventas@meyko.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                ventas@meyko.com
              </a>
            </p>
          </div>
          <div className="py-8 flex flex-row items-center justify-center">
            <a href="https://instagram.com" target="_blank">
              <Image
                src="/images/redes/instagram.png"
                alt="instagram"
                width={60}
                height={100}
                className="mr-5 drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
            </a>
            <a href="https://linkeid.com" target="_blank">
              <Image
                src="/images/redes/linked.png"
                alt="linked"
                width={60}
                height={100}
                className="mr-5 drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
            </a>
            <a href="https://tiktok.com" target="_blank">
              <Image
                src="/images/redes/tiktok.png"
                alt="tiktok"
                width={60}
                height={100}
                className="mr-5 drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
            </a>
            <a href="https://whatsapp.com" target="_blank">
              <Image
                src="/images/redes/whatsapp.png"
                alt="whatsapp"
                width={60}
                height={100}
                className="mr-5 drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
            </a>
            <a href="https://youtube.com" target="_blank">
              <Image
                src="/images/redes/youtube.png"
                alt="youtube"
                width={60}
                height={100}
                className="mr-5 drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
