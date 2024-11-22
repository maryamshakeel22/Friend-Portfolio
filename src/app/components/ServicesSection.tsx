import Image from "next/image";
import { FaFigma } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { FaPalette } from "react-icons/fa";
import { GiPaintBrush } from "react-icons/gi";
import { AiOutlineMobile } from "react-icons/ai"
import { FiPrinter } from "react-icons/fi"

export default function Services() {
  return (
    <>
     <section id="services" className="text-white body-font">
     <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-10">
    <h2 className="text-center text-4xl  font-bold text-white mt-4 mb-8 md:mb-12">
        Services
      </h2>
      <div className="flex justify-center" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="600"
     data-aos-offset="0">
        {/* <div className="w-[120px] h-1 rounded-full bg-[#8433ee] inline-flex" /> */}
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center" >
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <MdDesignServices color="blue" className="w-[60px] h-[60px] text-black"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font mb-3 font-serif font-bold">
            Graphic Design
          </h2>
          <div className="leading-relaxed text-base text-start">
          <li>Logo Design</li>
          <li>Packaging Design</li>
          <li>Digital Advertising (Social Media, Onkine Banners)</li>
          <li>Infographics</li>
          </div>
          
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
         <FaPalette color="purple" className="w-[60px] h-[60px] text-black"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font mb-3 font-serif font-bold">
            Branding
          </h2>
          <div className="leading-relaxed text-base text-start">
          <li>Logo Creation</li>
          <li>Color Palette Developement</li>
          <li>Typography Systems</li>
          <li>Brand Guidelines (Style Giude)</li>
          </div>
          
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
         <GiPaintBrush color="orange" className="w-[60px] h-[60px]  text-black"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font mb-3 font-serif font-bold">
            Illustrations
          </h2>
          <div className="leading-relaxed text-base text-start">
            <li>Wedding Illustrations</li>
            <li>Cartoon Illustrations</li>
            <li>Self-Portraits (Personal Illustrations)</li>
          </div>
          
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
         <AiOutlineMobile color="green" className="w-[60px] h-[60px]  text-black"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font mb-3 font-serif font-bold">
            UI/UX Design
          </h2>
          <div className="leading-relaxed text-base text-start">
            <li>Website Design</li>
            <li>Mobile App Design</li>
            <li>Wireframming</li>
            <li>Prototyping</li>
          </div>
          
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
         <FiPrinter color="red" className="w-[60px] h-[60px]  text-black"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font mb-3 font-serif font-bold">
            Print Design
          </h2>
          <div className="leading-relaxed text-base text-start">
            <li>Business Cards</li>
            <li>Brochures</li>
            <li>Flyers</li>
            <li>Posters</li>
            <li>Banners</li>
          </div>
          </div>
        </div>
      </div>
    </div>
    {/* <button data-aos="flip-down" className="flex mx-auto mt-16 text-black border-2 border-indigo-500  hover:bg-indigo-500 duration-700 py-2 px-4 focus:outline-none rounded font-bold">
      CONTACT ME
    </button> */}
</section>

    </>
  );
}