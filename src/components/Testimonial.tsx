"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { usePresence, motion } from "motion/react";

const Testimonial = (
  props: {
    name: string;
    company: string;
    role: string;
    quote: string;
    image: string | StaticImport;
    imagePositionY: number;
    className?: string;
  } & React.HTMLAttributes<HTMLDivElement>
) => {
  const {
    name,
    company,
    role,
    quote,
    image,
    imagePositionY,
    className,
    ...rest
  } = props;

  const {
    scope: citeScope,
    entranceAnimation: citeEntranceAnimation,
    exitAnimation: citeExitAnimation,
  } = useTextRevealAnimation();

  const {
    scope: quoteScope,
    entranceAnimation: quoteEntranceAnimation,
    exitAnimation: quoteExitAnimation,
  } = useTextRevealAnimation();

  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      // quoteEntranceAnimation().then(() => citeEntranceAnimation());
      quoteEntranceAnimation()?.then(() => citeEntranceAnimation());
    } else {
      Promise.all([quoteExitAnimation(), citeExitAnimation()]).then(() =>
        safeToRemove()
      );
    }
  }, [
    isPresent,
    quoteEntranceAnimation,
    quoteExitAnimation,
    citeEntranceAnimation,
    safeToRemove,
    citeExitAnimation,
  ]);

  return (
    <div
      className={twMerge(
        "grid lg:gap-16 md:gap-8 md:grid-cols-5 md:items-center",
        className
      )}
      {...rest}
    >
      <div className="aspect-square md:aspect-[9/16] md:col-span-2 relative">
        <motion.div
          className="bg-stone-900 h-full absolute"
          initial={{ width: "100%" }}
          animate={{ width: 0 }}
          exit={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <Image
          src={image}
          alt={name}
          className="object-cover size-full"
          style={{ objectPosition: `50% ${imagePositionY * 100}%` }}
        />
      </div>
      <blockquote className="md:col-span-3">
        <div
          ref={quoteScope}
          className="text-3xl lg:text-6xl md:mt-0 md:text-5xl mt-8"
        >
          <span>&ldquo;</span>
          {quote}
          <span>&rdquo;</span>
        </div>
        <cite
          ref={citeScope}
          className="block lg:text-xl md:mt-8 md:text-lg mt-4 not-italic"
        >
          {name},{role} at {company}
        </cite>
      </blockquote>
    </div>
  );
};

export default Testimonial;
