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
          /* Layout & Display */
          "nm:flex nm:w-full",
          /* Sizing - Using Utility Classes */
          "nm:h-textfield-height nm:px-textfield-x nm:py-textfield-y",
          /* Typography - Using Utility Classes */
          "nm:font-textfield nm:text-textfield nm:font-textfield-weight nm:leading-textfield",
          /* Border & Radius - Using Utility Classes */
          "nm:rounded-textfield nm:border",
          /* Colors - Base State */
          "nm:border-textfield-border nm:text-textfield-fg nm:bg-textfield-bg",
          /* Effects */
          "nm:ring-offset-background nm:transition-colors",
          /* File Input Reset - Using Utility Classes */
          "nm:file:border-0 nm:file:bg-transparent nm:file:text-textfield-file nm:file:font-textfield-file",
          /* Placeholder */
          "nm:placeholder:opacity-100 nm:placeholder:text-textfield-placeholder",
          /* Disabled State */
          "nm:data-disabled:cursor-not-allowed nm:data-disabled:opacity-50 nm:data-disabled:bg-textfield-disabled-bg nm:data-disabled:text-textfield-disabled-fg nm:data-disabled:border-textfield-disabled-border",
          /* Focused State */
          "nm:data-focused:outline-none nm:data-focused:ring-2 nm:data-focused:ring-textfield-focus-ring nm:data-focused:ring-offset-2 nm:data-focused:bg-textfield-focus-bg nm:data-focused:text-textfield-focus-fg nm:data-focused:border-textfield-focus-border",
          /* Resets */
          "nm:focus-visible:outline-none",
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
          /* Layout & Display */
          "nm:flex nm:w-full",
          /* Sizing - Using Utility Classes */
          "nm:min-h-textfield-textarea-min-height nm:px-textfield-x nm:py-textfield-y",
          /* Typography - Using Utility Classes */
          "nm:font-textfield nm:text-textfield nm:font-textfield-weight nm:leading-textfield",
          /* Border & Radius - Using Utility Classes */
          "nm:rounded-textfield nm:border",
          /* Colors - Base State */
          "nm:border-textfield-border nm:text-textfield-fg nm:bg-textfield-bg",
          /* Effects */
          "nm:ring-offset-background nm:transition-colors",
          /* Placeholder */
          "nm:placeholder:opacity-100 nm:placeholder:text-textfield-placeholder",
          /* Focused State */
          "nm:data-focused:outline-none nm:data-focused:ring-2 nm:data-focused:ring-textfield-focus-ring nm:data-focused:ring-offset-2 nm:data-focused:bg-textfield-focus-bg nm:data-focused:text-textfield-focus-fg nm:data-focused:border-textfield-focus-border",
          /* Disabled State */
          "nm:data-disabled:cursor-not-allowed nm:data-disabled:opacity-50 nm:data-disabled:bg-textfield-disabled-bg nm:data-disabled:text-textfield-disabled-fg nm:data-disabled:border-textfield-disabled-border",
          /* Resets */
          "nm:focus-visible:outline-none",
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
        cn(
          "nm:font-sans nm:group nm:flex nm:flex-col nm:gap-textfield-gap",
          className
        )
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
          className="nm:text-textfield-helper nm:font-textfield-helper nm:leading-textfield-helper nm:text-textfield-helper-fg"
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
