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
    "nm:font-btn nm:text-btn nm:inline-flex nm:items-center nm:justify-center nm:whitespace-nowrap nm:ring-offset-background nm:transition-colors",
    // Disabled State
    "nm:data-disabled:pointer-events-none nm:data-disabled:bg-btn-bg-disabled nm:data-disabled:text-btn-fg-disabled",
    // Focus Visible State
    "nm:data-focus-visible:outline-none nm:data-focus-visible:ring-2 nm:data-focus-visible:ring-ring nm:data-focus-visible:ring-offset-2",
    // Resets
    "nm:focus-visible:outline-none",
    // Cursor pointer
    "nm:cursor-pointer",
  ],
  {
    variants: {
      variant: {
        default:
          "nm:bg-btn-primary-bg nm:text-btn-primary-fg nm:data-hovered:opacity-90",
        outline:
          "nm:border nm:border-btn-outline-border nm:bg-btn-outline-bg nm:text-btn-outline-fg nm:data-hovered:bg-accent nm:data-hovered:text-accent-foreground",
        secondary:
          "nm:bg-btn-secondary-bg nm:text-btn-secondary-fg nm:data-hovered:bg-btn-secondary-bg-hover nm:data-hovered:text-btn-secondary-fg-hover",
        ghost:
          "nm:data-hovered:bg-accent nm:data-hovered:text-accent-foreground",
        link: "nm:text-primary nm:underline-offset-4 nm:data-hovered:underline",
      },
      size: {
        default: "nm:h-10 nm:px-4 nm:py-2 nm:rounded-md",
        sm: "nm:h-9 nm:rounded-btn-sm nm:px-btn-sm-x nm:py-btn-sm-y",
        md: "nm:h-10 nm:rounded-btn-md nm:px-btn-md-x nm:py-btn-md-y",
        lg: "nm:h-11 nm:px-8 nm:py-2 nm:rounded-lg",
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
