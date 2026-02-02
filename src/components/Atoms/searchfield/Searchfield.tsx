"use client";

import { SearchIcon, XIcon } from "lucide-react";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
  Group as AriaGroup,
  GroupProps as AriaGroupProps,
  Input as AriaInput,
  InputProps as AriaInputProps,
  SearchField as AriaSearchField,
  SearchFieldProps as AriaSearchFieldProps,
  ValidationResult as AriaValidationResult,
  composeRenderProps,
  Text,
} from "react-aria-components";

import { cn } from "@/lib/utils";

import { FieldError, FieldGroup, Label } from "../textfield/Field";

function SearchField({ className, ...props }: AriaSearchFieldProps) {
  return (
    <AriaSearchField
      className={composeRenderProps(className, (className) =>
        cn("group", className)
      )}
      {...props}
    />
  );
}

function SearchFieldInput({ className, ...props }: AriaInputProps) {
  return (
    <AriaInput
      className={composeRenderProps(className, (className) =>
        cn(
          "nm-min-w-0 nm-flex-1 nm-bg-background nm-px-2 nm-py-1.5 nm-outline nm-outline-0 placeholder:nm-text-muted-foreground [&::-webkit-search-cancel-button]:nm-hidden",
          className
        )
      )}
      {...props}
    />
  );
}

function SearchFieldGroup({ className, ...props }: AriaGroupProps) {
  return (
    <AriaGroup
      className={composeRenderProps(className, (className) =>
        cn(
          "nm-flex nm-h-10 nm-w-full nm-items-center nm-overflow-hidden nm-rounded-md nm-border nm-border-input nm-bg-background nm-px-3 nm-py-2 nm-text-sm nm-ring-offset-background",
          /* Focus Within */
          "data-[focus-within]:nm-outline-none data-[focus-within]:nm-ring-2 data-[focus-within]:nm-ring-ring data-[focus-within]:nm-ring-offset-2",
          /* Disabled */
          "data-[disabled]:nm-opacity-50",
          className
        )
      )}
      {...props}
    />
  );
}

function SearchFieldClear({ className, ...props }: AriaButtonProps) {
  return (
    <AriaButton
      className={composeRenderProps(className, (className) =>
        cn(
          "nm-mr-1 nm-rounded-sm nm-opacity-70 nm-ring-offset-background nm-transition-opacity",
          /* Hover */
          "data-[hovered]:nm-opacity-100",
          /* Disabled */
          "data-[disabled]:nm-pointer-events-none",
          /* Empty */
          "group-data-[empty]:nm-invisible",
          className
        )
      )}
      {...props}
    />
  );
}

interface JollySearchFieldProps extends AriaSearchFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
}

function JollySearchField({
  label,
  description,
  className,
  errorMessage,
  ...props
}: JollySearchFieldProps) {
  return (
    <SearchField
      className={composeRenderProps(className, (className) =>
        cn("group nm-flex nm-flex-col nm-gap-2", className)
      )}
      {...props}
    >
      <Label>{label}</Label>
      <FieldGroup>
        <SearchIcon
          aria-hidden
          className="nm-size-4 nm-text-muted-foreground"
        />
        <SearchFieldInput placeholder="Search..." />
        <SearchFieldClear>
          <XIcon aria-hidden className="nm-size-4" />
        </SearchFieldClear>
      </FieldGroup>
      {description && (
        <Text
          className="nm-text-sm nm-text-muted-foreground"
          slot="description"
        >
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </SearchField>
  );
}

export {
  SearchField,
  SearchFieldGroup,
  SearchFieldInput,
  SearchFieldClear,
  JollySearchField,
};
export type { JollySearchFieldProps };
