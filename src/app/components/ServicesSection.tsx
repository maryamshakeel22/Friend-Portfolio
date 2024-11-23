import { MdDesignServices } from "react-icons/md";
import { FaPalette } from "react-icons/fa";
import { GiPaintBrush } from "react-icons/gi";
import { AiOutlineMobile } from "react-icons/ai";
import { FiPrinter } from "react-icons/fi";

export default function Services() {
  const services = [
    {
      title: "Graphic Design",
      icon: <MdDesignServices className="w-[60px] h-[60px] text-blue-500" />,
      details: [
        "Logo Design",
        "Packaging Design",
        "Digital Advertising",
        "Infographics",
      ],
    },
    {
      title: "Branding",
      icon: <FaPalette className="w-[60px] h-[60px] text-purple-500" />,
      details: [
        "Logo Creation",
        "Color Palette",
        "Typography",
        "Brand Guidelines",
      ],
    },
    {
      title: "Illustrations",
      icon: <GiPaintBrush className="w-[60px] h-[60px] text-orange-500" />,
      details: [
        "Wedding Illustrations",
        "Cartoon Illustrations",
        "Self-Portraits",
      ],
    },
    {
      title: "UI/UX Design",
      icon: <AiOutlineMobile className="w-[60px] h-[60px] text-green-500" />,
      details: [
        "Website Design",
        "Mobile App Design",
        "Wireframing",
        "Prototyping",
      ],
    },
    {
      title: "Print Design",
      icon: <FiPrinter className="w-[60px] h-[60px] text-red-500" />,
      details: ["Business Cards", "Brochures", "Flyers", "Posters", "Banners"],
    },
  ];

  return (
    <>
      <section id="services" className="text-white body-font relative">
        {/* Background Blur Effect */}
        <div className="absolute inset-0">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Services Section */}
        <div className="container px-5 py-24 mx-auto relative z-10">
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
              Services
            </h2>
          </div>

          {/* Service Cards */}
          <div className="flex flex-wrap justify-center -mx-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-4 md:w-1/2 lg:w-1/3 flex flex-col text-center items-center"
              >
                {/* Icon */}
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                  {service.icon}
                </div>

                {/* Title & Details */}
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font mb-3 font-serif font-bold">
                    {service.title}
                  </h2>
                  <ul className="leading-relaxed text-base text-start text-gray-300 list-disc pl-5">
                    {service.details.map((detail, i) => (
                      <li key={i} className="mb-2">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
