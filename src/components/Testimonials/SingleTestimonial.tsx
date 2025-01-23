import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation, boton } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full flex">
      
      <div className="rounded-sm bg-primary p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
      <div className="flex flex-col items-center">
          <div className="relative items-center justify-center mb-5 h-[200px] max-w-[200px] bg-white overflow-hidden rounded-full">
            <Image src={image} alt={name}  width={200} height={200}/>
          </div>
          <div className="w-full items-center justify-center text-center">
            <h3 className="mb-5 border-b border-white border-opacity-10 text-lg font-semibold text-white dark:text-white lg:text-base xl:text-lg">
              {name}
            </h3>
            {/* <p className="text-sm text-body-color">{designation}</p> */}
          </div>
        </div>
        {/* <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div> */}
        <p className="mb-8 align-bottom justify-end items-center border-b border-white border-opacity-10 pb-8 text-base leading-relaxed text-white dark:border-white dark:border-opacity-10 dark:text-white">
          {content}
        </p>
        <div className="mb-8 border-b border-white border-opacity-10 pb-8 dark:border-white dark:border-opacity-10">
          <button className="flex w-full border border-white items-center justify-center rounded-lg bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
            {boton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
