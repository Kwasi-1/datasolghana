import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-y-8 gap-x-16">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2">
          <p className="text-sm uppercase text-[#007BFF] font-[400] mb-2">
            The Datasol Advantage
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6">
            Cybersecurity & Data Recovery <br />
            Tailored to Your Business
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            At Datasol, we specialize in protecting what matters most—your data.
            As a trusted partner in cybersecurity and data recovery, we help
            businesses stay secure, resilient, and compliant in an evolving
            threat landscape. Whether it's preventing breaches, recovering lost
            files, or securing your infrastructure, our mission is simple:
            safeguard your digital future.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#00C6FF] flex items-center justify-center text-xl text-[#007BFF]">
                🔒
              </div>
              <span className="text-base font-semibold text-[#102B5F]">
                Cybersecurity & threat defense
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#00C6FF] flex items-center justify-center text-xl text-[#007BFF]">
                💾
              </div>
              <span className="text-base font-semibold text-[#102B5F]">
                Data recovery & backup systems
              </span>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full md:mt-6 lg:mt-0 h-fit lg:w-1/2">
          {/* Badge Overlay */}
          <div className="md:absolute mx-auto  mb-6 md:mb-0 -top-10 -left-10 bg-[#EAF6FF] text-center rounded-full border-2 border-[#007BFF] w-36 h-36 flex flex-col items-center justify-center shadow-md z-20">
            <span className="text-2xl font-bold text-[#007BFF]">16+</span>
            <span className="text-xs font-semibold uppercase text-[#102B5F] mt-1 text-center">
              Years <br /> Securing Data
            </span>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-[#007BFF] opacity-30 z-10 rounded-3xl pointer-events-none" />
            <Image
              src="/assets/about-image.jpg"
              alt="Cybersecurity service visual"
              width={600}
              height={400}
              className="w-full h-fit object-cover relative z-0"
            />
          </div>

          {/* Operating since badge */}
          <div className="absolute -bottom-6 left-4 bg-white border shadow-sm px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium text-[#102B5F] z-20">
            🌍 Since 2010, Defending digital ecosystems
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
