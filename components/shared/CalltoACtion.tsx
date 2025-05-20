import { Icon } from "@iconify/react/dist/iconify.js";

export default function CallToAction() {
  return (
    <div className="bg-[url('/assets/cta-v1-pattern.png')] bg-cover py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#225EA6] rounded-2xl py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left relative overflow-hidden">
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-[500] text-white mb-6 md:mb-0 capitalize">
            Need a problem fixed?
          </h2>

          <a
            href="https://wa.me/233200063564?text=Hello%20Datasol%2C%20I%20need%20help%20with..."
            target="_blank"
            rel="noopener"
            className="border-2 border-white hover:bg-white text-white hover:text-[#225EA6] text-base font-medium px-10 py-4 rounded-full transition duration-300"
          >
            LET’S TALK
          </a>
        </div>
      </div>
    </div>
  );
}
