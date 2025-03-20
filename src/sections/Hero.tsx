"use client";

import { FC, useEffect, useRef } from "react";
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import Button from "@/components/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const Hero: FC = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const scrollingDiv = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });

  const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

  useEffect(() => {
    entranceAnimation();
  }, [entranceAnimation]);

  return (
    <section>
      <div className="grid items-stretch md:grid-cols-12 md:h-screen sticky top-0">
        <div className="flex flex-col justify-center md:col-span-7">
          <div className="container !max-w-full">
            <motion.h1
              ref={scope}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl lg:text-7xl md:mt-0 md:text-6xl mt-40"
            >
              Crafting digital experiences through code and creative design
            </motion.h1>
            <div className="flex flex-col gap-6 items-start md:flex-row md:items-center mt-10">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.75, duration: 0.5 }}
              >
                <Button
                  variant="secondary"
                  iconAfter={
                    <div className="overflow-hidden size-5">
                      <div className="flex h-5 w-10 duration-500 group-hover/button:-translate-x-1/2 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  <span>View My Work</span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.5 }}
              >
                <Button variant="text">Let&apos;s Talk</Button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <motion.div
            className="max-md:!w-full md:absolute md:mt-0 md:right-0 md:size-full mt-20"
            style={{ width: portraitWidth }}
          >
            <Image
              src={heroImage}
              alt="Alex Taylor"
              className="object-cover size-full"
            />
          </motion.div>
        </div>
      </div>
      <div ref={scrollingDiv} className="md:h-[200vh]"></div>
    </section>
  );
};

export default Hero;
