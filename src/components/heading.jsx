const Heading = ({
  preHeading,
  heading,
  headingElement = "h2",
  layout = "Left aligned",
  textColor = "Dark",
}) => {
  const Heading = headingElement;
  const colors = {
    headingText: {
      Dark: "text-slate-950",
      Light: "text-white",
    },
    preHeadingText: {
      Dark: "text-blue-700",
      Light: "text-blue-300",
    },
  };

  return (
    <div
      className={`flex w-full flex-col ${layout === "Center aligned" ? "text-center" : ""}`}
    >
      <div
        className={`mb-4 text-lg leading-[normal] font-bold ${colors.preHeadingText[textColor]}`}
      >
        {preHeading}
      </div>
      <Heading
        className={`text-4xl leading-[normal] font-bold ${colors.headingText[textColor]}`}
      >
        {heading}
      </Heading>
    </div>
  );
};

export default Heading;
