"use client";

import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView, motion } from "motion/react";
import { FC, useEffect, useRef } from "react";

const Intro: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope, { once: true });

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  return (
    <motion.section
      id="intro"
      className="lg:mt-20 md:mt-16 mt-12 section"
      ref={sectionRef}
    >
      <div className="container">
        <h2 ref={scope} className="text-4xl lg:text-8xl lg:w-[80%] md:text-7xl">
          Building beautiful websites with clean code and thoughtful design to
          help yur business grow and stand out online
        </h2>
      </div>
    </motion.section>
  );
};

export default Intro;
