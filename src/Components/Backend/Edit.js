import { useBlockProps, RichText } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import { Button } from "@wordpress/components";

import {
  Card,
  CardHeader,
  CardBody,
  CardDivider,
  CardMedia,
  CardFooter,
  ResponsiveWrapper,
  __experimentalInputControl as InputControl,
  FormTokenField,
  Placeholder,
  IconButton,
} from "@wordpress/components";
import MyOptionsTokenField from "../options/options";
import { MediaUpload } from "@wordpress/block-editor";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const categories = ["sugar", "vanilla aroma", "cherry jam"];

  function onSelectImage(newImage) {
    setAttributes({ image: newImage.sizes.full.url });
  }

  const { horizontal, vertical, blur, spread, color } = attributes.boxShadow;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />
      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <div className="bBlocksCard">
          <div
            style={{
              boxShadow: `${horizontal} ${vertical} ${blur} ${spread} ${color}`,
            }}
            className="card"
          >
            {attributes.image === null ? (
              <Placeholder
                icon="arrowDown"
                label="Image"
                instructions="Select an image to remove this placeholder"
                isColumnLayout //element is flex if this is not used
              >
                <div
                  style={{
                    backgroundColor: "#e7e7e7",
                    padding: "56px 64px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
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
                </div>
              </Placeholder>
            ) : (
              <ResponsiveWrapper>
                <img src={attributes.image} alt="WordPress" />
              </ResponsiveWrapper>
            )}

            <RichText
              key="editable"
              tagName="p"
              placeholder=""
              value={attributes.productTitle}
              onChange=""
              className="title"
            />

            <RichText
              key="editable"
              tagName="p"
              placeholder=""
              value={attributes.productDescription}
              onChange=""
              className="description"
            />
            {/* <MyOptionsTokenField /> */}

            {attributes.categoryButtons.map((category) => (
              <Button
                // style={{ backgroundColor: attributes.categoryButtonColor }}
                className="categoryButtons"
                key={category.value}
              >
                {category.value}
              </Button>
            ))}

            <div className="bottom-components">
              <RichText
                key="editable"
                tagName="p"
                placeholder=""
                value={`$${attributes.productPrice}`}
                onChange=""
                className="price"
              />
              <Button
                // style={{ backgroundColor: attributes.buttonColor }}
                className="button"
              >
                {attributes.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Edit;
