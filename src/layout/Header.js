import React from "react";

function Header() {
  return (
    <div className="header text-red-500 fixed top-0 w-full ">
      <div className="max-w-[1200px] mx-auto p-[1rem] flex items-center justify-between">
        <h1 className="text-white">John O.</h1>
        <button className="text-white">Open</button>
      </div>
    </div>
  );
}

export default Header;
