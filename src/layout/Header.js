import React from "react";

function Header() {
  const [active, setActive] = React.useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  });
  return (
    <div
      className={`header text-red-500 fixed top-0 w-full ${active && "toggle"}`}
    >
      <div className="wrapper o p-[1rem] flex items-center justify-between">
        <h1 className="text-white">
          John <span className="text-red-500"></span>Ossai
        </h1>
        <button className="text-white">Open</button>
      </div>
    </div>
  );
}

export default Header;
