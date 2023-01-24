import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";

export const SocialsHeader = () => {
  return (
    <div>
      <IconContext.Provider
        value={{ color: "black", className: "global-class-name", size: "30" }}
      >
        <a href="linkedin">
          <BsLinkedin />
        </a>
        <a href="github">
          <BsGithub />
        </a>
      </IconContext.Provider>
    </div>
  );
};
