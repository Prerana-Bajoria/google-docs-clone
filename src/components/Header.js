import React from "react";
import "./Header.css";
import emailcaret from "../images/emailcaret.png";
import bluedoclogo from "../images/bluedoclogo.png";
import ToolBar from "./ToolBar";

const Header = () => {
  return (
    <div class="header">
      <div class="whiteBar">
        <a href="#">
          <img class="docsLogo" src={bluedoclogo} alt={bluedoclogo} />
        </a>

        <h1 id="untitled">
          <em>Untitled document</em>
        </h1>

        <ul id="mainMenu">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">
            &#9776;
          </label>
          <div className="menu">
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Insert</li>
            <li>Format</li>
            <li>Tools</li>
            <li>Table</li>
            <li>Add-Ons</li>
            <li>Help</li>
          </div>
        </ul>

        <div class="rightSide">
          <span id="emailLogin">
            preranabajoria22@gmail.com
            <img id="emailcaret" src={emailcaret} alt={emailcaret} />
          </span>

          <ul class="extraButtons">
            <li>Comments</li>
            <li>Share</li>
          </ul>
        </div>
      </div>
      <ToolBar />
    </div>
  );
};

export default Header;
