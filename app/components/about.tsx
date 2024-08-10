"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      className=" max-w-[45rem] text-center leading-8 sm:mb-10 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="text-2xl mt-16 mb-10">
        Saya sangat tertarik dengan{" "}
        <span className="font-medium">Software Engineer.</span> Saya belajar
        dengan mengikuti bootcamp yang diselenggarakan{" "}
        <span className="italic">UBSI, BuildWithAngga dan Udemy. </span>
        Saya membuat website ini untuk dokumentasi project dan belajar saya.
      </p>
    </motion.section>
  );
}
