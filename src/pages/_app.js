import "@/styles/globals.css";
import "@/styles/index.scss";
import Header from "@/layout/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
    </>
  );
}
