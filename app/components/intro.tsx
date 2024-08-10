"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { links } from "@/lib/data";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-28 mb-28 max-w-[50rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            className=""
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <Image
              src={"/avatar1.png"}
              alt="Mega Amalia Profile"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl justify-center"
            ></Image>
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🙌
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold"> Hi, Saya Mega Amalia.</span> Saya mahasiswa{" "}
        <span className="italic font-bold">
          {" "}
          Universitas Bina Sarana Informatika{" "}
        </span>
        program studi{" "}
        <span className="underline font-bold">Sistem Informasi.</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 mx-2 flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
          transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition "></BsArrowRight>{" "}
        </Link>
        <a
          href="/CV.pdf"
          download={true}
          className="group bg-white mx-2  px-7 py-3 flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110  active:scale-105
          transitions cursor-pointer border border-black/10"
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-x-1 transitions"></HiDownload>
        </a>
        <a
          className="group  bg-white p-4 mx-2 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full
        outline-none focus:scale-110 hover:scale-110 hover:text-gray-900 active:scale-105
          transitions cursor-pointer border border-black/10"
          href=""
        >
          <BsLinkedin className="opacity-400 group-hover:translate-y-[-1] transitions"></BsLinkedin>
        </a>
        <a
          className="group  bg-white p-4 mx-2 text-gray-700 flex items-center gap-2 text-[1.55rem] rounded-full
        outline-none focus:scale-110 hover:scale-110 hover:text-gray-900 active:scale-105
          transitions cursor-pointer border border-black/10"
          href=""
        >
          {" "}
          <FaGithubSquare className="opacity-400 group-hover:translate-y-[-1] transitions"></FaGithubSquare>
        </a>
      </motion.div>
    </section>
  );
}
