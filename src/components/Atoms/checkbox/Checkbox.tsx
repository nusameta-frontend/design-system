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

import { FieldError, Label, labelVariants } from "./../textfield/Field";

const CheckboxGroup = AriaCheckboxGroup;

const Checkbox = ({ className, children, ...props }: AriaCheckboxProps) => (
  <AriaCheckbox
    className={composeRenderProps(className, (className) =>
      cn(
        "group/checkbox nm-flex nm-items-center nm-gap-x-2",
        /* Disabled */
        "data-[disabled]:nm-cursor-not-allowed data-[disabled]:nm-opacity-70",
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
            "nm-flex nm-size-4 nm-shrink-0 nm-items-center nm-justify-center nm-rounded-sm nm-border nm-border-primary nm-text-current nm-ring-offset-background",
            /* Focus Visible */
            "group-data-[focus-visible]/checkbox:nm-outline-none group-data-[focus-visible]/checkbox:nm-ring-2 group-data-[focus-visible]/checkbox:nm-ring-ring group-data-[focus-visible]/checkbox:nm-ring-offset-2",
            /* Selected */
            "group-data-[indeterminate]/checkbox:nm-bg-primary group-data-[selected]/checkbox:nm-bg-primary group-data-[indeterminate]/checkbox:nm-text-primary-foreground  group-data-[selected]/checkbox:nm-text-primary-foreground",
            /* Disabled */
            "group-data-[disabled]/checkbox:nm-cursor-not-allowed group-data-[disabled]/checkbox:nm-opacity-50",
            /* Invalid */
            "group-data-[invalid]/checkbox:nm-border-destructive group-data-[invalid]/checkbox:group-data-[selected]/checkbox:nm-bg-destructive group-data-[invalid]/checkbox:group-data-[selected]/checkbox:nm-text-destructive-foreground",
            /* Resets */
            "focus:nm-outline-none focus-visible:nm-outline-none"
          )}
        >
          {renderProps.isIndeterminate ? (
            <Minus className="nm-size-4" />
          ) : renderProps.isSelected ? (
            <Check className="nm-size-4" />
          ) : null}
        </div>
        {children}
      </>
    ))}
  </AriaCheckbox>
);

interface JollyCheckboxGroupProps extends AriaCheckboxGroupProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
}

function JollyCheckboxGroup({
  label,
  description,
  errorMessage,
  className,
  children,
  ...props
}: JollyCheckboxGroupProps) {
  return (
    <CheckboxGroup
      className={composeRenderProps(className, (className) =>
        cn("group nm-flex nm-flex-col nm-gap-2", className)
      )}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          <Label>{label}</Label>
          {children}
          {description && (
            <Text
              className="nm-text-sm nm-text-muted-foreground"
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

export { Checkbox, CheckboxGroup, JollyCheckboxGroup };
export type { JollyCheckboxGroupProps };
