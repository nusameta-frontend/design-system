import { Check } from "lucide-react";
import {
  Collection as AriaCollection,
  Header as AriaHeader,
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  ListBoxItemProps as AriaListBoxItemProps,
  ListBoxProps as AriaListBoxProps,
  Section as AriaSection,
  composeRenderProps,
} from "react-aria-components";

import { cn } from "@/lib/utils";

const ListBoxSection = AriaSection;

const ListBoxCollection = AriaCollection;

function ListBox<T extends object>({
  className,
  ...props
}: AriaListBoxProps<T>) {
  return (
    <AriaListBox
      className={composeRenderProps(className, (className) =>
        cn(
          className,
          "nm:group nm:overflow-auto nm:rounded-md nm:border nm:border-listbox-border nm:bg-listbox-bg nm:p-1 nm:text-listbox-fg nm:shadow-md nm:outline-none",
          /* Empty */
          "nm:data-[empty]:p-6 nm:data-[empty]:text-center nm:data-[empty]:text-sm"
        )
      )}
      {...props}
    />
  );
}

const ListBoxItem = <T extends object>({
  className,
  children,
  ...props
}: AriaListBoxItemProps<T>) => {
  return (
    <AriaListBoxItem
      textValue={
        props.textValue || (typeof children === "string" ? children : undefined)
      }
      className={composeRenderProps(className, (className) =>
        cn(
          "nm:relative nm:flex nm:w-full nm:cursor-default nm:select-none nm:items-center nm:rounded-sm nm:px-2 nm:py-1.5 nm:text-sm nm:text-listbox-item-fg nm:outline-none",
          /* Disabled */
          "nm:data-[disabled]:pointer-events-none nm:data-[disabled]:opacity-50",
          /* Focused */
          "nm:data-[focused]:bg-listbox-item-focused-bg nm:data-[focused]:text-listbox-item-focused-fg",
          /* Hovered */
          "nm:data-[hovered]:bg-listbox-item-hovered-bg nm:data-[hovered]:text-listbox-item-hovered-fg",
          /* Selection */
          "nm:data-[selection-mode]:pl-8",
          className
        )
      )}
      {...props}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          {renderProps.isSelected && (
            <span className="nm:absolute nm:left-2 nm:flex nm:size-4 nm:items-center nm:justify-center">
              <Check className="nm:size-4" />
            </span>
          )}
          {children}
        </>
      ))}
    </AriaListBoxItem>
  );
};

function ListBoxHeader({
  className,
  ...props
}: React.ComponentProps<typeof AriaHeader>) {
  return (
    <AriaHeader
      className={cn(
        "nm:py-1.5 nm:pl-8 nm:pr-2 nm:text-sm nm:font-semibold",
        className
      )}
      {...props}
    />
  );
}

export {
  ListBox,
  ListBoxItem,
  ListBoxHeader,
  ListBoxSection,
  ListBoxCollection,
};
