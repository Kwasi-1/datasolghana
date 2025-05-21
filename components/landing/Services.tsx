import ServiceCarousel from "./ServiceCarousel";

function Services() {
  const headingText = "Protecting Your Data, Securing Your Future";
  const subheadingText =
    "Our expert services cover data recovery, cybersecurity, IT support, and more — tailored to secure your digital ecosystem.";

  return (
    <div id="services">
      <div className="relative bg-gradient-to-br from-[#225EA6] to-[#193e6e] py-16 md:py-24">
        <div className="max-w-7xl mx-auto mb-12 gap-6 px-6 sm:px-12 xl:px-0 flex flex-col">
          <h1 className="text-3xl md:text-4xl max-w-xl font-bold text-white">
            {headingText}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mt-4">
            {subheadingText}
          </p>
        </div>
        <ServiceCarousel />
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="text-white border border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#225EA6] transition duration-300"
          >
            Explore Our Full Services
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;
