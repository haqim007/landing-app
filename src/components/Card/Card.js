import React from 'react';

const Card = (props) => {
    const style = props.style
    let className = ["card"];
    className.push(props.className)
    className = className.join(" ")
    return (
      <div
        className={className}
        style={{
          ...style,
        }}
      >
        {props.children}
      </div>
    );
}

export default Card;
