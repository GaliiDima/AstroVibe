import logo from "../../assets/Logo.svg";

import "./NavigationMenu.scss";

const NAVIGATION_MENU_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#benefits", label: "Benefits" },
  { href: "#membership", label: "Premium" },
  { href: "#download", label: "Download" },
];

const NavigationMenu = () => {
  return (
    <nav className="menu" id="menu">
      <div className="container">
        <div className="menu__content">
          <div className="menu__header">
            <div className="menu__left">
              <img src={logo.src} alt="logo" className="menu__logo" />
              <p className="menu__logo-title">AstroVibe</p>
            </div>
            <a href="#" className="menu__close"></a>
          </div>
          <ul className="menu__list">
            {NAVIGATION_MENU_LINKS.map((link) => (
              <li key={link.label} className="menu__item">
                <a href={link.href} className="menu__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
