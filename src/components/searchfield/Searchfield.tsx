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
          "nm:min-w-0 nm:flex-1 nm:bg-searchfield-bg nm:text-searchfield-fg nm:px-2 nm:py-1.5 nm:outline nm:outline-0 nm:placeholder:text-searchfield-placeholder nm:[&::-webkit-search-cancel-button]:hidden",
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
          "nm:flex nm:h-10 nm:w-full nm:items-center nm:overflow-hidden nm:rounded-md nm:border nm:border-searchfield-border nm:bg-searchfield-bg nm:text-searchfield-fg nm:px-3 nm:py-2 nm:text-sm nm:ring-offset-background",
          /* Focus Within */
          "nm:data-[focus-within]:outline-none nm:data-[focus-within]:ring-2 nm:data-[focus-within]:ring-searchfield-ring nm:data-[focus-within]:ring-offset-2",
          /* Disabled */
          "nm:data-[disabled]:opacity-50",
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
          "nm:mr-1 nm:rounded-sm nm:opacity-70 nm:ring-offset-background nm:transition-opacity",
          /* Hover */
          "nm:data-[hovered]:opacity-100",
          /* Disabled */
          "nm:data-[disabled]:pointer-events-none",
          /* Empty */
          "group-nm:data-[empty]:invisible",
          className
        )
      )}
      {...props}
    />
  );
}

interface ComposedSearchFieldProps extends AriaSearchFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
}

function ComposedSearchField({
  label,
  description,
  className,
  errorMessage,
  ...props
}: ComposedSearchFieldProps) {
  return (
    <SearchField
      className={composeRenderProps(className, (className) =>
        cn("group nm:flex nm:flex-col nm:gap-2", className)
      )}
      {...props}
    >
      <Label>{label}</Label>
      <FieldGroup>
        <SearchIcon
          aria-hidden
          className="nm:size-4 nm:text-searchfield-icon-fg"
        />
        <SearchFieldInput placeholder="Search..." />
        <SearchFieldClear>
          <XIcon aria-hidden className="nm:size-4" />
        </SearchFieldClear>
      </FieldGroup>
      {description && (
        <Text
          className="nm:text-sm nm:text-muted-foreground"
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
  ComposedSearchField,
};
export type { ComposedSearchFieldProps };
