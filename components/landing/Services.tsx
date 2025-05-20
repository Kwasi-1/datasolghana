import ServiceCarousel from "./ServiceCarousel";

function Services() {
  const headingText = "Protecting Your Data, Securing Your Future";

  return (
    <div id="services">
      <div className="relative  bg-gradient-to-br from-[#225EA6] to-[#193e6e] py-16 md:py-24">
        <div className="max-w-7xl mx-auto mb-12 gap-6 px-6 sm:px-12 xl:px-0 flex flex-col">
          <h1 className="text-3xl md:text-4xl max-w-md font-bold text-white ">
            {headingText}
          </h1>
        </div>
        <ServiceCarousel />
      </div>
    </div>
  );
}

export default Services;
