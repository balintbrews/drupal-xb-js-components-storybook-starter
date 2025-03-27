// You can create your own component using Preact and Tailwind CSS 4.
// @see https://preactjs.com
// @see https://tailwindcss.com
// You can add CSS under the "CSS" and "Global CSS" tabs.
// Add your Tailwind CSS 4 theme variables under "Global CSS".
// @see https://tailwindcss.com/docs/theme.
// The contents of global CSS will be added as a @theme directive.
// Do not include `@import "tailwindcss"`.

// For now, the following third party packages are available:
// import { clsx } from 'clsx'
// import { cva } from 'class-variance-authority'
// import { twMerge } from 'tailwind-merge'
//
// cn() is a utility function XB bundles, you can use it to combine classes.
// @see https://git.drupalcode.org/project/experience_builder/-/blob/0.x/ui/lib/astro-hydration/src/lib/utils.ts
import { cn } from "../lib/utils";

const Greetings = ({
  // You can create props under Component data. Their name will be camelCased.
  // E.g. you can create a prop called "Title" (use the type, Text), and it will
  // populate the following prop with the example value you add:
  title = "Component name",
  // Slots are also passed here as props.
}) => {
  return (
    <div className="max-w-sm min-h-36 p-2 font-bold rounded-lg text-2xl relative mx-auto flex items-center justify-center bg-[#ffc423] text-[#12285f]">
      <ControlDots className="top-4 left-4 stroke-white absolute" />
      {title}
    </div>
  );
};

export default Greetings;

const ControlDots = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 31 9"
    fill="none"
    strokeWidth="2"
    className={cn("w-12", className)}
  >
    <ellipse cx="4.13" cy="4.97" rx="3.13" ry="2.97" />
    <ellipse cx="15.16" cy="4.97" rx="3.13" ry="2.97" />
    <ellipse cx="26.19" cy="4.97" rx="3.13" ry="2.97" />
  </svg>
);
