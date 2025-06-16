import React from "react";
import { FlipWords } from "./FlipWords";
import {motion} from "motion/react"

const words=["Secure","Modern","Scalable"]

const Herotext = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      <div className="flex-col hidden md:flex c-space">
        <motion.h1 className="text-4xl font-medium">Hi I'm Aju</motion.h1>
      {/* desktop */}
        <div className="flex flex-col items-start">
          <motion.p className="text-5xl font-medium text-neutral-300">
            A Developer <br /> Dedicated to Crafting.
          </motion.p>
          <motion.div><FlipWords words={words} className="font-black text-white text-8xl"/></motion.div>
          <motion.p className="text-4xl font-medium text-neutral-300">Web Solutions</motion.p>
        </div>
      </div>
      {/* mobile */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p className="text-4xl font-medium">Hi I'm Aju</motion.p>
        <div>
            <motion.p className="text-5xl font-black text-neutral-300">Building</motion.p>
            <motion.div>
                <FlipWords words={words} className="font-bold text-white text-7xl"/>
            </motion.div>
            <motion.p className="text-4xl font-black text-neutral-300">
                Web Applications
            </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Herotext;
