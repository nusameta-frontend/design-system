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
    "nm-inline-flex nm-items-center nm-justify-center nm-whitespace-nowrap nm-rounded-md nm-text-sm nm-font-medium nm-ring-offset-background nm-transition-colors",
    /* Disabled */
    "nm-data-disabled:pointer-events-none nm-data-disabled:nm-opacity-50 ",
    /* Focus Visible */
    "nm-data-focus-visible:outline-none nm-data-focus-visible:nm-ring-2 nm-data-focus-visible:nm-ring-ring nm-data-focus-visible:nm-nm-ring-offset-2",
    /* Resets */
    "nm-focus-visible:outline-none",
  ],
  {
    variants: {
      variant: {
        default:
          "nm-bg-primary nm-text-primary-foreground nm-data-hovered:nm-bg-primary/90",
        destructive:
          "nm-bg-destructive nm-text-destructive-foreground nm-data-hovered:nm-bg-destructive/90",
        outline:
          "nm-border nm-border-input nm-bg-background nm-data-hovered:nm-bg-accent nm-data-hovered:nm-text-accent-foreground",
        secondary:
          "nm-bg-secondary nm-text-secondary-foreground nm-data-hovered:nm-bg-secondary/80",
        ghost:
          "nm-data-hovered:nm-bg-accent nm-data-hovered:nm-text-accent-foreground",
        link: "nm-text-primary nm-underline-offset-4 nm-data-hovered:nm-underline",
      },
      size: {
        default: "nm-h-10 nm-px-4 nm-py-2",
        sm: "nm-h-9 nm-rounded-md nm-px-3",
        lg: "nm-h-11 nm-rounded-md nm-px-8",
        icon: "nm-size-10",
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

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <AriaButton
      className={composeRenderProps(className, (className) =>
        cn(
          buttonVariants({
            variant,
            size,
            className,
          })
        )
      )}
      {...props}
    />
  );
};

export { Button, buttonVariants };
export type { ButtonProps };
