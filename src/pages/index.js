import "remixicon/fonts/remixicon.css";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Facebook from "../../public/Facebook.svg";
import React from "react";
import Link from "next/link";
import PortImage from "../../public/johnport.jpg";

export default function Home() {
  const [showOthers, setShowOthers] = React.useState(false);

  React.useEffect(() => {
    if (showOthers) {
      setTimeout(() => {
        setShowOthers(false);
      }, 4000);
    }
  });

  const [isLoaded, setIsLoaded] = React.useState(false);

  const setActive = () => {
    setIsLoaded(true);
  };

  React.useEffect(() => {
    window.addEventListener("load", setActive);
  });
  return (
    <>
      <div className={`preloader ${isLoaded && "hide-preloader"}`}>
        <div className="rotate animate-spin"></div>
      </div>

      {isLoaded && (
        // Home
        <div className="home">
          <div className="first">
            <Image className="img" src={PortImage}></Image>
            <h1>JOHN OSSAI</h1>
          </div>
          <div className="second">
            <div className="second-container">
              <h1 className="meet-john">Meet John</h1>
              <h1 className="title-tag">Frontend Developer.</h1>
              <h1 className="title-tag">Ui Designer</h1>
              <p className="desc-tag">
                A passionate and innovative frontend developer who transforms
                ideas into captivating digital experiences. With a dynamic
                career spanning two years in the ever-evolving world of web
                development.
              </p>
              <Link className="link" href="/sc">
                Have a tour
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* Home Section */}
    </>
  );
}
