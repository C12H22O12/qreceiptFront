import React from "react";
import "./Slider.css"

function Slider() {
    const clickIndex = () => {
        alert("clicked!");
    }
    return (
        <div>
            <div className="container">
               <div onClick={clickIndex}>1</div>
               <div onClick={clickIndex}>1</div>
               <div onClick={clickIndex}>1</div>
               <div onClick={clickIndex}>1</div>
               <div onClick={clickIndex}>1</div>
            </div>
        </div>
    )
};

export default Slider;
