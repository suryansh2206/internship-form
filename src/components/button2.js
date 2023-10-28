import React from "react";
import classes from "./button2.module.css";
import { useNavigate } from "react-router-dom";

const Button2 = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/auth");
  };

  return (
    <button className={classes.button2} onClick={clickHandler}>
      Book Now
    </button>
  );
};

export default Button2;
