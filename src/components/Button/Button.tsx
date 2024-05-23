import type { HTMLAttributes } from "react";

import googlePlaybudge from "../../assets/google-play-budge.svg";
import appStorebudge from "../../assets/app-store-budge.svg";

import "./Button.scss";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "App Store" | "Google Play";
}

const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  const appStorehandler = () => {
    console.log("appStorehandler");
  };

  const googlePlayhandler = () => {
    console.log("googlePlayhandler");
  };

  return (
    <button
      {...props}
      className="store-badge"
      onClick={variant === "App Store" ? appStorehandler : googlePlayhandler}
    >
      <img
        src={variant === "App Store" ? appStorebudge.src : googlePlaybudge.src}
        alt={variant === "App Store" ? "App Store Budge" : "Google Play Budge"}
        className="store-badge__img"
      />
    </button>
  );
};

export default Button;
