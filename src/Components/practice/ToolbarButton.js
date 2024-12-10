import { Toolbar, ToolbarButton } from "@wordpress/components";
import { edit } from "@wordpress/icons";

function MyToolbar() {
  return (
    <Toolbar label="Options">
      <ToolbarButton
        icon={edit}
        label="Edit"
        onClick={() => alert("Editing")}
      />
    </Toolbar>
  );
}

export default MyToolbar;
