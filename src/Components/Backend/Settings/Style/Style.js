import { __ } from "@wordpress/i18n";
import {
  __experimentalGrid as Grid,
  __experimentalText as Text,
  GradientPicker,
  FontSizePicker,
  FocusableIframe,
  FocalPointPicker,
  Flex,
  FlexBlock,
  FlexItem,
  __experimentalDimensionControl as DimensionControl,
  ComboboxControl,
  __experimentalBoxControl as BoxControl,
  __experimentalBorderControl as BorderControl,
  __experimentalBorderBoxControl as BorderBoxControl,
  PanelBody,
  __experimentalAlignmentMatrixControl as AlignmentMatrixControl,
  AnglePickerControl,
  Animate,
  Notice,
  __experimentalUnitControl as UnitControl,
  ColorPicker,
  RangeControl,
  TextControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { ColorPalette } from "@wordpress/editor";

const colors = [{ name: "Blue 20", color: "#72aee6" }];

const options = [
  {
    value: "small",
    label: "Small",
  },
  {
    value: "normal",
    label: "Normal",
  },
  {
    value: "large",
    label: "Large",
  },
];

// Font Size Picker
const fontSizes = [
  {
    name: __("Small"),
    slug: "small",
    size: 12,
  },
  {
    name: __("Big"),
    slug: "big",
    size: 26,
  },
];
const fallbackFontSize = 16;

const Style = ({ attributes, setAttributes }) => {
  const [alignment, setAlignment] = useState("center center");
  const [angle, setAngle] = useState(0);
  const [border, setBorder] = useState();
  const [values, setValues] = useState({
    top: "50px",
    left: "10%",
    right: "10%",
    bottom: "50px",
  });

  const {
    buttonColor,
    categoryButtonColor,
    width,
    height,
    widthUnit,
    heightUnit,
    borderRadius,
    bgColor,
    padding,
    margin,
    boxShadow,
    imageWidth,
    imageHeight,
    imageWidthUnit,
    imageHeightUnit,
  } = attributes;

  const [fontSize, setFontSize] = useState();
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [paddingSize, setPaddingSize] = useState("");

  const defaultBorder = {
    color: "#72aee6",
    style: "dashed",
    width: "1px",
  };

  const [borders, setBorders] = useState({
    top: defaultBorder,
    right: defaultBorder,
    bottom: defaultBorder,
    left: defaultBorder,
  });
  const onChange = (newBorders) => setBorders(newBorders);

  // Font Size Picker
  const [fontSizePic, setFontSizePic] = useState(12);

  function onButtonColorChange(newColor) {
    setAttributes({ buttonColor: newColor });
  }
  function onCategorysButtonColorChange(newColor) {
    setAttributes({ categoryButtonColor: newColor });
  }

  const updateBoxShadow = (key, value) => {
    setAttributes({
      boxShadow: {
        ...boxShadow,
        [key]: value,
      },
    });
  };

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Button Color", "b-blocks")}
        initialOpen={false}
      >
        <p>
          <strong>Choose Your Button Color</strong>
        </p>
        <div style={{ marginTop: "20px", marginBottom: "40px" }}>
          <ColorPalette
            value={attributes.buttonColor}
            onChange={onButtonColorChange}
          />
        </div>
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Category Background", "b-blocks")}
        initialOpen={false}
      >
        <ColorPalette
          value={attributes.categoryButtonColor}
          onChange={onCategorysButtonColorChange}
        />
      </PanelBody>
      {/* Card Width Height */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Card Width and Height", "b-blocks")}
        initialOpen={false}
      >
        <UnitControl
          onChange={(newWidth) => setAttributes({ width: newWidth })}
          onUnitChange={(newUnit) => setAttributes({ widthUnit: newUnit })}
          label="Width"
          isUnitSelectTabbable
          value={`${width}${widthUnit}`}
        />
        {/* <UnitControl
          onChange={(newWidth) => setAttributes({ height: newWidth })}
          onUnitChange={(newUnit) => setAttributes({ heightUnit: newUnit })}
          label="Height"
          isUnitSelectTabbable
          value={`${height}${heightUnit}`}
        /> */}
      </PanelBody>
      {/* Background width and Height */}
      {/* <PanelBody
        className="bPlPanelBody"
        title={__("Background Width and Height", "b-blocks")}
        initialOpen={false}
      >
        <UnitControl
          onChange={(newWidth) => setAttributes({ width: newWidth })}
          onUnitChange={(newUnit) => setAttributes({ widthUnit: newUnit })}
          label="Width"
          isUnitSelectTabbable
          value={`${width}${widthUnit}`}
        />
        <UnitControl
          onChange={(newWidth) => setAttributes({ height: newWidth })}
          onUnitChange={(newUnit) => setAttributes({ heightUnit: newUnit })}
          label="Height"
          isUnitSelectTabbable
          value={`${height}${heightUnit}`}
        />
      </PanelBody> */}
      {/* Card Border Radius */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Border Radius", "b-blocks")}
        initialOpen={false}
      >
        <BoxControl
          values={borderRadius}
          onChange={(newValue) =>
            setAttributes({
              borderRadius: newValue,
            })
          }
        />
      </PanelBody>
      {/* Bg Color */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Card Background Color", "b-blocks")}
        initialOpen={false}
      >
        <ColorPicker
          onChange={(newColor) => setAttributes({ bgColor: newColor })}
        />
      </PanelBody>
      {/* Padding and Margin */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Card Padding and Margin", "b-blocks")}
        initialOpen={false}
      >
        <BoxControl
          label="Padding"
          values={padding}
          onChange={(newPadding) => setAttributes({ padding: newPadding })}
        />
        <BoxControl
          label="Margin"
          values={margin}
          onChange={(newMargin) => setAttributes({ margin: newMargin })}
        />
      </PanelBody>
      {/* Box Shadow */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Box Shadow", "b-blocks")}
        initialOpen={false}
      >
        <RangeControl
          label="Horizontal Offset"
          value={parseInt(boxShadow.horizontal, 10)}
          onChange={(value) => updateBoxShadow("horizontal", `${value}px`)}
          min={-50}
          max={50}
        />
        <RangeControl
          label="Vertical Offset"
          value={parseInt(boxShadow.vertical, 10)}
          onChange={(value) => updateBoxShadow("vertical", `${value}px`)}
          min={-50}
          max={50}
        />
        <RangeControl
          label="Blur Radius"
          value={parseInt(boxShadow.blur, 10)}
          onChange={(value) => updateBoxShadow("blur", `${value}px`)}
          min={0}
          max={50}
        />
        <RangeControl
          label="Spread Radius"
          value={parseInt(boxShadow.spread, 10)}
          onChange={(value) => updateBoxShadow("spread", `${value}px`)}
          min={-50}
          max={50}
        />
        <TextControl
          label="Shadow Color"
          value={boxShadow.color}
          onChange={(value) => updateBoxShadow("color", value)}
        />
      </PanelBody>
      {/* Card Image Width Height */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Card Image Width and Height", "b-blocks")}
        initialOpen={false}
      >
        <UnitControl
          onChange={(newImageWidth) =>
            setAttributes({ imageWidth: newImageWidth })
          }
          onUnitChange={(newUnit) => setAttributes({ widthUnit: newUnit })}
          label="Width"
          isUnitSelectTabbable
          value={`${imageWidth}${imageWidthUnit}`}
        />
        <UnitControl
          onChange={(newImageHeight) =>
            setAttributes({ imageHeight: newImageHeight })
          }
          onUnitChange={(newUnit) =>
            setAttributes({ imageHeightUnit: newUnit })
          }
          label="Height"
          isUnitSelectTabbable
          value={`${imageHeight}${imageHeightUnit}`}
        />
      </PanelBody>
    </>
  );
};

export default Style;
