"use client";

import * as React from "react";
import { Check, Minus } from "lucide-react";
import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  ValidationResult as AriaValidationResult,
  composeRenderProps,
  Text,
  type CheckboxProps as AriaCheckboxProps,
} from "react-aria-components";

import { cn } from "@/lib/utils";

import { FieldError, Label, labelVariants } from "../textfield/Field";

const CheckboxGroup = AriaCheckboxGroup;

const Checkbox = ({ className, children, ...props }: AriaCheckboxProps) => (
  <AriaCheckbox
    className={composeRenderProps(className, (className) =>
      cn(
        "group/checkbox nm:flex nm:items-center nm:gap-x-2",
        /* Disabled */
        "nm:data-[disabled]:cursor-not-allowed nm:data-[disabled]:opacity-70",
        labelVariants,
        className
      )
    )}
    {...props}
  >
    {composeRenderProps(children, (children, renderProps) => (
      <>
        <div
          className={cn(
            "nm:flex nm:size-4 nm:shrink-0 nm:items-center nm:justify-center nm:rounded-sm nm:border nm:border-primary nm:text-current nm:ring-offset-background",
            /* Focus Visible */
            "nm:group-data-[focus-visible]/checkbox:outline-none nm:group-data-[focus-visible]/checkbox:ring-2 nm:group-data-[focus-visible]/checkbox:ring-ring nm:group-data-[focus-visible]/checkbox:ring-offset-2",
            /* Selected */
            "nm:group-data-[indeterminate]/checkbox:bg-primary nm:group-data-[selected]/checkbox:bg-primary nm:group-data-[indeterminate]/checkbox:text-primary-foreground  nm:group-data-[selected]/checkbox:text-primary-foreground",
            /* Disabled */
            "nm:group-data-[disabled]/checkbox:cursor-not-allowed nm:group-data-[disabled]/checkbox:opacity-50",
            /* Invalid */
            "nm:group-data-[invalid]/checkbox:border-destructive nm:group-data-[invalid]/checkbox:group-data-[selected]/checkbox:bg-destructive nm:group-data-[invalid]/checkbox:group-data-[selected]/checkbox:text-destructive-foreground",
            /* Resets */
            "nm:focus:outline-none nm:focus-visible:outline-none"
          )}
        >
          {renderProps.isIndeterminate ? (
            <Minus className="nm:size-4" />
          ) : renderProps.isSelected ? (
            <Check className="nm:size-4" />
          ) : null}
        </div>
        {children}
      </>
    ))}
  </AriaCheckbox>
);

interface ComposedCheckboxGroupProps extends AriaCheckboxGroupProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
}

function ComposedCheckboxGroup({
  label,
  description,
  errorMessage,
  className,
  children,
  ...props
}: ComposedCheckboxGroupProps) {
  return (
    <CheckboxGroup
      className={composeRenderProps(className, (className) =>
        cn("group nm:flex nm:flex-col nm:gap-2", className)
      )}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          <Label>{label}</Label>
          {children}
          {description && (
            <Text
              className="nm:text-sm nm:text-muted-foreground"
              slot="description"
            >
              {description}
            </Text>
          )}
          <FieldError>{errorMessage}</FieldError>
        </>
      ))}
    </CheckboxGroup>
  );
}

export { Checkbox, CheckboxGroup, ComposedCheckboxGroup };
export type { ComposedCheckboxGroupProps };
