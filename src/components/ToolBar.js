import React from "react";
import "./ToolBar.css";

import printer from "../images/printer.png";
import back from "../images/back.png";
import fwd from "../images/fwd.png";
import paint from "../images/paint.png";
import caret from "../images/caret.png";
import bold from "../images/bold.png";
import i from "../images/i.png";
import under from "../images/under.png";
import color from "../images/color.png";
import hyper from "../images/hyper.png";
import msg from "../images/msg.png";
import left from "../images/left.png";
import center from "../images/center.png";
import right from "../images/right.png";
import just from "../images/just.png";
import line from "../images/line.png";
import numbered from "../images/numbered.png";
import bullet from "../images/bullet.png";
import indentright from "../images/indentright.png";
import indentleft from "../images/indentleft.png";
import clear from "../images/clear.png";

const ToolBar = () => {
  return (
    <div class="toolBar">
      <div class="toolBag">
        <a href="#">
          <img class="toolbarButtonsPrint" src={printer} alt={printer} />
        </a>
        <a href="#">
          <img class="toolbarButtons" src={back} alt={back} />
        </a>
        <a href="#">
          <img class="toolbarButtons" src={fwd} alt={fwd} />
        </a>
        <a href="#">
          <img class="toolbarButtonsPaint" src={paint} alt={paint} />
        </a>

        <a href="#">
          <span class="toolbarButtons100">
            100%
            <img id="hunCaret" src={caret} alt={caret} />
          </span>
        </a>
        <a href="#">
          <span class="toolbarButtonsNormal">
            Normal Text
            <img id="normalCaret" src={caret} alt={caret} />
          </span>
        </a>
        <a href="#">
          <span class="toolbarButtonsArial">
            Open Sans
            <img id="openCaret" src={caret} alt={caret} />
          </span>
        </a>
        <a href="#">
          <span class="toolbarButtons11">
            12
            <img id="twelveCaret" src={caret} alt={caret} />
          </span>
        </a>
        <a href="#">
          <img class="toolbarButtonsB" src={bold} alt={bold} />
        </a>
        <a href="#">
          <img class="toolbarButtonsI" src={i} alt={i} />
        </a>
        <a href="#">
          <img class="toolbarButtonsU" src={under} alt={under} />
        </a>
        <a href="#">
          <img class="toolbarButtonsColor" src={color} alt={color} />
        </a>
        <a href="#">
          <img class="toolbarButtonsHyper" src={hyper} alt={hyper} />
        </a>
        <a href="#">
          <img class="toolbarButtonsMsg" src={msg} alt={msg} />
        </a>

        <a href="#">
          <img class="toolbarButtons" src={left} alt={left} />
        </a>
        <a href="#">
          <img class="toolbarButtons" src={center} alt={center} />
        </a>
        <a href="#">
          <img class="toolbarButtons" src={right} alt={right} />
        </a>
        <a href="#">
          <img class="toolbarButtonsJust" src={just} alt={just} />
        </a>
        <a href="#">
          <img class="toolbarButtonsLine" src={line} alt={line} />
        </a>
        <a href="#">
          <img class="toolbarButtonsNumbered" src={numbered} alt={numbered} />
        </a>
        <a href="#">
          <img class="toolbarButtonsBullet" src={bullet} alt={bullet} />
        </a>
        <a href="#">
          <img
            class="toolbarButtonsIndentLeft"
            src={indentright}
            alt={indentright}
          />
        </a>
        <a href="#">
          <img
            class="toolbarButtonsIndentRight"
            src={indentleft}
            alt={indentleft}
          />
        </a>
        <a href="#">
          <img class="toolbarButtonsClear" src={clear} alt={clear} />
        </a>
      </div>
      <div class="slider">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default ToolBar;
