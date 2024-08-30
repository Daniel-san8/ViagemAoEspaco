import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-8">
      <div className="px-8">
        <img src="shared/logo.svg" alt="logo" />
      </div>
      <div className="px-8">
        <img
          className="cursor-pointer"
          src="shared/icon-hamburger.svg"
          alt="hamburguer"
        />
        <img
          className="hidden cursor-pointer"
          src="shared/icon-close.svg"
          alt="X"
        />
      </div>
    </header>
  );
};

export default Header;
