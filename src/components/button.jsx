import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";

import { cn } from "../lib/utils";

const buttonVariants = cva("inline-block rounded-sm px-4 py-3 shadow-sm", {
  variants: {
    variant: {
      default: "cursor-pointer bg-brand text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Button = forwardRef(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(buttonVariants({ variant, className }))}
    {...props}
  />
));

Button.displayName = "Button";

export { Button };
