import React from 'react';

const Footer = () => {
    return (
      <footer className="container-fluid footer">
        <div className="row">
          <div className="wknd-footer">
            wknd@<span className="text-style-1">2020</span>
          </div>
          <div className="version-div">
            <div className="version">
              <div className="text-style">alpha version 0.1</div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
