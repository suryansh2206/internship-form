import React from "react";
import classes from "./button.module.css";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("./auth");
  };

  return (
    <button className={classes.button1} onClick={clickHandler}>
      Book Now
    </button>
  );
};

export default Button;
