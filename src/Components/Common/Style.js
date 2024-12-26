const Style = ({ attributes, id }) => {
  const { buttonColor, categoriesButtonColor } = attributes;

  const mainSl = `#${id}`;

  const card = `${mainSl} .card `;
  const cardImageWidth = `${card} img`;
  const cardImageHeight = `${card} img`;
  const cardShadow = `${mainSl} .card `;
  const cardWidth = `${mainSl} .card `;
  const cardHeight = `${cardWidth} .card `;
  const cardBorderRadius = `${mainSl} .card `;
  const cardBg = `${mainSl} .card `;
  const cardPadding = `${mainSl} .card `;
  const cardMargin = `${mainSl} .card `;
  const buyNowButtonColor = `${mainSl} .button `;
  const categoriesBgButtonColor = `${mainSl} .categoryButtons `;

  //   console.log(blockSl);
  //   ${blockSl} p{
  //   	${getColorsCSS(colors)}
  //   }

  // .button{
  //    background: ${buttonColor}
  // }

  console.log("shadow value", attributes.imageWidth);

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		
		   ${buyNowButtonColor}{
	 		background: ${buttonColor}
  			}

		   ${categoriesBgButtonColor}{
			background: ${attributes.categoryButtonColor}
	  		}
		
  		${cardWidth}{
			width: ${attributes.width}
	  		}
  		${cardImageWidth}{
			width: ${attributes.imageWidth}
	  		}
  		${cardHeight}{
			height: ${attributes.height}
	  		}
  		${cardImageHeight}{
			height: ${attributes.imageHeight}
	  		}

        ${cardBorderRadius} {
        border-radius: ${attributes.borderRadius.top} ${attributes.borderRadius.right} ${attributes.borderRadius.bottom} ${attributes.borderRadius.left} 
        }
        ${cardBg} {
        background-color: ${attributes.bgColor}
        }
        ${cardPadding} {
        padding: ${attributes.padding.top} ${attributes.padding.right} ${attributes.padding.bottom} ${attributes.padding.left}
        }
        ${cardMargin} {
        margin: ${attributes.margin.top} ${attributes.margin.right} ${attributes.margin.bottom} ${attributes.margin.left}
        }
        ${cardShadow} {
         box-shadow: ${attributes.boxShadow.horizontal} ${attributes.boxShadow.vertical} ${attributes.boxShadow.blur} ${attributes.boxShadow.spread} ${attributes.boxShadow.color},
        }
 
	`,
      }}
    />
  );
};
export default Style;
