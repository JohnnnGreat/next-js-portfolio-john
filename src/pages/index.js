import Image from "next/image";
import { Inter } from "next/font/google";
import arrow from "../../public/assets/arrowM.svg";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section className=" bg-primary_bg_clr py-[5rem] md:py-[0rem] h-fit md:h-[100vh] w-full text-white flex items-center relative">
        <div className="max-w-[1200px] mx-auto p-[1rem] md:p-[0rem]">
          <h1 className="hero-text text-[45px]  md:text-[112px]  font-bold leading-[110.5%] tracking-widest">
            frontend developer.
          </h1>
          <p className="text-[16px] font-regular text-text_dsc_clr w-full md:w-[731px] mt-[20px]">
            Hello, I'm <span className="text-text_accent">John Ossai</span>, a
            passionate and innovative frontend developer who transforms ideas
            into captivating digital experiences. With a dynamic career spanning
            two years in the ever-evolving world of web development.
          </p>

          <div className="absolute bottom-[10px]">
            <p className="text-white font-[14px] font-[300]">SCROLL</p>
          </div>
        </div>
      </section>
      {/* //Projects Section */}
      <section className="h-fit h-[150vh] py-[5rem] md:py-[0rem] bg-[#282828] flex items-center">
        <div className="w-full">
          <div className="max-w-[1200px] mx-auto p-[1rem]">
            <h1 className="hero-text text-[45px] text-white md:text-[112px]  font-bold leading-[110.5%] tracking-widest">
              projects highlights.
            </h1>
          </div>
          <div className="w-full h-[1px] bg-text_dsc_clr mt-[1.7rem]"></div>
          <div className="grid max-w-[1200px] mx-auto">
            <div className="flex items-center border-r-[1px] border-[#847c7c] h-[300px] p-[1rem]">
              <div>
                <p className="text-text_dsc_clr text-justify">
                  Explore my portfolio of handpicked project highlights, each a
                  testament to my dedication to creating exceptional digital
                  experiences. From sleek and responsive user interfaces to
                  seamlessly integrated features, these projects showcase my
                  ability to turn concepts into captivating realities.
                </p>
                <Link
                  className="flex gap-[2rem] mt-[1.6rem] py-[.7rem] px-[1rem] justify-between bg-[#847C7C] rounded-[90px] w-[300px] w-[100%] md:w-fit hover:bg-[#585858]"
                  href="/projects"
                >
                  <p className="text-white">VIEW MORE PROJECTS</p>
                  <Image className="w-auto" src={arrow}></Image>
                </Link>
              </div>
            </div>
            <div className="flex items-center relative border-t-[1px] border-[#847c7c] p-[1rem]">
              <div className="flex flex-col">
                <Link
                  className="mt-[1.6rem] absolute top-[1rem] right-[1rem] grow  py-[.7rem] px-[1rem] "
                  href="/projects"
                >
                  <Image className="w-auto" src={arrow}></Image>
                </Link>
                <p className="text-text_dsc_clr  mt-[5rem] text-justify">
                  My past projects spans across developing intuitive websites,
                  designing websites prototypes, an user interface designs for
                  future projects.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-text_dsc_clr "></div>
        </div>
      </section>
    </>
  );
}
