import React from 'react'
import icon from 'assets/images/icon.jpg'

export default function BrandIcon() {
    return (
      <div className="row brand-icon">
        <div className="col-5">
          <img
            src={icon}
            // class="Bitmap"
            alt="icon"
            style={{ height: 33, objectFit: "contain" }}
          />
        </div>
        <div className="col-7">
          <div className="row">
            <span
              style={{
                width: "82px",
                height: "14px",
                fontSize: "12px",
              }}
            >
              Good Morning
            </span>
          </div>
          <div className="row">
            <span
              style={{
                width: "47px",
                height: "19px",
                fontSize: "16px",
                fontWeight: "bold",
                fontFamily:"WorkSans-Bold"
              }}
            >
              Fellas
            </span>
          </div>
        </div>
      </div>
    );
}
