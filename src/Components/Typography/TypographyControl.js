import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  SelectControl,
  __experimentalUnitControl as UnitControl,
  FontSizePicker,
} from "@wordpress/components";

export default function TypographyControl({ attributes, setAttributes }) {
  const { fontSize, fontWeight, lineHeight, letterSpacing, fontFamily } =
    attributes;

  return (
    <PanelBody
      title={__("Typography Settings", "text-domain")}
      initialOpen={true}
    >
      {/* Font Size Control */}
      <FontSizePicker
        value={fontSize}
        onChange={(newSize) => setAttributes({ fontSize: newSize })}
      />

      {/* Font Weight Control */}
      <SelectControl
        label={__("Font Weight", "text-domain")}
        value={fontWeight}
        options={[
          { label: "Normal", value: "400" },
          { label: "Bold", value: "700" },
          { label: "Light", value: "300" },
        ]}
        onChange={(newWeight) => setAttributes({ fontWeight: newWeight })}
      />

      {/* Line Height Control */}
      <UnitControl
        label={__("Line Height", "text-domain")}
        value={lineHeight}
        onChange={(newLineHeight) =>
          setAttributes({ lineHeight: newLineHeight })
        }
      />

      {/* Letter Spacing Control */}
      <UnitControl
        label={__("Letter Spacing", "text-domain")}
        value={letterSpacing}
        onChange={(newLetterSpacing) =>
          setAttributes({ letterSpacing: newLetterSpacing })
        }
      />

      {/* Font Family Control */}
      <SelectControl
        label={__("Font Family", "text-domain")}
        value={fontFamily}
        options={[
          { label: "Arial", value: "Arial, sans-serif" },
          { label: "Georgia", value: "Georgia, serif" },
          { label: "Times New Roman", value: '"Times New Roman", serif' },
          { label: "Courier New", value: '"Courier New", monospace' },
        ]}
        onChange={(newFamily) => setAttributes({ fontFamily: newFamily })}
      />
    </PanelBody>
  );
}
