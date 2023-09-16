import "@/styles/globals.css";
import "@/styles/index.scss";
import "@/styles/home.scss";
import Header from "@/layout/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
