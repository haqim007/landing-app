import React from 'react';
import ArrowsImg from "assets/images/oval-icon@2x.png";


const CustomArrow = (props) => {
    const {onClick} = props
    let className = ["arrow-icon"];
    className.push(props.className)
    className = className.join(" ")
    return (
      <>
        <img
          className={className}
          onClick={onClick}
          src={ArrowsImg}
          alt="arrow"
        />
      </>
    );
}

export default CustomArrow;

