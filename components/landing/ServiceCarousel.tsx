"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight } from "lucide-react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const icon = "/assets/future-plan.png";

const services = [
  {
    title: "Data Recovery",
    text: "We recover lost files from hard drives, SSDs, and mobile devices. Whether it’s a logical or physical failure, we ensure safe and secure data retrieval.",
    icon: icon,
  },
  {
    title: "Cyber Security",
    text: "Protect your business from cyber threats with our advanced threat detection, malware protection, and firewall solutions.",
    icon: icon,
  },
  {
    title: "IT Consulting",
    text: "Get expert guidance on your IT infrastructure, project planning, software solutions, and digital transformation strategies.",
    icon: icon,
  },
  {
    title: "Networking",
    text: "We design, implement, and maintain robust wired and wireless network solutions for organizations of all sizes.",
    icon: icon,
  },
  {
    title: "Training & Support",
    text: "Empower your team with professional IT training and get continuous technical support to keep systems running smoothly.",
    icon: icon,
  },
];

export default function ServiceCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "start",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return undefined;
    }

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const pathname = usePathname();
  const isLoans = pathname === "/loans";
  const isInvestments = pathname === "/investments";
  const visibleServices = isLoans
    ? services.slice(2, 5)
    : isInvestments
    ? services.slice(0, 2)
    : services;

  return (
    <div className={`relative mx-auto ${isInvestments ? "max-w-7xl" : ""}`}>
      {/* Carousel viewport */}
      <div
        className={`overflow-hidden px-6 sm:px-12 w-full ${
          isInvestments ? "xl:px-0" : "xl:px-[calc((100vw-1280px)/2)]"
        }`}
        ref={emblaRef}
      >
        <div
          className={`flex gap-4 touch-pan-y cursor-grab active:cursor-grabbing ${
            isInvestments ? "lg:grid lg:grid-cols-2" : ""
          } `}
        >
          {visibleServices.map((service, idx) => (
            <div
              key={idx}
              className={`embla__slide min-w-[280px] min-h-[300px] sm:min-w-[400px] max-w-[300px] shrink-0 ${
                isInvestments ? "lg:max-w-full lg:w-full " : ""
              }`}
            >
              <div className="relative h-full flex flex-col gap-4 bg-white rounded-[30px] p-8 pt-12 md:p-12 md:pb-20 items-start transition duration-300 cursor-pointer">
                <Image
                  src={service.icon}
                  alt="icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div className="text-2xl font-semibold text-gray-900">
                  {service.title}
                </div>
                <p className="text-gray-600 text-lg line-clamp-2">
                  {service.text}
                </p>
                <a
                  href="/#contact"
                  className="absolute bottom-5 sm:right-10 right-5 flex items-center justify-end bg-[#272729] rounded-full p-2 text-white mt-2"
                >
                  <Icon
                    icon="weui:arrow-filled"
                    className="w-6 h-6 font-bold"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div
        className={`justify-end sm:pr-12 lg:pr-20 mt-16 gap-4 -translate-y-1/2 w-full flex px-4 z-10 ${
          isInvestments ? "lg:hidden" : ""
        }`}
      >
        <button
          type="button"
          title="Scroll to previous"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={`bg-white shadow rounded-full p-2 transition duration-300 ${
            canScrollPrev
              ? "hover:bg-gray-100"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          <ChevronRight className="rotate-180 w-6 h-6 text-gray-800" />
        </button>
        <button
          type="button"
          title="Scroll to Next"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={`bg-white shadow rounded-full p-2 transition duration-300 ${
            canScrollNext
              ? "hover:bg-gray-100"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
}
