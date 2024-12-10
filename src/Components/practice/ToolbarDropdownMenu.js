import { Toolbar, ToolbarDropdownMenu } from "@wordpress/components";
import {
  more,
  arrowLeft,
  arrowRight,
  arrowUp,
  arrowDown,
} from "@wordpress/icons";

function MyToolbarDropdownMenu() {
  return (
    <Toolbar label="Options">
      <ToolbarDropdownMenu
        icon={more}
        label="Select a direction"
        controls={[
          {
            title: "Up",
            icon: arrowUp,
            onClick: () => console.log("up"),
          },
          {
            title: "Right",
            icon: arrowRight,
            onClick: () => console.log("right"),
          },
          {
            title: "Down",
            icon: arrowDown,
            onClick: () => console.log("down"),
          },
          {
            title: "Left",
            icon: arrowLeft,
            onClick: () => console.log("left"),
          },
        ]}
      />
    </Toolbar>
  );
}

export default MyToolbarDropdownMenu;