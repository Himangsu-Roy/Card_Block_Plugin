// import React from "react";
// import { Button } from "@wordpress/components";

// const ButtonControl = ({
//   backgroundColor = "#FFFFFF",
//   color = "#FFA500",
//   fontSize = "16px",
//   fontWeight = "400",
//   lineHeight = "1.5",
//   letterSpacing = "0px",
//   fontFamily = "Arial, sans-serif",
//   margin = { top: "0px", right: "0px", bottom: "0px", left: "0px" },
//   padding = { top: "0px", right: "0px", bottom: "0px", left: "0px" },
//   children,
// }) => {
//   const buttonStyle = {
//     backgroundColor,
//     color,
//     fontSize,
//     fontWeight,
//     lineHeight,
//     letterSpacing,
//     fontFamily,
//     margin: `${margin.top} ${margin.right} ${margin.bottom} ${margin.left}`,
//     padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
//   };

//   return <Button style={buttonStyle}>{children || "Button"}</Button>;
// };

// export default ButtonControl;

// import React from "react";
// import { Button } from "@wordpress/components";

// const ButtonControl = ({
//   backgroundColor = "#FFFFFF",
//   color = "#FFA500",
//   fontSize = "16px",
//   fontWeight = "400",
//   lineHeight = "1.5",
//   letterSpacing = "0px",
//   fontFamily = "Arial, sans-serif",
//   margin = { top: "0px", right: "0px", bottom: "0px", left: "0px" },
//   padding = { top: "0px", right: "0px", bottom: "0px", left: "0px" },
//   children,
// }) => {
//   const buttonStyle = {
//     backgroundColor,
//     color,
//     fontSize,
//     fontWeight,
//     lineHeight,
//     letterSpacing,
//     fontFamily,
//     margin: `${margin.top} ${margin.right} ${margin.bottom} ${margin.left}`,
//     padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
//   };

//   return <Button style={buttonStyle}>{children || "Button"}</Button>;
// };

// export default ButtonControl;

// import React from "react";
// import { Button } from "@wordpress/components";

// const ButtonControl = ({ props, children }) => {
//   const buttonStyle = {
//     ...props,
//   };

//   return <Button style={buttonStyle}>{children || "Button"}</Button>;
// };

// export default ButtonControl;

import React from "react";
import { Button } from "@wordpress/components";

const ButtonControl = ({
  backgroundColor = "#FFFFFF",
  color = "#FFA500",
  fontSize = "16px",
  fontWeight = "400",
  lineHeight = "1.5",
  letterSpacing = "0px",
  fontFamily = "Arial, sans-serif",
  margin = { top: "0px", right: "0px", bottom: "0px", left: "0px" },
  padding = { top: "0px", right: "0px", bottom: "0px", left: "0px" },
  borderRadius = { top: "0px", right: "0px", bottom: "0px", left: "0px" },
  children,
}) => {
  const buttonStyle = {
    backgroundColor,
    color,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    fontFamily,
    margin: `${margin.top} ${margin.right} ${margin.bottom} ${margin.left}`,
    padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
    borderRadius: `${borderRadius.top} ${borderRadius.right} ${borderRadius.bottom} ${borderRadius.left}`,
  };

  return <Button style={buttonStyle}>{children || "Button"}</Button>;
};

export default ButtonControl;
