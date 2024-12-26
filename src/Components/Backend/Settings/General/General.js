import { __ } from "@wordpress/i18n";
import React from "react";

import {
  withNotices,
  withFocusReturn,
  withFocusOutside,
  withFallbackStyles,
  withConstrainedTabbing,
  navigateRegions,
  __experimentalSpacer as Spacer,
  __experimentalHStack as HStack,
  FormTokenField,
  FormToggle,
  FormFileUpload,
  ExternalLink,
  __experimentalElevation as Elevation,
  __experimentalSurface as Surface,
  DuotonePicker,
  DuotoneSwatch,
  Dropdown,
  DropdownMenu,
  DropZone,
  Draggable,
  Panel,
  __experimentalDivider as Divider,
  __experimentalVStack as VStack,
  Disabled,
  TextControl,
  DateTimePicker,
  Dashicon,
  __experimentalFlyout as Flyout,
  CustomSelectControl,
  __experimentalConfirmDialog as ConfirmDialog,
  __unstableComposite as Composite,
  ColorPicker,
  ColorPalette,
  ColorIndicator,
  ClipboardButton,
  CircularOptionPicker,
  CheckboxControl,
  __experimentalHeading as Heading,
  __experimentalText as Text,
  CardMedia,
  CardHeader,
  FlexBlock,
  FlexItem,
  CardFooter,
  CardBody,
  CardDivider,
  Card,
  ButtonGroup,
  BaseControl,
  PanelBody,
  SelectControl,
  __experimentalInputControl as InputControl,
  Button,
  Guide,
  TextareaControl,
  PanelRow,
  IconButton,
} from "@wordpress/components";

import { MediaUpload } from "@wordpress/block-editor";
import { button, wordpress } from "@wordpress/icons";

import { purposeTypeOptions } from "../../../../utils/options";
import { updateData } from "../../../../utils/functions";
import { useState } from "@wordpress/element";
import {
  Icon,
  more,
  arrowLeft,
  arrowRight,
  arrowUp,
  arrowDown,
} from "@wordpress/icons";
import MyComponentWithSpokenMessages from "../../../practice/skopenMessages";
// import MyModal from '../../../practice/Modal';
import MyItemGroup from "../../../practice/ItemGroup";
import MyKeyboardShortcut from "../../../practice/KeyboardShortcut";
import MyMenuGroup from "../../../practice/MyMenuGroup";
import MyMenuItem from "../../../practice/MyMenuItem";
import MyMenuItemsChoice from "../../../practice/MyMenuItemsChoice";
import MyModal from "../../../practice/MyModal";
import MyNavigableContainer from "../../../practice/MyNavigableContainer ";
import MyNavigation from "../../../practice/MyNavigation";
import MyNavigator from "../../../practice/MyNavigator";
import MyNotice from "../../../practice/MyNotice";
import MyNumberControl from "../../../practice/MyNumberControl";
import MyPanel from "../../../practice/MyPanel";
import MyPlaceholder from "../../../practice/MyPlacehoder";
import MyPopover from "../../../practice/MyPopover";
import MyLoadingComponent from "../../../practice/MyLoadingComponent";
import MyQueryControls from "../../../practice/MyQueryControls";
import MyRadioControl from "../../../practice/MyRadioControl";
import MyControlledRadioRadioGroup from "../../../practice/MyControlledRadioRadioGroup";
import MyRangeControl from "../../../practice/MyRangeControl";
import Edit from "../../../practice/ResizableBox";
import ResizeTooltip from "../../../practice/ResizeTooltip";
import MyResponsiveWrapper from "../../../practice/ResponsiveWrapper";
import MySandBox from "../../../practice/Sandbox";
import MyScrollLock from "../../../practice/ScrollLock";
import MySearchControl from "../../../practice/SearchControl";
import MySelectControl from "../../../practice/SelectControl";
import MySlotFillProvider from "../../../practice/SlotFill";
import MySnackbarNotice from "../../../practice/Snackbar";
import Example from "../../../practice/Spacer";
import MySpiner from "../../../practice/Spinner";
import MySurface from "../../../practice/Surface";
import MyTabPanel from "../../../practice/TabPanel";
import MyTextControl from "../../../practice/TextControl";
import MyTextHighlight from "../../../practice/TextHighlight";
import MyTextareaControl from "../../../practice/TextareaControl";
import MyToggleControl from "../../../practice/ToggleControl";
import MyToggleGroupControlOptionIcon from "../../../practice/ToggleGroupControlOptionIcon";
import MyToggleGroupControlOption from "../../../practice/ToggleGroupControlOption";
import MyToggleGroupControl from "../../../practice/ToggleGroupControl";
import MyToolbar from "../../../practice/ToolbarButton";
import MyToolbarDropdownMenu from "../../../practice/ToolbarDropdownMenu";
import MyToolbarGroup from "../../../practice/ToolbarGroup";
import MyToolbarItem from "../../../practice/ToolbarItem";
import MyToolbars from "../../../practice/Toolbars";
import DimensionPanel from "../../../practice/ToolsPanel";
import MyTooltip from "../../../practice/Tooltip";
import TreeMenu from "../../../practice/TreeGrid";
import MyTreeSelect from "../../../practice/TreeSelect";
import MyTruncate from "../../../practice/Truncate";
import MyUnitControl from "../../../practice/UnitControl";
import VerticalStack from "../../../practice/VStack";
import MediaUploader from "../../../practice/MediaUploadCheck";
import MyUsefulTextControl from "../../../UsefulComponents/MyUsefulTextControl";
import MyUsefulTextareaControl from "../../../UsefulComponents/MyUsefulTextareaControl";
import MyUsefulNumberControl from "../../../UsefulComponents/MyUsefulNumberControl";
import MyUsefulRangeControl from "../../../UsefulComponents/MyUsefulRangeControl";
import MyUsefulToggleControl from "../../../UsefulComponents/MyUsefulToggleControl";
import MyUsefulCustomSelectControl from "../../../UsefulComponents/MyUsefulCustomSelectControl";
import MyUsefulControlledCustomSelectControl from "../../../UsefulComponents/MyUsefulCustomSelectControl";
import MyUsefulSelectControl from "../../../UsefulComponents/MyUsefulSelectControl";

const options = [
  {
    key: "small",
    name: "Small",
    style: { fontSize: "50%" },
  },
  {
    key: "normal",
    name: "Normal",
    style: { fontSize: "100%" },
  },
  {
    key: "large",
    name: "Large",
    style: { fontSize: "200%" },
  },
  {
    key: "huge",
    name: "Huge",
    style: { fontSize: "300%" },
  },
];

const DUOTONE_PALETTE = [
  {
    colors: ["#8c00b7", "#fcff41"],
    name: "Purple and yellow",
    slug: "purple-yellow",
  },
  { colors: ["#000097", "#ff4747"], name: "Blue and red", slug: "blue-red" },
];

const COLOR_PALETTE = [
  { color: "#ff4747", name: "Red", slug: "red" },
  { color: "#fcff41", name: "Yellow", slug: "yellow" },
  { color: "#000097", name: "Blue", slug: "blue" },
  { color: "#8c00b7", name: "Purple", slug: "purple" },
];

// Form Token Field
const continents = [
  "Africa",
  "America",
  "Antarctica",
  "Asia",
  "Europe",
  "Oceania",
];

// With Constrained Tabbing
const ConstrainedTabbing = withConstrainedTabbing(({ children }) => children);

// Fallback Styles
const { getComputedStyle } = window;

// Focus Return
const EnhancedComponent = withFocusReturn(() => (
  <div>
    Focus will return to the previous input when this component is unmounted
    <TextControl
      __nextHasNoMarginBottom
      __next40pxDefaultSize
      autoFocus={true}
      onChange={(fr) => {
        console.log(fr);
      }}
    />
  </div>
));

const General = ({
  attributes,
  setAttributes,
  fallbackTextColor,
  fallbackBackgroundColor,
}) => {
  const {
    purposeType,
    productPrice,
    productTitle,
    productDescription,
    buttonText,
  } = attributes;
  const [click, setClick] = useState(0);
  const [isChecked, setChecked] = useState(true);
  const [currentColor, setCurrentColor] = useState();
  const [hasCopied, setHasCopied] = useState(false);
  const [color, setColor] = useState("#f00");
  const [colorPic, setColorPic] = useState();
  // const [fontSize, setFontSize] = useState();
  const [fontSize, setFontSize] = useState(options[0]);
  const [date, setDate] = useState(new Date());
  const [hasDropped, setHasDropped] = useState(false);
  const [duotone, setDuotone] = useState(["#000000", "#ffffff"]);

  const [isDisabled, setIsDisabled] = useState(true);
  // Form Token Field
  const [selectedContinents, setSelectedContinents] = useState([]);

  // Form Toggle
  // const [ isChecked, setChecked ] = useState( true );
  // Guide
  // const [isOpen, setIsOpen] = useState(true);

  let input = (
    <TextControl
      __next40pxDefaultSize
      __nextHasNoMarginBottom
      label="Input"
      onChange={() => {}}
    />
  );

  if (isDisabled) {
    input = <Disabled>{input}</Disabled>;
  }

  const toggleDisabled = () => {
    setIsDisabled((state) => !state);
  };

  // const colors = [
  //   { color: '#f00', name: 'Red' },
  //   { color: '#0f0', name: 'Green' },
  //   { color: '#00f', name: 'Blue' },
  // ];

  const colors = [
    { name: "red", color: "#f00" },
    { name: "white", color: "#fff" },
    { name: "blue", color: "#00f" },
  ];

  // const colorOptions = (
  //   <>
  //     {colors.map(({ color, name }, index) => {
  //       return (
  //         <CircularOptionPicker.Option
  //           key={`${color}-${index}`}
  //           tooltipText={name}
  //           style={{ backgroundColor: color, color }}
  //           isSelected={index === currentColor}
  //           onClick={() => setCurrentColor(index)}
  //           aria-label={name}
  //         />
  //       );
  //     })}
  //   </>
  // );

  const handleClick = () => {
    setClick((preCount) => preCount + 1);
    console.log("Button clicked", click + 1);
  };

  const [isOpen, setIsOpen] = useState(true);

  const handleConfirm = () => {
    console.log("Confirmed!");
    setIsOpen(false);
  };

  const handleCancel = () => {
    console.log("Cancelled!");
    setIsOpen(false);
  };

  // Guide
  // if (!isOpen) {
  //   return null
  // }

  // Constrained Tabbing
  const [isConstrainedTabbing, setIsConstrainedTabbing] = useState(false);
  let form = (
    <form>
      <TextControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        label="Input 1"
        onChange={() => {}}
      />
      <TextControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        label="Input 2"
        onChange={() => {}}
      />
    </form>
  );
  if (isConstrainedTabbing) {
    form = <ConstrainedTabbing>{form}</ConstrainedTabbing>;
  }

  const toggleConstrain = () => {
    setIsConstrainedTabbing((state) => !state);
  };

  //
  const MyComponentWithFocusOutside = withFocusOutside(
    class extends React.Component {
      handleFocusOutside() {
        console.log("Focus outside");
      }

      // render() {
      //   return (
      //     <div>
      //       <TextControl onChange={() => { }} />
      //       <TextControl onChange={() => { }} />
      //     </div>
      //   );
      // }
    }
  );

  console.log(MyComponentWithFocusOutside);

  // Focus Return
  const [text, setText] = useState("");
  const unmount = () => {
    document.activeElement.blur();
    setText("");
  };

  // console.log(purposeType)
  // console.log(click);
  // console.log(isChecked)
  // console.log(hasCopied)
  // console.log(color);
  // console.log(colorPic);
  // console.log(fontSize);
  // console.log(date);
  console.log(isDisabled);
  console.log(hasDropped);
  console.log(duotone);
  // Form Toggle
  console.log(isChecked);
  // Form Token Field
  console.log(selectedContinents);
  // Guide
  console.log(isOpen);
  // Contrained Tabbing
  console.log(isConstrainedTabbing);

  function onSelectImage(newImage) {
    setAttributes({ image: newImage.sizes.full.url });
    console.log(newImage.sizes.full.url);
  }

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Purpose", "b-blocks")}
        initialOpen={false}
      >
        {/* <PanelRow>My Panel Inputs and Labels</PanelRow> */}
        {/* <MyPanel /> */}
        {/* <SelectControl
        label={__("Purpose", "b-blocks")}
        labelPosition="left"
        value={purposeType}
        options={purposeTypeOptions}
        onChange={(v) =>
          setAttributes({ purposeType: updateData(purposeType, v) })
        }
      /> */}
        {/* <small className="selectHelp">
        If you want change your purpose?Then you select purpose here.
      </small> */}
        {/* Constrain  Tabbing */}
        {/* <div>
        {form}
        <Button variant="secondary" onClick={toggleConstrain}>
          {isConstrainedTabbing ? "Disable" : "Enable"} constrain tabbing
        </Button>
      </div> */}
        {/* Fallback Styles */}
        {/* <div>
        <Button variant="primary">My button</Button>
        <div>Text color: {fallbackTextColor}</div>
        <div>Background color: {fallbackBackgroundColor}</div>
      </div> */}
        {/* Focus Return */}
        {/* <div>
        <TextControl
          __nextHasNoMarginBottom
          __next40pxDefaultSize
          placeholder="Type something"
          value={text}
          onChange={(value) => setText(value)}
        />
        {text && <EnhancedComponent />}
        {text && (
          <Button variant="secondary" onClick={unmount}>
            Unmount
          </Button>
        )}
      </div> */}
        <p>
          <strong>Select an Image:</strong>
        </p>
        <MediaUpload
          onSelect={onSelectImage}
          type="image"
          value={attributes.image}
          render={({ open }) => (
            <IconButton
              onClick={open}
              icon="upload"
              className="editor-media-placeholder_button is-button is-default is-large"
            >
              Select an Image
            </IconButton>
          )}
        />
        <Spacer />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Product Price", "b-blocks")}
        initialOpen={false}
      >
        <InputControl
          label="Product Price"
          labelPosition="top"
          value={productPrice}
          type="text"
          isPressEnterToChange
          onChange={(newPrice) => setAttributes({ productPrice: newPrice })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Title", "b-blocks")}
        initialOpen={false}
      >
        <InputControl
          label="Product Title"
          labelPosition="top"
          value={productTitle}
          type="text"
          isPressEnterToChange
          onChange={(newTitle) => setAttributes({ productTitle: newTitle })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Product Description", "b-blocks")}
        initialOpen={false}
      >
        <TextareaControl
          label="Product Description"
          rows={2}
          value={productDescription}
          onChange={(newDescription) =>
            setAttributes({ productDescription: newDescription })
          }
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Change Button Text", "b-blocks")}
        initialOpen={false}
      >
        <InputControl
          label="Button Name"
          labelPosition="top"
          value={buttonText}
          type="text"
          isPressEnterToChange
          onChange={(newButtonText) =>
            setAttributes({ buttonText: newButtonText })
          }
        />
      </PanelBody>
    </>
  );
};

export default General;
