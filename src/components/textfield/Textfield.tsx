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
          /* Sizing */
          "nm:h-11 nm:px-3 nm:py-3",
          /* Typography */
          "nm:text-base nm:font-normal nm:leading-normal",
          /* Border & Radius */
          "nm:rounded nm:border",
          /* Colors - Base State */
          "nm:border-neutral-300 nm:text-foreground nm:bg-white",
          /* Effects */
          "nm:ring-offset-background nm:transition-colors",
          /* File Input Reset */
          "nm:file:border-0 nm:file:bg-transparent nm:file:text-sm nm:file:font-medium",
          /* Placeholder */
          "nm:placeholder:opacity-100 nm:placeholder:text-muted-foreground",
          /* Disabled State */
          "nm:data-disabled:cursor-not-allowed nm:data-disabled:opacity-50 nm:data-disabled:bg-muted nm:data-disabled:text-muted-foreground nm:data-disabled:border-neutral-200",
          /* Focused State */
          "nm:data-focused:outline-none nm:data-focused:ring-2 nm:data-focused:ring-blue-500 nm:data-focused:ring-offset-2 nm:data-focused:bg-white nm:data-focused:text-foreground nm:data-focused:border-blue-500",
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
          /* Sizing */
          "nm:min-h-20 nm:px-3 nm:py-3",
          /* Typography */
          "nm:text-base nm:font-normal nm:leading-normal",
          /* Border & Radius */
          "nm:rounded nm:border",
          /* Colors - Base State */
          "nm:border-neutral-300 nm:text-foreground nm:bg-white",
          /* Effects */
          "nm:ring-offset-background nm:transition-colors",
          /* Placeholder */
          "nm:placeholder:opacity-100 nm:placeholder:text-muted-foreground",
          /* Focused State */
          "nm:data-focused:outline-none nm:data-focused:ring-2 nm:data-focused:ring-blue-500 nm:data-focused:ring-offset-2 nm:data-focused:bg-white nm:data-focused:text-foreground nm:data-focused:border-blue-500",
          /* Disabled State */
          "nm:data-disabled:cursor-not-allowed nm:data-disabled:opacity-50 nm:data-disabled:bg-muted nm:data-disabled:text-muted-foreground nm:data-disabled:border-neutral-200",
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
        cn("nm:font-sans nm:group nm:flex nm:flex-col nm:gap-2", className)
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
          className="nm:text-sm nm:font-normal nm:leading-normal nm:text-muted-foreground"
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
