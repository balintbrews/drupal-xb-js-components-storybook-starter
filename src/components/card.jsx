import { cva } from "class-variance-authority";

import { cn } from "../lib/utils";

const cardVariants = cva(
  "flex w-full max-w-md flex-col items-center gap-4 rounded-2xl pb-6 leading-[normal]",
  {
    variants: {
      textColor: {
        Dark: "",
        Light: "text-white",
      },
    },
  },
);

const Card = ({
  image,
  heading,
  headingElement,
  text,
  textColor,
  linkLabel,
  link,
  backgroundColor,
  backgroundColorOnHover,
  className,
}) => {
  const Heading = headingElement;

  return (
    <>
      <style>
        {`
          .card-${backgroundColor.substring(1)} {
            background-color: ${backgroundColor};
          } 
          .card-hover-${backgroundColorOnHover.substring(1)}:hover {
            background-color: ${backgroundColorOnHover};
          }
        `}
      </style>
      <div
        className={cn(
          cardVariants({ textColor }),
          `card-hover-${backgroundColorOnHover.substring(1)}`,
          `card-${backgroundColor.substring(1)}`,
          className,
        )}
      >
        <img
          className="w-full rounded-2xl object-cover object-center"
          src={image}
        />
        <div className="px-6 pt-2">
          <Heading className="mb-4 text-lg font-bold">{heading}</Heading>
          <p className="mb-4 leading-6">{text}</p>
          <a
            href={link}
            className="text-sm leading-5 font-semibold text-blue-600"
          >
            {linkLabel}
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
