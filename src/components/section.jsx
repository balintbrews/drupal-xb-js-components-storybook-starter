import { cva } from "class-variance-authority";

const sectionVariants = cva("m-auto", {
  variants: {
    width: {
      Normal: "max-w-2xl",
      Wide: "max-w-4xl",
    },
  },
});

const Section = ({ width = "Normal", children }) => {
  return <div className={sectionVariants({ width })}>{children}</div>;
};

export default Section;
