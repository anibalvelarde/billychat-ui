/*eslint-disable*/
import React, { Component } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classnames from "classnames";

import imagine1 from "assets/img/sidebar-1.jpg";
import imagine2 from "assets/img/sidebar-2.jpg";
import imagine3 from "assets/img/sidebar-3.jpg";
import imagine4 from "assets/img/sidebar-4.jpg";

import Button from "components/CustomButtons/Button.js";

const StyleColorSelector = (props) => {
  const colorList = [
    { color: "purple", className: "badge-purple" },
    { color: "blue", className: "badge-blue" },
    { color: "green", className: "badge-green" },
    { color: "red", className: "badge-red" },
    { color: "orange", className: "badge-orange" },
  ];
  return (
    <a className="switch-trigger">
      <div>
        {
          colorList.map((colorData, idx) => {
            return(
              <span
                className={
                  props.bgColor === colorData.color
                    ? `badge filter ${colorData.className} active`
                    : `badge filter ${colorData.className}`
                }
                data-color={colorData.color}
                onClick={() => {
                  props.handleColorClick(colorData.color);
                }}
            />
          );
          })
        }
      </div>
    </a>
  );
}

const StyleBackgroundImageSelector = (props) => {
  const [bgImage, setBgImage] = React.useState(props.bgImage);
  const imageList = [ imagine1, imagine2, imagine3, imagine4 ];
  return imageList.map((imageItem, idx) => {
    return (
      <li className={bgImage === imageItem ? "active" : ""}>
        <a
          className="img-holder switch-trigger"
          onClick={() => {
            setBgImage(imageItem);
            props.handleImageClick(imageItem);
          }}
        >
          <img src={imageItem} alt="..." />
        </a>
      </li>
    );
  });
}

const MarketingButtons = (props) => {
  const buttonDataList = [
    { title: "Take a survey", url: "https://www.monkeysurvey.com", buttonType: "success" },
    { title: "Contact Us", url: "https://www.anibalvelarde.com", buttonType: "info" },
    { title: "Neuro Center", url: "https://www.google.com", buttonType: "warning"}
  ];

  return buttonDataList.map((btnData, idx) => {
    return (
      <li className="button-container">
        <div className="button-container">
          <Button
            className={`badge-${props.bgColor}`}
            href={btnData.url}
            target="_blank"
            fullWidth
          >
            {btnData.title}
          </Button>
        </div>
      </li>
    );
  });
}

export default function FixedPlugin(props) {
  const handleClick = () => {
    props.handleFixedClick();
  };
  return (
    <div
      className={classnames("fixed-plugin", {
        "rtl-fixed-plugin": props.rtlActive
      })}
    >
      <div id="fixedPluginClasses" className={props.fixedClasses}>
        <div onClick={handleClick}>
          <i className="fa fa-cog fa-2x" />
        </div>
        <ul className="dropdown-menu">
          <li className="header-title">Sidebar Style Picker</li>
          <li className="adjustments-line">
            <StyleColorSelector
              handleColorClick={props.handleColorClick}
              bgColor={props.bgColor}
            />
          </li>
          <li className="header-title">Background Image</li>
          <StyleBackgroundImageSelector
            handleImageClick={props.handleImageClick}
            bgImage={props.bgImage}
          />
          <li className="header-title">More Info</li>
          <MarketingButtons bgColor={props.bgColor}/>
          <li className="adjustments-line" />
        </ul>
      </div>
    </div>
  );
}

FixedPlugin.propTypes = {
  bgImage: PropTypes.string,
  handleFixedClick: PropTypes.func,
  rtlActive: PropTypes.bool,
  fixedClasses: PropTypes.string,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  handleColorClick: PropTypes.func,
  handleImageClick: PropTypes.func
};
