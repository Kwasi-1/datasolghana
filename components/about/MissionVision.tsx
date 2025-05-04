"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const MissionVision = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const isVisionInView = useInView(visionRef, { once: true, amount: 0.3 });

  const missionPoints = [
    "Trusted data and cybersecurity technology",
    "Cutting-edge solutions for modern threats",
    "Reliable service when you need it most",
  ];

  return (
    <section className="py-20 bg-bytefix-bg text-xl">
      <div className="container-custom">
        {/* Mission Section */}
        <div
          ref={missionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={
              isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
            }
            transition={{ duration: 0.7 }}
          >
            <div className="lg:py-10 flex flex-col items-start gap-2">
              <h2 className="text-5xl font-bold mb-6">Our Mission</h2>
              <p>
                We believe data and systems should be resilient and secure. Our
                mission is to help clients recover lost data, secure their
                infrastructure, and stay digitally ahead.
              </p>
              <p className="mb-8">
                With expertise in digital forensic analysis, backup solutions,
                and IT equipment sales, we ensure that our clients stay ahead in
                the ever-evolving technological landscape.
              </p>
              <ul className="space-y-4">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-4 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={
              isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-full"
          >
            <Image
              src="/assets/mission_image.webp"
              width={500}
              height={500}
              alt="Technician working on computer"
              className="rounded-3xl w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Vision Section */}
        <div
          ref={visionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={
              isVisionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
            }
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 h-full"
          >
            <Image
              src="/assets/vission_image.webp"
              width={500}
              height={500}
              alt="Circuit board close-up"
              className="rounded-3xl w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={
              isVisionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="lg:py-16 flex flex-col items-start gap-2">
              <h2 className="text-5xl font-bold mb-3">Our Vision</h2>
              <p>
                To be the most dependable digital defense and recovery partner
                for individuals and organizations across the world.
              </p>
              <p>
                We serve with a commitment to outstanding customer service,
                ensuring every repair is done right the first time.
              </p>

              <p>
                With a focus on quality, speed, and affordability, Bytefix has
                become a trusted name in IT repair and services. We look forward
                to helping you with your next tech challenge!
              </p>
              <Button className="bg-primary hover:text-[#0A0A0A] text-[20px] hover:bg-white transition duration-300 mt-4 p-8">
                Explore Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
