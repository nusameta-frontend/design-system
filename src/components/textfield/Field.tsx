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
  "nm:text-sm nm:font-medium nm:leading-none",
  "nm:text-textfield-label-fg",
  /* Disabled */
  "nm:data-[disabled]:cursor-not-allowed nm:data-[disabled]:opacity-70",
  /* Invalid */
  "group-nm:data-[invalid]:text-textfield-label-error-fg",
]);

const Label = ({ className, ...props }: AriaLabelProps) => (
  <AriaLabel className={cn(labelVariants(), className)} {...props} />
);

function FormDescription({ className, ...props }: AriaTextProps) {
  return (
    <AriaText
      className={cn("nm:text-sm nm:text-textfield-helper", className)}
      {...props}
      slot="description"
    />
  );
}

function FieldError({ className, ...props }: AriaFieldErrorProps) {
  return (
    <AriaFieldError
      className={cn(
        "nm:text-sm nm:font-medium nm:text-textfield-helper-error-fg",
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
        "nm:relative nm:flex nm:h-10 nm:w-full nm:items-center nm:overflow-hidden nm:rounded-md nm:border nm:px-3 nm:py-2 nm:text-sm nm:ring-offset-background",
        /* Base Styles from Tokens */
        "nm:border-textfield-border nm:bg-textfield",
        /* Focus Within */
        "nm:data-[focus-within]:outline-none nm:data-[focus-within]:ring-2 [data-focus-within]:[--nm-textfield-focus-ring:var(--nm-textfield-ring)] nm:data-[focus-within]:ring-offset-2",
        /* Disabled */
        "nm:data-[disabled]:opacity-50",
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
