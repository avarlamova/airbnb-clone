import React from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";

function Banner() {
  return (
    <div className="banner">
      <div className="banner--info">
        <h1> Не знаете, куда поехать? Отлично. </h1> 
      </div>

      <Button variant="outlined"> smth</Button>
    </div>
  );
}

export default Banner;
