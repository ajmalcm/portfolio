import { useRef } from "react";
import Card from "../Components/Card";
import { Globe } from "../Components/Globe";
import CopyEmailButton from "../Components/CopyEmailButton";
import {FrameWorks} from "../Components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* grid1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Ajmal C.M</p>
            <p className="subtext">
              Over the past two years, I’ve been crafting responsive,
              user-friendly web apps using React, Next.js, and Tailwind CSS. I’m
              passionate about building sleek digital experiences that are both
              functional and intuitive.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>
        {/* grid2 */}
        <div className="grid-default-color grid-2" ref={grid2Container}>
          <div className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="SMOOTH"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="RESPONSIVE"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Pattern"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="REST"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "35deg", top: "2%", right: "80%" }}
              image="assets/logos/next.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/vue.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-75deg", top: "10%", right: "20%" }}
              image="assets/logos/redux.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* grid3 */}
        <div className="grid-black-color grid-3">
            <div className="z-10 w-[50%]">
                <p className="head-text">Time Zone</p>
                <p className="subtext">I'm based in India, and open to remote work worldwide</p>
            </div>
            <figure className="absolute left-[30%] top-[10%]">
                <Globe/>
            </figure>
        </div>
        {/* grid4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
          <p className="text-center headtext">Do you want to start a project together?</p>
          <CopyEmailButton/>
          </div>
        </div>
        {/* grid5 */}
        <div className="grid-default-color grid-5">
        <div className="z-10 w-[50%]">
          <p className="headText">Tech Stack</p>
          <p className="subtext">I specialize in a variety of languages,frmaeworks,and tools that allow me to build robust and scalable applications.</p>

        </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 ">
            <FrameWorks/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
