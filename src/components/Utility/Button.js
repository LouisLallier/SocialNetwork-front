import React from "react";
import {Link} from "react-router-dom";

const ButtonLink = ({ name }) => {
  return <Link className="bg-yellow-900 shadow-lg transition transform hover:bg-white-300 rounded-lg m-4 p-4">{name}</Link>;
};
export default ButtonLink