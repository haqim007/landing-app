import React from 'react';

const Card = (props) => {
    const defaultTitleStyle = {
        // width: "151px",
        height: "38px",
        fontFamily: "WorkSans-Black",
        fontSize: "32px",
        fontWeight: 900,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "var(--black)",
    }
    const defaultTxtStyle = {
        width: "207px",
        height: "42px",
        fontFamily: "WorkSans",
        fontSize: "12px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "-0.43px",
        color: "var(--black)",
    }
    const titleStyle = props.titleStyle ? props.titleStyle : defaultTitleStyle
    const txtStyle = props.txtStyle ? props.txtStyle : defaultTxtStyle
    let className = ["card-body"];
    className.push(props.className);
    className = className.join(" ");
    return (
      <div className={className}>
        <div
          className="card-title"
          style={{
            ...titleStyle,
          }}
        >
          {props.title}
        </div>
        <p
          className="card-text"
          style={{
            ...txtStyle,
          }}
        >
          {props.children}
        </p>
      </div>
    );
}

export default Card;
