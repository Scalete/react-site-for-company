"use client";

import LogoSvg from "@/assets/svg/Logo";
import { headerMenu } from "@/utils/constants";
import Link from "next/link";
import { FC, useState } from "react";

const Header: FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const onClickHamburger = () => {
    setIsMenuActive(true);
    document.body.classList.add("disable-scroll");
  };

  const onClickClose = () => {
    setIsMenuActive(false);
    document.body.classList.remove("disable-scroll");
  };

  const renderMenu = () => {
    return headerMenu.map((item, i) => (
      <li key={i}>
        <a href={item.link} className={i === 0 ? "active" : ""}>
          {item.name}
          {i === 0 && (
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
          )}
        </a>
      </li>
    ));
  };

  return (
    <header className="header">
      <Link className="header__logo" href="/">
        <LogoSvg />
        <span>Logo</span>
      </Link>
      <nav className={`header__nav ${isMenuActive ? "active" : "inactive"}`}>
        <Link className="header__logo header__logo-mobile" href="/">
          <LogoSvg />
          <span>Logo</span>
        </Link>
        <ul>{renderMenu()}</ul>
      </nav>
      <div
        className={`overlay ${isMenuActive ? "active" : ""}`}
        onClick={onClickClose}
      ></div>
      <button className="header__menu" onClick={onClickHamburger}>
        <span>Menu</span>
        <div className="header__menu-hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </header>
  );
};

export default Header;
