import "remixicon/fonts/remixicon.css";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Facebook from "../../public/Facebook.svg";
import React from "react";
import Link from "next/link";

export default function Home() {
  const [showOthers, setShowOthers] = React.useState(false);

  React.useEffect(() => {
    if (showOthers) {
      setTimeout(() => {
        setShowOthers(false);
      }, 4000);
    }
  });
  return (
    <>
      <div className="home">
        \{/* Logo Name */}
        <h1 className="logo">
          John <span>Ossai.</span>
        </h1>
        {/* Navigation */}
        <div className="nav  className='link'flex items-center justify-center w-full">
          <nav>
            <ul>
              <li>
                <Link className="link" href="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link className="link" href="/">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="link" href="/">
                  Skills
                </Link>
              </li>
              <li>
                <Link className="link" href="/">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="home__wrapper">
          <div className="home__wrapper_">
            <h1 className="first-tag">
              Hi, <span className="span-white">I am</span> John
            </h1>
            <p className="desc">
              A passionate and innovative frontend developer who transforms
              ideas into captivating digital experiences. With a dynamic career
              spanning two years in the ever-evolving world of web development.
            </p>
            <div className="social-media-links">
              <div
                className={`q w-[77px] overflow-hidden  ${
                  showOthers && "showItems"
                }`}
              >
                <div className="flex items-center w-[300px] gap-[.3rem] ">
                  <div
                    className="first"
                    onClick={() => {
                      setShowOthers(true);
                    }}
                  >
                    <Image src={Facebook} alt="facebook"></Image>
                  </div>
                  <i
                    class={`ri-arrow-right-s-line ${showOthers && "none"}`}
                  ></i>
                  <div className={`default `}>
                    <div className="first">
                      <Image src={Facebook} alt="facebook"></Image>
                    </div>
                    <div className="first">
                      <Image src={Facebook} alt="facebook"></Image>
                    </div>
                    <div className="first">
                      <Image src={Facebook} alt="facebook"></Image>
                    </div>
                    <i
                      class={`ri-arrow-right-s-line `}
                      onClick={() => {
                        setShowOthers(false);
                      }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
