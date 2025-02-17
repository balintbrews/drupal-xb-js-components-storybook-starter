import { cva } from "class-variance-authority";

const containerVariants = cva("dark flex w-full flex-col", {
  variants: {
    layout: {
      "Left aligned": "",
      "Center aligned": "items-center",
    },
  },
});

const preHeadingVariants = cva("mb-4 text-lg font-bold", {
  variants: {
    textColor: {
      Dark: "text-primary",
      Light: "text-primary-light",
    },
  },
});

const headingVariants = cva("font-bold", {
  variants: {
    textColor: {
      Dark: "text-black",
      Light: "text-white",
    },
    headingSize: {
      Large: "text-6xl",
      Medium: "text-4xl",
      Small: "text-2xl",
    },
  },
});

const Heading = ({
  preHeading,
  heading,
  headingElement = "h2",
  layout = "Left aligned",
  headingSize = "Large",
  textColor = "Dark",
}) => {
  const Heading = headingElement;
  return (
    <div className={containerVariants({ layout })}>
      {preHeading && (
        <div className={preHeadingVariants({ textColor })}>{preHeading}</div>
      )}
      {heading && (
        <Heading className={headingVariants({ textColor, headingSize })}>
          {heading}
        </Heading>
      )}
    </div>
  );
};

export default Heading;
