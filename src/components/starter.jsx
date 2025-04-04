// Use React/Preact (https://preactjs.com) and Tailwind CSS 4
// (https://tailwindcss.com).
// Global CSS is added to all pages with a @theme directive.
// Tailwind theme variables must be added in Global CSS.
// @see https://tailwindcss.com/docs/theme.
// Do not include @import "tailwindcss"!

// Available third party packages:
// import { clsx } from 'clsx'
// import { cva } from 'class-variance-authority'
// import { twMerge } from 'tailwind-merge'
//
// Combine classes with the cn() utility function.
// @see https://git.drupalcode.org/project/experience_builder/-/blob/0.x/ui/lib/astro-hydration/src/lib/utils.ts
import { cn } from "@/lib/utils";

const MyComponent = ({
  // List component props and slots here. To expose them on the UI, add them
  // under "Component data".
  // The camelCased prop/slot name must match the argument name here
  // (eg. "Card Variant" → "cardVariant").
  title = "My component",
}) => {
  return (
    <div className="max-w-sm min-h-36 p-2 font-bold rounded-lg text-2xl relative mx-auto flex items-center justify-center bg-[#ffc423] text-[#12285f]">
      <ControlDots className="top-4 left-4 stroke-white absolute" />
      {title}
    </div>
  );
};

export default MyComponent;

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
