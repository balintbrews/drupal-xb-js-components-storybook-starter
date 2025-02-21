import { cva } from "class-variance-authority";

import Button from "./button";
import Heading from "./heading";

const backgroundVariants = cva("align-center px-8 py-24 lg:px-32 lg:py-32", {
  variants: {
    darkenImage: {
      false: null,
      true: "backdrop-brightness-75",
    },
  },
});

const heroVariants = cva(
  "mx-auto flex w-full max-w-[1360px] flex-col gap-8 sm:flex-row",
  {
    variants: {
      layout: {
        leftAligned: "items-start justify-between",
        centered: "flex-col items-center justify-center text-center",
      },
    },
    defaultVariants: {
      layout: "leftAligned",
    },
  },
);

const Hero = ({
  layout,
  preHeading,
  heading,
  headingSize = "Large",
  headingElement,
  textColor = "Dark",
  text,
  button1Label,
  button1Link,
  button1Style = "Solid",
  button2Label,
  button2Link,
  button2Style = "Outline",
  image,
  backgroundImage,
  darkenImage,
  // backgroundColor,
}) => {
  const getButtonVariant = (style) => {
    if (style === "Solid") {
      return "solid";
    }
    if (style === "Outline") {
      // @todo Return "outlineLight" if the hero has a dark background.
      return "outlineDark";
    }
    return "solid";
  };

  return (
    <div
      className="flex min-h-[672px] w-full justify-start bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={backgroundVariants({ darkenImage })}>
        <div className="flex h-full w-full items-center justify-center">
          <div className={heroVariants({ layout })}>
            <div
              className={`flex max-w-xl flex-col items-start justify-start gap-4 xl:max-w-lg ${layout === "centered" ? "items-center" : "items-start"}`}
            >
              <div className="mb-4">
                <Heading
                  heading={heading}
                  preHeading={preHeading}
                  headingSize={headingSize}
                  textColor={textColor}
                  headingElement={headingElement}
                />
              </div>

              {text && <p className="mb-4 text-lg text-slate-950">{text}</p>}
              <div className="flex gap-4">
                {button1Label && (
                  <Button
                    link={button1Link}
                    variant={getButtonVariant(button1Style)}
                  >
                    {button1Label}
                  </Button>
                )}
                {button2Label && (
                  <Button
                    link={button2Link}
                    variant={getButtonVariant(button2Style)}
                  >
                    {button2Label}
                  </Button>
                )}
              </div>
            </div>
            <div className="flex max-w-3xl">
              <img
                src={image}
                alt="Hero featured image"
                className="max-width-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
