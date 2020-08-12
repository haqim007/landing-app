import React from 'react'

export default function BoxContent(props) {
    const { title, style, className } = props;
    let classNameDiv = ["row", "content-box-div"];
    classNameDiv.push(props.classNameDiv);
    classNameDiv = classNameDiv.join(" ");
    return (
      <div className={className} style={style}>
        <div className={classNameDiv}>
          <div className="col-md-6 offset-2 col-sm-12 content-box-title">
            {title}
          </div>
          <div className="col-md-6 offset-2 content-box">{props.children}</div>
        </div>
      </div>
    );
}
