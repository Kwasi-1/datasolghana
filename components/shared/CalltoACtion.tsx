import { Icon } from "@iconify/react";

export default function CallToAction() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <div className="bg-[#225EA6] rounded-2xl py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left relative overflow-hidden space-y-6 md:space-y-0">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white capitalize">
              Lost data? System under attack?
            </h2>
            <p className="text-white text-sm md:text-base mt-3 opacity-90">
              Talk to a recovery expert. Fast response. 100% confidential.
            </p>
          </div>

          <a
            href="https://wa.me/233200063564?text=Hello%20Datasol%2C%20I%20need%20help%20with..."
            target="_blank"
            rel="noopener"
            className="inline-flex items-center border-2 border-white hover:bg-white text-white hover:text-[#225EA6] text-base font-semibold px-8 py-4 rounded-full transition duration-300"
          >
            <Icon icon="mdi:whatsapp" className="text-2xl mr-2" />
            Get Help Now
          </a>
        </div>
      </div>
    </div>
  );
}
