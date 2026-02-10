import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Button as AriaButton,
  composeRenderProps,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    // Base Styles
    "nm:font-sans nm:inline-flex nm:items-center nm:justify-center nm:whitespace-nowrap nm:rounded-md nm:text-sm nm:font-medium nm:ring-offset-background nm:transition-colors",
    /* Disabled State  */
    "nm:data-disabled:pointer-events-none nm:data-disabled:opacity-50",
    /* Focus Visible State */
    "nm:data-focus-visible:outline-none nm:data-focus-visible:ring-2 nm:data-focus-visible:ring-btn-ring nm:data-focus-visible:ring-offset-2",
    /* Resets */
    "nm:focus-visible:outline-none",
    /* Cursor pointer is good for buttons */
    "nm:cursor-pointer",
  ],
  {
    variants: {
      variant: {
        default:
          "nm:bg-btn-primary-bg nm:text-btn-primary-fg nm:data-hovered:bg-btn-primary-hover nm:data-hovered:text-btn-primary-hover-fg",
        destructive:
          "nm:bg-btn-dest-bg nm:text-btn-dest-fg nm:data-hovered:bg-btn-dest-hover",
        outline:
          "nm:border nm:border-btn-outline-border nm:bg-btn-outline-bg nm:data-hovered:bg-btn-ghost-hover-bg nm:data-hovered:text-btn-ghost-hover-fg",
        secondary:
          "nm:bg-btn-sec-bg nm:text-btn-sec-fg nm:data-hovered:bg-btn-sec-hover",
        ghost:
          "nm:data-hovered:bg-btn-ghost-hover-bg nm:data-hovered:text-btn-ghost-hover-fg",
        link: "nm:text-btn-sec-fg nm:underline-offset-4 nm:data-hovered:underline",
      },
      size: {
        default: "nm:h-10 nm:px-4 nm:py-2  ",
        sm: "nm:h-9 nm:rounded-md nm:px-3",
        lg: "nm:h-11 nm:rounded-md nm:px-8",
        icon: "nm:h-10 nm:w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends AriaButtonProps,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <AriaButton
        ref={ref}
        {...props}
        className={composeRenderProps(className, (className) =>
          cn(
            buttonVariants({
              variant,
              size,
              className,
            })
          )
        )}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
