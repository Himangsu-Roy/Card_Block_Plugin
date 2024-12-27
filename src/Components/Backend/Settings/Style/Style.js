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
  SelectControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { ColorPalette } from "@wordpress/editor";
import TypographyControl from "../../../Typography/TypographyControl";

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
    imageBorderStyle,
    imageBorderWidth,
    imageBorderColor,
    imageBorderRadius,
    categoryBackgroundColor,
    categoryButtoncolor,
    categoryButtonFontSize,
    categoryButtonFontWeight,
    categoryButtonLineHeight,
    categoryButtonLetterSpacing,
    categoryButtonFontFamily,
    categoryButtonMargin,
    categoryButtonPadding,
    categoryButtonRadius,
  } = attributes;

  console.log(
    categoryBackgroundColor,
    categoryButtoncolor,
    categoryButtonFontSize,
    categoryButtonFontWeight,
    categoryButtonLineHeight,
    categoryButtonLetterSpacing,
    categoryButtonFontFamily,
    categoryButtonMargin,
    categoryButtonPadding,
    categoryButtonRadius
  );

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
        title={__("Card Border Radius", "b-blocks")}
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

      {/* Border Style Control */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Image Border Style", "b-blocks")}
        initialOpen={false}
      >
        <SelectControl
          label={__("Border Style", "b-blocks")}
          value={imageBorderStyle}
          options={[
            { label: "Solid", value: "solid" },
            { label: "Dashed", value: "dashed" },
            { label: "Dotted", value: "dotted" },
            { label: "Double", value: "double" },
            { label: "None", value: "none" },
          ]}
          onChange={(newStyle) => setAttributes({ imageBorderStyle: newStyle })}
        />

        {/* Border Width Control */}
        <UnitControl
          label={__("Border Width", "b-blocks")}
          value={imageBorderWidth}
          onChange={(newWidth) => setAttributes({ imageBorderWidth: newWidth })}
        />

        {/* Border Color Control */}
        <ColorPicker
          label={__("Border Color", "b-blocks")}
          color={imageBorderColor}
          onChange={(newColor) => setAttributes({ imageBorderColor: newColor })}
          enableAlpha
        />

        {/* Border Radius Control */}
        <UnitControl
          label={__("Border Radius", "b-blocks")}
          value={imageBorderRadius}
          onChange={(newRadius) =>
            setAttributes({ imageBorderRadius: newRadius })
          }
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Title Typography", "b-blocks")}
        initialOpen={false}
      >
        <TypographyControl
          attributes={attributes}
          setAttributes={setAttributes}
        />
      </PanelBody>

      {/* Category Buttons */}
      {/* <PanelBody
        className="bPlPanelBody"
        title={__("Category Buttons Style", "b-blocks")}
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
        <TypographyControl
          attributes={attributes}
          setAttributes={setAttributes}
        />
      </PanelBody> */}

      {/* Category Button Styles */}
      <PanelBody
        title={__("Category Button Styling", "b-blocks")}
        className="bPlPanelBody"
        initialOpen={false}
      >
        <p>
          <strong>Background Color</strong>
        </p>
        <ColorPicker
          label={__("Background Color", "b-blocks")}
          color={categoryBackgroundColor}
          onChange={(value) =>
            setAttributes({ categoryBackgroundColor: value })
          }
        />
        <p>
          <strong>Text Color</strong>
        </p>
        <ColorPicker
          label={__("Text Color", "b-blocks")}
          color={categoryButtoncolor}
          onChange={(value) => setAttributes({ categoryButtoncolor: value })}
        />
        <BoxControl
          label={__("Border Radius", "b-blocks")}
          values={categoryButtonRadius}
          onChange={(newValue) =>
            setAttributes({
              categoryButtonRadius: newValue,
            })
          }
        />
        <RangeControl
          label={__("Font Size", "b-blocks")}
          value={parseInt(categoryButtonFontSize, 10)}
          onChange={(value) =>
            setAttributes({ categoryButtonFontSize: `${value}px` })
          }
          min={10}
          max={50}
        />
        <TextControl
          label={__("Font Weight", "b-blocks")}
          value={categoryButtonFontWeight}
          onChange={(value) =>
            setAttributes({ categoryButtonFontWeight: value })
          }
        />
        <TextControl
          label={__("Font Family", "b-blocks")}
          value={categoryButtonFontFamily}
          onChange={(value) =>
            setAttributes({ categoryButtonFontFamily: value })
          }
        />
        <RangeControl
          label={__("Line Height", "b-blocks")}
          value={parseFloat(categoryButtonLineHeight)}
          onChange={(value) =>
            setAttributes({ categoryButtonLineHeight: value.toString() })
          }
          min={1}
          max={3}
          step={0.1}
        />
        <TextControl
          label={__("Letter Spacing (px)", "b-blocks")}
          value={categoryButtonLetterSpacing}
          onChange={(value) =>
            setAttributes({ categoryButtonLetterSpacing: value })
          }
        />

        {/* <TextControl
          label={__("Margin", "b-blocks")}
          value={attributes.margin.top}
          onChange={(value) =>
            setAttributes({ margin: { ...attributes.margin, top: value } })
          }
        />
        <TextControl
          label={__("Padding", "b-blocks")}
          value={attributes.padding.top}
          onChange={(value) =>
            setAttributes({ padding: { ...attributes.padding, top: value } })
          }
        /> */}

        <BoxControl
          label="Padding"
          values={categoryButtonPadding}
          onChange={(newPadding) =>
            setAttributes({ categoryButtonPadding: newPadding })
          }
        />
        <BoxControl
          label="Margin"
          values={categoryButtonMargin}
          onChange={(newMargin) =>
            setAttributes({ categoryButtonMargin: newMargin })
          }
        />
      </PanelBody>
      {/* <PanelBody title={__("Spacing", "b-blocks")} initialOpen={false}>
        <TextControl
          label={__("Margin (Top)", "b-blocks")}
          value={attributes.margin.top}
          onChange={(value) =>
            setAttributes({ margin: { ...attributes.margin, top: value } })
          }
        />
        <TextControl
          label={__("Padding (Top)", "b-blocks")}
          value={attributes.padding.top}
          onChange={(value) =>
            setAttributes({ padding: { ...attributes.padding, top: value } })
          }
        />
        
      </PanelBody> */}
    </>
  );
};

export default Style;
