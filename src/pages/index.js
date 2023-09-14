import Image from "next/image";
import arrow from "../../public/assets/arrowM.svg";
import Link from "next/link";
import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section className="home sm:w-full bg-black py-[5rem] md:py-[0rem] h-[100vh] md:h-[100vh] w-[100%] overflow-hidden text-white flex items-center sticky">
        <div className="w-[700px] opacity-20 absolute top-[-8rem] right-[-8rem] h-[700px] rounded-[100%] bg-blue-500 blur-[6rem]"></div>
        <div className="pos flex flex-col absolute top-[40%] right-[4rem] items-center gap-[.5rem]">
          <div className="w-[20px] h-[20px] rounded-[100%] border-[1px] border-blue-500 p-[2px] overflow-hidden ">
            <div className="rounded-[100%] w-full h-full bg-blue-500"></div>
          </div>
          <div className="w-[1px] h-[40px] bg-blue-500"></div>
          <div className="w-[20px] h-[20px] rounded-[100%] border-[1px] border-blue-500"></div>
          <div className="w-[1px] h-[40px] bg-blue-500"></div>
          <div className="w-[20px] h-[20px] rounded-[100%] border-[1px] border-blue-500"></div>
        </div>
        <div className="max-w-[1100px] w-full mx-auto p-[1rem] relative z-10 md:p-[0rem]">
          <h1 className="text-[16px] leading-[0]  text-white  pl-[4px] font-[600] ">
            Hello, <span className="font-[700]">Meet John Ossai</span>
          </h1>
          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            className="hero-text relative  z-10 text-[45px] mt-[1.7rem]  md:text-[90px] font-bold leading-[95%] "
          >
            Frontend
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="hero-text-gr  text-blue-500 relative z-10 text-[45px]  md:text-[90px] font-bold leading-[95%]"
          >
            Developer.
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="text-[14px]  relative z-10 md:text-[15px] tracking-widest font-light text-text_dsc_clr w-full md:w-[731px]  mt-[1.7rem]"
          >
            Hello, I&apos;mJohn Ossai, a passionate and innovative frontend
            developer who transforms ideas into captivating digital experiences.
            With a dynamic career spanning two years in the ever-evolving world
            of web development.
          </p>
          <div className="mt-[1.7rem]">
            <Link
              className=" hover:bg-gray-100 transition-all font-[600] rounded-[.5rem] inline-block bg-white py-[.8rem] px-[1rem] text-black"
              href="/readmore"
            >
              Scroll to Read More
            </Link>
          </div>

          <div className=" circle w-[30px] animate-bounce h-[30px] border-red-500 border-[.4rem] rounded absolute right-[1rem] top-[50%]"></div>
        </div>
      </section>
      {/* //Projects Section */}
      <div className="h-fit overflow-hidden h-[130vh] py-[5rem] md:py-[4rem] bg-primary_bg_clr flex items-center sticky">
        <div className="w-full">
          <div className="max-w-[1100px] mx-auto p-[1rem] md:p-[0rem]">
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              id="text"
              className="hero-text-gr  font-[400] text-blue-500 relative z-10 text-[45px]  md:text-[75px] font-bold leading-[110%]"
            >
              Project
            </h1>
            <h1
              data-aos="fade-left"
              data-aos-duration="1000"
              className="hero-text-gr  text-white relative z-10 text-[45px]  md:text-[75px] font-bold leading-[110%]"
            >
              Highlights.
            </h1>
          </div>
          {/* <div className="w-full h-[1px] bg-text_dsc_clr mt-[1.7rem]"></div> */}
          <div className="grid max-w-[1100px] mx-auto">
            <div className="flex items-center border-r-[1px] border-[#847c7c] h-[300px] p-[1rem]">
              <div>
                <div className="w-[500px] opacity-20 absolute top-[-8rem] right-[-8rem] h-[500px] rounded-[100%] bg-blue-500 blur-[6rem]"></div>
                <p className="text-[14px] relative z-10 md:text-[15px] tracking-widest font-light text-text_dsc_clr w-full md:w-[731px] mx-auto mt-[1.7rem]">
                  Explore my portfolio of handpicked project highlights, each a
                  testament to my dedication to creating exceptional digital
                  experiences. From sleek and responsive user interfaces to
                  seamlessly integrated features, these projects showcase my
                  ability to turn concepts into captivating realities.
                </p>
                <Link
                  className="flex w-full gap-[2rem] mt-[1.6rem] border-[1px] border-blue-500 py-[.7rem] px-[3rem] justify-between  rounded-[90px] w-[300px] w-[100%] md:w-fit hover:bg-blue-500 hover:text-red-500"
                  href="/projects"
                >
                  <p className="text-white tracking widest">
                    View my projects.
                  </p>
                  <Image
                    alt="Line Image"
                    className="w-auto"
                    src={arrow}
                  ></Image>
                </Link>
              </div>
            </div>
            <div className="flex items-center border-t-[1px] md:border-[0] relative p-[1rem]">
              <div className="flex flex-col ">
                <Link
                  className="mt-[1.6rem] w-full absolute top-[1rem]  right-[1rem] grow  py-[.7rem] px-[1rem] "
                  href="/projects"
                >
                  <Image
                    alt="Line Image"
                    className="w-auto"
                    src={arrow}
                  ></Image>
                </Link>
                <p className="text-[14px] relative z-10 md:text-[15px] tracking-widest font-light text-text_dsc_clr w-full md:w-[731px] mx-auto mt-[1.7rem]">
                  My past projects spans across developing intuitive websites,
                  designing websites prototypes, an user interface designs for
                  future projects.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-text_dsc_clr "></div>
        </div>
      </div>
    </>
  );
}
