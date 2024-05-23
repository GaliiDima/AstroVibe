import React from 'react';
import logo from "../../assets/Logo.svg";
import "./NavigationHeader.scss";

const HEADER_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#benefits", label: "Benefits" },
  { href: "#membership", label: "Premium" },
  { href: "#download", label: "Download" },
];

interface NavigationHeaderProps {
  classnames?: string;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({ classnames = '' }) => {
  return (
    <nav className={`${classnames} navigation-menu`}>
      <div className="navigation-menu__left">
        <img src={logo.src} alt="logo" className="navigation-menu__logo" />
        <p className="navigation-menu__logo-title">AstroVibe</p>
      </div>
      <div className="navigation-menu__right">
        <ul className="navigation-menu__list">
          {HEADER_LINKS.map((link, index) => (
            <li key={index} className="navigation-menu__item">
              <a href={link.href} className="navigation-menu__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a className="navigation-menu__burger-icon" href="#menu"></a>
      </div>
    </nav>
  );
};

export default NavigationHeader;