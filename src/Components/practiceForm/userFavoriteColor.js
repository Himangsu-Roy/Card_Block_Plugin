import { useState } from "react";
import { ColorPicker } from "@wordpress/components";

function UserFavoriteColor() {
  const [color, setColor] = useState("#000000");
  console.log(color);
  return (
    <ColorPicker
      color={color}
      onChange={(colorValue) => setColor(colorValue)}
      enableAlpha
      defaultValue="#000"
    />
  );
}

export default UserFavoriteColor;
