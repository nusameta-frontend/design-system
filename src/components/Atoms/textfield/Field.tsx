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
  "nm-text-sm nm-font-medium nm-leading-none",
  "[color:var(--nm-textfield-label-fg)]",
  /* Disabled */
  "data-[disabled]:nm-cursor-not-allowed data-[disabled]:nm-opacity-70",
  /* Invalid */
  "group-data-[invalid]:[color:var(--nm-textfield-label-error-fg)]",
]);

const Label = ({ className, ...props }: AriaLabelProps) => (
  <AriaLabel className={cn(labelVariants(), className)} {...props} />
);

function FormDescription({ className, ...props }: AriaTextProps) {
  return (
    <AriaText
      className={cn(
        "nm-text-sm [color:var(--nm-textfield-helper-fg)]",
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
        "nm-text-sm nm-font-medium [color:var(--nm-textfield-helper-error-fg)]",
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
        "nm-relative nm-flex nm-h-10 nm-w-full nm-items-center nm-overflow-hidden nm-rounded-md nm-border nm-px-3 nm-py-2 nm-text-sm nm-ring-offset-background",
        /* Base Styles from Tokens */
        "[border-color:var(--nm-textfield-border)] [background-color:var(--nm-textfield-bg)]",
        /* Focus Within */
        "data-[focus-within]:nm-outline-none data-[focus-within]:nm-ring-2 [data-focus-within]:[--nm-textfield-focus-ring:var(--nm-textfield-ring)] data-[focus-within]:nm-ring-offset-2",
        /* Disabled */
        "data-[disabled]:nm-opacity-50",
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
