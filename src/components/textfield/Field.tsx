import { cva, type VariantProps } from "class-variance-authority";
import {
  FieldError as AriaFieldError,
  FieldErrorProps as AriaFieldErrorProps,
  Group as AriaGroup,
  GroupProps as AriaGroupProps,
  Label as AriaLabel,
  LabelProps as AriaLabelProps,
  Text as AriaText,
  TextProps as AriaTextProps,
  composeRenderProps,
} from "react-aria-components";

import { cn } from "@/lib/utils";

const labelVariants = cva([
  /* Typography - Using Design Tokens */
  "nm:text-textfield-label nm:font-textfield-label nm:leading-textfield-label",
  /* Colors */
  "nm:text-textfield-label-fg",
  /* Disabled */
  "nm:data-disabled:cursor-not-allowed nm:data-disabled:opacity-70 nm:data-disabled:text-textfield-label-disabled-fg",
  /* Invalid */
  "group-nm:data-[invalid]:text-textfield-label-error-fg",
]);

const Label = ({ className, ...props }: AriaLabelProps) => (
  <AriaLabel className={cn(labelVariants(), className)} {...props} />
);

function FormDescription({ className, ...props }: AriaTextProps) {
  return (
    <AriaText
      className={cn(
        "nm:text-textfield-helper nm:font-textfield-helper nm:leading-textfield-helper nm:text-textfield-helper-fg",
        className
      )}
      {...props}
      slot="description"
    />
  );
}

function FieldError({ className, ...props }: AriaFieldErrorProps) {
  return (
    <AriaFieldError
      className={cn(
        "nm:text-textfield-helper nm:font-textfield-helper nm:leading-textfield-helper nm:text-textfield-helper-error-fg",
        className
      )}
      {...props}
    />
  );
}

const fieldGroupVariants = cva("", {
  variants: {
    variant: {
      default: [
        /* Layout */
        "nm:relative nm:flex nm:w-full nm:items-center nm:overflow-hidden",
        /* Sizing - Using Design Tokens */
        "nm:h-textfield-group-height nm:px-textfield-group-x nm:py-textfield-group-y",
        /* Typography - Using Design Tokens */
        "nm:text-textfield",
        /* Border & Radius - Using Design Tokens */
        "nm:rounded-textfield-group nm:border",
        /* Colors - Base Styles */
        "nm:border-textfield-border nm:bg-textfield-bg",
        /* Effects */
        "nm:ring-offset-background",
        /* Focus Within */
        "nm:data-focus-within:outline-none nm:data-focus-within:ring-2 nm:data-focus-within:ring-textfield-focus-ring nm:data-focus-within:ring-offset-2",
        /* Disabled */
        "nm:data-disabled:opacity-50 nm:data-disabled:bg-textfield-disabled-bg",
      ],
      ghost: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface GroupProps
  extends AriaGroupProps,
    VariantProps<typeof fieldGroupVariants> {}

function FieldGroup({ className, variant, ...props }: GroupProps) {
  return (
    <AriaGroup
      className={composeRenderProps(className, (className) =>
        cn(fieldGroupVariants({ variant }), className)
      )}
      {...props}
    />
  );
}

export {
  Label,
  labelVariants,
  FieldGroup,
  fieldGroupVariants,
  FieldError,
  FormDescription,
};
