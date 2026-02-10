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
          "nm:flex nm:h-10 nm:w-full nm:rounded-md nm:border nm:px-3 nm:py-2 nm:text-sm nm:ring-offset-background nm:transition-colors",
          /* Base Styles from Tokens */
          "nm:border-textfield-border nm:text-textfield-fg nm:bg-textfield-bg",
          /* File Input Reset */
          "nm:file:border-0 nm:file:bg-transparent nm:file:text-sm nm:file:font-medium",
          /* Placeholder */
          "nm:placeholder:opacity-100 nm:placeholder:text-textfield-placeholder",
          /* Disabled State */
          "nm:data-[disabled]:cursor-not-allowed nm:data-[disabled]:opacity-50 nm:data-[disabled]:bg-textfield-disabled-bg nm:data-[disabled]:text-textfield-disabled-fg",
          /* Focused State */
          "nm:data-[focused]:outline-none nm:data-[focused]:ring-2 nm:data-[focused]:ring-textfield-focus-ring nm:data-[focused]:ring-offset-2",
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
          "nm:flex nm:min-h-[80px] nm:w-full nm:rounded-md nm:border nm:px-3 nm:py-2 nm:text-sm nm:ring-offset-background nm:transition-colors",
          /* Base Styles from Tokens */
          "nm:border-textfield-border nm:text-textfield-fg nm:bg-textfield-bg",
          /* Placeholder */
          "nm:placeholder:opacity-100 nm:placeholder:text-textfield-placeholder",
          /* Focused State */
          "nm:data-[focused]:outline-none nm:data-[focused]:ring-2 nm:data-[focused]:ring-textfield-focus-ring nm:data-[focused]:ring-offset-2",
          /* Disabled State */
          "nm:data-[disabled]:cursor-not-allowed nm:data-[disabled]:opacity-50 nm:data-[disabled]:bg-textfield-disabled-bg nm:data-[disabled]:text-textfield-disabled-fg",
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
          className="nm:text-sm nm:text-textfield-helper-fg"
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
