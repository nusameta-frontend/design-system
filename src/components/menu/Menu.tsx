"use client";

import * as React from "react";
import { VariantProps } from "class-variance-authority";
import { Check, ChevronRight, Circle } from "lucide-react";
import {
  Header as AriaHeader,
  Keyboard as AriaKeyboard,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuItemProps as AriaMenuItemProps,
  MenuProps as AriaMenuProps,
  MenuTrigger as AriaMenuTrigger,
  MenuTriggerProps as AriaMenuTriggerProps,
  Separator as AriaSeparator,
  SeparatorProps as AriaSeparatorProps,
  SubmenuTrigger as AriaSubmenuTrigger,
  composeRenderProps,
  PopoverProps,
} from "react-aria-components";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "../button/Button";
import { ListBoxCollection, ListBoxSection } from "../list-box/List-box";
import { SelectPopover } from "../select/Select";

const MenuTrigger = AriaMenuTrigger;

const MenuSubTrigger = AriaSubmenuTrigger;

const MenuSection = ListBoxSection;

const MenuCollection = ListBoxCollection;

function MenuPopover({ className, ...props }: PopoverProps) {
  return (
    <SelectPopover
      className={composeRenderProps(className, (className) =>
        cn("nm:w-auto", className)
      )}
      {...props}
    />
  );
}

const Menu = <T extends object>({ className, ...props }: AriaMenuProps<T>) => (
  <AriaMenu
    className={cn(
      "nm:max-h-[inherit] nm:overflow-auto nm:rounded-md nm:p-1 nm:outline-0 [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]",
      className
    )}
    {...props}
  />
);

const MenuItem = ({ children, className, ...props }: AriaMenuItemProps) => (
  <AriaMenuItem
    textValue={
      props.textValue || (typeof children === "string" ? children : undefined)
    }
    className={composeRenderProps(className, (className) =>
      cn(
        "nm:relative nm:flex nm:cursor-default nm:select-none nm:items-center nm:gap-2 nm:rounded-sm nm:px-2 nm:py-1.5 nm:text-sm nm:outline-none nm:transition-colors",
        /* Disabled */
        "data-[disabled]:nm:pointer-events-none data-[disabled]:nm:opacity-50",
        /* Focused */
        "data-[focused]:nm:bg-accent data-[focused]:nm:text-accent-foreground ",
        /* Selection Mode */
        "data-[selection-mode]:nm:pl-8",
        className
      )
    )}
    {...props}
  >
    {composeRenderProps(children, (children, renderProps) => (
      <>
        <span className="nm:absolute nm:left-2 nm:flex nm:size-4 nm:items-center nm:justify-center">
          {renderProps.isSelected && (
            <>
              {renderProps.selectionMode == "single" && (
                <Circle className="nm:size-2 nm:fill-current" />
              )}
              {renderProps.selectionMode == "multiple" && (
                <Check className="nm:size-4" />
              )}
            </>
          )}
        </span>

        {children}

        {renderProps.hasSubmenu && (
          <ChevronRight className="nm:ml-auto nm:size-4" />
        )}
      </>
    ))}
  </AriaMenuItem>
);

interface MenuHeaderProps extends React.ComponentProps<typeof AriaHeader> {
  inset?: boolean;
  separator?: boolean;
}

const MenuHeader = ({
  className,
  inset,
  separator = true,
  ...props
}: MenuHeaderProps) => (
  <AriaHeader
    className={cn(
      "nm:px-3 nm:py-1.5 nm:text-sm nm:font-semibold",
      inset && "nm:pl-8",
      separator && "nm:-mx-1 nm:mb-1 nm:border-b nm:border-b-border nm:pb-2.5",
      className
    )}
    {...props}
  />
);

const MenuSeparator = ({ className, ...props }: AriaSeparatorProps) => (
  <AriaSeparator
    className={cn("nm:-mx-1 nm:my-1 nm:h-px nm:bg-muted", className)}
    {...props}
  />
);

const MenuKeyboard = ({
  className,
  ...props
}: React.ComponentProps<typeof AriaKeyboard>) => {
  return (
    <AriaKeyboard
      className={cn(
        "nm:ml-auto nm:text-xs nm:tracking-widest nm:opacity-60",
        className
      )}
      {...props}
    />
  );
};
interface MenuWrapperProps<T>
  extends AriaMenuProps<T>,
    VariantProps<typeof buttonVariants>,
    Omit<AriaMenuTriggerProps, "children"> {
  label?: string;
}
function MenuWrapper<T extends object>({
  label,
  children,
  variant,
  size,
  ...props
}: MenuWrapperProps<T>) {
  return (
    <MenuTrigger {...props}>
      <Button variant={variant} size={size}>
        {label}
      </Button>
      <MenuPopover className="nm:min-w-[--trigger-width]">
        <Menu {...props}>{children}</Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}

export {
  MenuTrigger,
  Menu,
  MenuPopover,
  MenuItem,
  MenuHeader,
  MenuSeparator,
  MenuKeyboard,
  MenuSection,
  MenuSubTrigger,
  MenuCollection,
  MenuWrapper,
};
export type { MenuHeaderProps, MenuWrapperProps };
