import React from "react";
import ME from '../images/PhotoCV.jpeg'
import ButtonLink from "./Utility/Button";

const Header = () => {
  return (
    <div className="p-10">
      <div className="p-5 right-1/2 flex-col justify-center items-center text-center ml-auto mr-auto">
        <h5 className="text-sm p-3">Hello, i'm</h5>
        <h1 className="text-4xl p-3">Louis Lallier</h1>
        <h5 className="text-base p-3">Fullstack Developper</h5>
      </div>

      <div className="flex justify-center p-10">
        <ButtonLink name={"Download CV"} />
        <ButtonLink name={"Let's Talk"} />
      </div>
        <div className="ml-auto flex justify-center">
            <img className="rounded-lg w-1/2" src={ME} alt=""/>
        </div>
    </div>
  );
};

export default Header;
