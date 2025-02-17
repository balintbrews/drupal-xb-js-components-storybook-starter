import { cva } from "class-variance-authority";

import { cn } from "../lib/utils.js";
import Heading from "./heading.jsx";

const gridVariants = cva("grid gap-4", {
  variants: {
    cardLayout: {
      // "3 column": "auto-cols-[minmax(0,3fr)]",
      // "4 column": "auto-cols-[minmax(0,4fr)]",
    },
  },
});

const CardContainer = ({
  layout,
  preHeading,
  heading,
  headingSize = "Medium",
  headingLevel,
  textColor,
  //backgroundColor,
  cardLayout,
  children,
}) => {
  return (
    <div>
      <Heading
        layout={layout}
        preHeading={preHeading}
        heading={heading}
        headingSize={headingSize}
        headingLevel={headingLevel}
        textColor={textColor}
      />
      <div className={cn(gridVariants({ cardLayout }))}>{children}</div>
    </div>
  );
};

export default CardContainer;
