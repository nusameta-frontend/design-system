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
    "nm-font-sans nm-inline-flex nm-items-center nm-justify-center nm-whitespace-nowrap nm-rounded-md nm-text-sm nm-font-medium nm-ring-offset-background nm-transition-colors",
    /* Disabled State (Handled by React Aria data attributes) */
    "data-[disabled]:nm-pointer-events-none data-[disabled]:nm-opacity-50",
    /* Focus Visible State */
    "data-[focus-visible]:nm-outline-none data-[focus-visible]:nm-ring-2 data-[focus-visible]:nm-ring-ring data-[focus-visible]:nm-ring-offset-2",
    /* Resets */
    "focus-visible:nm-outline-none",
  ],
  {
    variants: {
      variant: {
        default:
          "nm-bg-btn-primary nm-text-btn-primary-fg data-[hovered]:nm-bg-btn-primary-hover",
        destructive:
          "nm-bg-btn-destructive nm-text-btn-destructive-fg data-[hovered]:nm-bg-btn-destructive-hover",
        outline:
          "nm-border nm-border-input nm-bg-background data-[hovered]:nm-bg-btn-ghost-hover-bg data-[hovered]:nm-text-btn-ghost-hover-fg",
        secondary:
          "nm-bg-btn-secondary nm-text-btn-secondary-fg data-[hovered]:nm-bg-btn-secondary-hover",
        ghost:
          "data-[hovered]:nm-bg-btn-ghost-hover-bg data-[hovered]:nm-text-btn-ghost-hover-fg",
        link: "nm-text-btn-primary nm-underline-offset-4 data-[hovered]:nm-underline",
      },
      size: {
        default: "nm-h-10 nm-px-4 nm-py-2",
        sm: "nm-h-9 nm-rounded-md nm-px-3",
        lg: "nm-h-11 nm-rounded-md nm-px-8",
        icon: "nm-h-10 nm-w-10",
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
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
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
};

export { Button, buttonVariants };
export type { ButtonProps };
