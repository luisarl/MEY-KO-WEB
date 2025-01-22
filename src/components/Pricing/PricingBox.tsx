const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, children } = props;

  return (
    <div className="w-full flex">
      <div className="relative z-10 rounded-lg border-2 border-primary bg-white shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
          <div className="bg-primary flex flex-col items-center justify-center">
            <div className="px-3 py-3">
              <h4 className="text-xl font-bold text-white dark:text-white">
                {packageName}
              </h4>
            </div>
            <div>
              <p className="mb-5 px-3 text-white">{subtitle}</p>
            </div>
          </div>
          <div className="flex items-center justify-between px-9 py-3">
            <h3 className="price mb-2 text-[32px] font-bold text-primary dark:text-white">
                $<span className="amount">{price}</span>
                <span className="time text-lg font-medium text-body-color">
                  /{duration}
                </span>
              </h3>
          </div>
        <div className="px-9 py-3">{children}</div>
        <div className="mb-8 px-5 border-b border-body-color border-opacity-10 pb-8  dark:border-white dark:border-opacity-10">
          <button className="flex w-full items-center justify-center rounded-lg bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
            Comprar esta membresía
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
