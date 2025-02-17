// import { cva } from "class-variance-authority";
import PropTypes from "prop-types";

import Heading from "./heading.jsx";

// const heroVariants = cva("mx-auto flex w-full max-w-[1360px]", {
//   variants: {
//     layout: {
//       leftAligned: "items-center justify-between",
//       centered: "xxx",
//     },
//   },
//   defaultVariants: {
//     intent: "primary",
//     spacing: "relaxed",
//   },
// });

const Hero = ({
  // layout,
  preHeading,
  heading,
  headingSize,
  text,
  // textColor,
  button1Label,
  button1Link,
  // button1Style,
  button2Label,
  button2Link,
  // button2Style,
  // image,
  backgroundImage,
  // darkenImage,
  // backgroundColor,
}) => {
  return (
    <div
      className="align-center flex h-[672px] w-full justify-start bg-cover bg-center bg-no-repeat px-32"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between">
        <div className="flex max-w-xl flex-col items-start justify-start gap-4">
          <div className="mb-4">
            <Heading
              heading={heading}
              preHeading={preHeading}
              headingSize={headingSize}
            />
          </div>
          {text && <p className="mb-4 text-lg text-slate-950">{text}</p>}
          <div className="flex gap-4">
            {button1Label && (
              <a
                href={button1Link}
                className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                {button1Label}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.25 10.5L8.75 7L5.25 3.5"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
            {button2Label && (
              <a
                href={button2Link}
                className="inline-flex items-center gap-x-2 rounded-lg border border-blue-600 px-4 py-3 text-sm font-medium text-blue-600 hover:border-blue-600 hover:text-blue-600 focus:border-blue-600 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-blue-600 dark:hover:text-blue-500 dark:focus:border-blue-600 dark:focus:text-blue-500"
              >
                {button2Label}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.25 10.5L8.75 7L5.25 3.5"
                    stroke="#2563EB"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  layout: PropTypes.string,
  preHeading: PropTypes.string,
  heading: PropTypes.string,
  headingSize: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.string,
  button1Label: PropTypes.string,
  button1Link: PropTypes.string,
  button1Style: PropTypes.string,
  button2Label: PropTypes.string,
  button2Link: PropTypes.string,
  button2Style: PropTypes.string,
  image: PropTypes.string,
  backgroundImage: PropTypes.string,
  darkenImage: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Hero.defaultProps = {
  layout: "",
  preHeading: "",
  heading: "",
  headingSize: "",
  text: "",
  textColor: "",
  button1Label: "",
  button1Link: "",
  button1Style: "",
  button2Label: "",
  button2Link: "",
  button2Style: "",
  image: "",
  backgroundImage: "",
  darkenImage: "",
  backgroundColor: "",
};

export default Hero;
