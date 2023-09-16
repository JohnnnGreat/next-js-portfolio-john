import React from "react";
import Link from "next/link";

function Header() {
  const [active, setActive] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);

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
    <div className="header">
      <div className="header-wrapper">
        <h1 className="logo-text">
          John<span>Ossai.</span>
        </h1>
        <nav className={navOpen && "toggleNav"}>
          <ul>
            <li>
              <Link className="link-nav" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link-nav" href="/">
                Skills
              </Link>
            </li>
            <li>
              <Link className="link-nav" href="/">
                Education
              </Link>
            </li>
            <li>
              <Link className="link-nav" href="/">
                Projects
              </Link>
            </li>
            <li>
              <Link className="link-nav" href="/">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="nav-menu"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          Menu
        </button>
      </div>
    </div>
  );
}

export default Header;
