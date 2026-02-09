import { ChevronDown } from "lucide-react";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
  ListBox as AriaListBox,
  ListBoxProps as AriaListBoxProps,
  PopoverProps as AriaPopoverProps,
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  SelectValue as AriaSelectValue,
  SelectValueProps as AriaSelectValueProps,
  ValidationResult as AriaValidationResult,
  composeRenderProps,
  Text,
} from "react-aria-components";

import { cn } from "@/lib/utils";

import { FieldError, Label } from "@/components/textfield/Field";
import {
  ListBoxCollection,
  ListBoxHeader,
  ListBoxItem,
  ListBoxSection,
} from "@/components/list-box/List-box";
import { Popover } from "@/components/popover/Popover";

const Select = AriaSelect;

const SelectItem = ListBoxItem;

const SelectHeader = ListBoxHeader;

const SelectSection = ListBoxSection;

const SelectCollection = ListBoxCollection;

const SelectValue = <T extends object>({
  className,
  ...props
}: AriaSelectValueProps<T>) => (
  <AriaSelectValue
    className={composeRenderProps(className, (className) =>
      cn(
        "nm-line-clamp-1 data-[placeholder]:nm-text-muted-foreground",
        /* Description */
        "[&>[slot=description]]:nm-hidden",
        className
      )
    )}
    {...props}
  />
);

const SelectTrigger = ({ className, children, ...props }: AriaButtonProps) => (
  <AriaButton
    className={composeRenderProps(className, (className) =>
      cn(
        "nm-flex nm-h-10 nm-w-full nm-items-center nm-justify-between nm-rounded-md nm-border nm-border-input nm-bg-background nm-px-3 nm-py-2 nm-text-sm nm-ring-offset-background",
        /* Disabled */
        "data-[disabled]:nm-cursor-not-allowed data-[disabled]:nm-opacity-50",
        /* Focused */
        "data-[focus-visible]:nm-outline-none data-[focus-visible]:nm-ring-2 data-[focus-visible]:nm-ring-ring data-[focus-visible]:nm-ring-offset-2",
        /* Resets */
        "focus-visible:nm-outline-none",
        className
      )
    )}
    {...props}
  >
    {composeRenderProps(children, (children) => (
      <>
        {children}
        <ChevronDown aria-hidden="true" className="nm-size-4 nm-opacity-50" />
      </>
    ))}
  </AriaButton>
);

const SelectPopover = ({ className, ...props }: AriaPopoverProps) => (
  <Popover
    className={composeRenderProps(className, (className) =>
      cn("nm-w-[--trigger-width]", className)
    )}
    {...props}
  />
);

const SelectListBox = <T extends object>({
  className,
  ...props
}: AriaListBoxProps<T>) => (
  <AriaListBox
    className={composeRenderProps(className, (className) =>
      cn(
        "nm-max-h-[inherit] nm-overflow-auto nm-p-1 nm-outline-none [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]",
        className
      )
    )}
    {...props}
  />
);

interface ComposedSelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: AriaValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

function ComposedSelect<T extends object>({
  label,
  description,
  errorMessage,
  children,
  className,
  items,
  ...props
}: ComposedSelectProps<T>) {
  return (
    <Select
      className={composeRenderProps(className, (className) =>
        cn("nm-group nm-flex nm-flex-col nm-gap-2", className)
      )}
      {...props}
    >
      <Label>{label}</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      {description && (
        <Text
          className="nm-text-sm nm-text-muted-foreground"
          slot="description"
        >
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
      <SelectPopover>
        <SelectListBox items={items}>{children}</SelectListBox>
      </SelectPopover>
    </Select>
  );
}

export {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectPopover,
  SelectHeader,
  SelectListBox,
  SelectSection,
  SelectCollection,
  ComposedSelect,
};
export type { ComposedSelectProps };
