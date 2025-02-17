import PropTypes from "prop-types";

const Hero = ({
  preHeading,
  heading,
  text,
  button1Label,
  button1Link,
  button2Label,
  button2Link,
  backgroundImage,
}) => {
  return (
    <div
      className="align-center flex h-[672px] w-full justify-start bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 py-12">
        {preHeading && <div className="text-sm uppercase">{preHeading}</div>}
        {heading && <h1 className="text-3xl font-bold">{heading}</h1>}
        {text && <p className="mt-4">{text}</p>}
        <div className="mt-8">
          {button1Label && (
            <a
              href={button1Link}
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              {button1Label}
            </a>
          )}
          {button2Label && (
            <a
              href={button2Link}
              className="ml-4 rounded border border-blue-500 bg-transparent px-4 py-2 text-blue-700 hover:bg-blue-500 hover:text-white"
            >
              {button2Label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  preHeading: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  button1Label: PropTypes.string,
  button1Link: PropTypes.string,
  button2Label: PropTypes.string,
  button2Link: PropTypes.string,
  backgroundImage: PropTypes.string,
};

Hero.defaultProps = {
  preHeading: "",
  heading: "",
  text: "",
  button1Label: "",
  button1Link: "",
  button2Label: "",
  button2Link: "",
  backgroundImage: "",
};

export default Hero;
