import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="text-white text-center">
          <h1 className="display-4 fw-bold " style={{ color: "black" }}>
            Cutout.pro
          </h1>
          <h1 className="display-4 fw-bold" style={{ color: "black" }}>
            Batch Image Background Removal 100% automatically by AI online
          </h1>
        </header>
      </div>
    );
  }
}
