"use client";

import * as React from "react";
import {
  Input as AriaInput,
  InputProps as AriaInputProps,
  TextArea as AriaTextArea,
  TextAreaProps as AriaTextAreaProps,
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  ValidationResult as AriaValidationResult,
  composeRenderProps,
  Text,
} from "react-aria-components";

import { cn } from "@/lib/utils";

import { FieldError, Label } from "./Field";

const TextField = AriaTextField;

export interface InputProps extends AriaInputProps {
  className?: AriaInputProps["className"];
}
const Input = ({ className, ...props }: InputProps) => {
  return (
    <AriaInput
      className={composeRenderProps(className, (className) =>
        cn(
          "nm-flex nm-h-10 nm-w-full nm-rounded-md nm-border nm-px-3 nm-py-2 nm-text-sm nm-ring-offset-background nm-transition-colors",
          /* Base Styles from Tokens */
          "nm-border-textfield-border nm-text-textfield-foreground nm-bg-textfield",
          /* File Input Reset */
          "file:nm-border-0 file:nm-bg-transparent file:nm-text-sm file:nm-font-medium",
          /* Placeholder */
          "placeholder:nm-opacity-100 placeholder:nm-text-textfield-placeholder",
          /* Disabled State */
          "data-[disabled]:nm-cursor-not-allowed data-[disabled]:nm-opacity-50 data-[disabled]:nm-bg-textfield-disabled data-[disabled]:nm-text-textfield-disabled-foreground",
          /* Focused State */
          "data-[focused]:nm-outline-none data-[focused]:nm-ring-2 [data-focused]:[--nm-textfield-focus-ring:var(--nm-textfield-ring)] data-[focused]:nm-ring-offset-2",
          /* Resets */
          "focus-visible:nm-outline-none",
          className
        )
      )}
      {...props}
    />
  );
};

const TextArea = ({ className, ...props }: AriaTextAreaProps) => {
  return (
    <AriaTextArea
      className={composeRenderProps(className, (className) =>
        cn(
          "nm-flex nm-min-h-[80px] nm-w-full nm-rounded-md nm-border nm-px-3 nm-py-2 nm-text-sm nm-ring-offset-background nm-transition-colors",
          /* Base Styles from Tokens */
          "nm-border-textfield-border nm-text-textfield-foreground nm-bg-textfield",
          /* Placeholder */
          "placeholder:nm-opacity-100 placeholder:nm-text-textfield-placeholder",
          /* Focused State */
          "data-[focused]:nm-outline-none data-[focused]:nm-ring-2 [data-focused]:[--nm-textfield-focus-ring:var(--nm-textfield-ring)] data-[focused]:nm-ring-offset-2",
          /* Disabled State */
          "data-[disabled]:nm-cursor-not-allowed data-[disabled]:nm-opacity-50 data-[disabled]:nm-bg-textfield-disabled data-[disabled]:nm-text-textfield-disabled-foreground",
          /* Resets */
          "focus-visible:nm-outline-none",
          className
        )
      )}
      {...props}
    />
  );
};

interface WrappedFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
  textArea?: boolean;
  placeholder?: string;
}

function WrappedField({
  label,
  description,
  errorMessage,
  textArea,
  className,
  placeholder,
  ...props
}: WrappedFieldProps) {
  return (
    <TextField
      className={composeRenderProps(className, (className) =>
        cn("nm-font-sans nm-group nm-flex nm-flex-col nm-gap-2", className)
      )}
      {...props}
    >
      <Label>{label}</Label>
      {textArea ? (
        <TextArea placeholder={placeholder} />
      ) : (
        <Input placeholder={placeholder} />
      )}
      {description && (
        <Text
          className="nm-text-sm nm-text-textfield-helper"
          slot="description"
        >
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </TextField>
  );
}

export { Input, TextField, WrappedField, TextArea };
export type { WrappedFieldProps };
