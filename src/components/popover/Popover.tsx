import * as React from "react";
import {
  Dialog as AriaDialog,
  DialogProps as AriaDialogProps,
  DialogTrigger as AriaDialogTrigger,
  Popover as AriaPopover,
  PopoverProps as AriaPopoverProps,
  composeRenderProps,
} from "react-aria-components";

import { cn } from "@/lib/utils";

const PopoverTrigger = AriaDialogTrigger;

const Popover = ({ className, offset = 4, ...props }: AriaPopoverProps) => (
  <AriaPopover
    offset={offset}
    className={composeRenderProps(className, (className) =>
      cn(
        /* Layout & Display */
        "nm:outline-none",
        /* Z-Index - Using Design Token */
        "nm:z-popover",
        /* Border & Radius - Using Design Tokens */
        "nm:rounded-popover nm:border nm:border-popover-border",
        /* Colors - Using Design Tokens */
        "nm:bg-popover-bg nm:text-popover-fg",
        /* Shadow - Using Design Token */
        "nm:shadow-popover",
        /* Entering */
        "nm:data-entering:animate-in nm:data-entering:fade-in-0 nm:data-entering:zoom-in-95",
        /* Exiting */
        "nm:data-exiting:animate-out nm:data-exiting:fade-out-0 nm:data-exiting:zoom-out-95",
        /* Placement */
        "nm:data-[placement=bottom]:slide-in-from-top-2 nm:data-[placement=left]:slide-in-from-right-2 nm:data-[placement=right]:slide-in-from-left-2 nm:data-[placement=top]:slide-in-from-bottom-2",
        className
      )
    )}
    {...props}
  />
);

function PopoverDialog({ className, ...props }: AriaDialogProps) {
  return (
    <AriaDialog
      className={cn(
        /* Layout & Display */
        "nm:outline-0",
        /* Spacing - Using Design Tokens */
        "nm:p-popover-dialog nm:gap-popover-dialog-gap",
        /* Sizing - Using Design Tokens */
        "nm:min-w-popover-dialog-min-width nm:max-w-popover-dialog-max-width nm:min-h-popover-dialog-min-height nm:max-h-popover-dialog-max-height",
        /* Colors - Using Design Tokens */
        "nm:bg-popover-dialog-bg nm:text-popover-dialog-fg",
        /* Border - Using Design Tokens */
        "nm:rounded-popover-dialog nm:border-popover-dialog-border",
        /* Shadow - Using Design Token */
        "nm:shadow-popover-dialog",
        className
      )}
      {...props}
    />
  );
}

export { Popover, PopoverTrigger, PopoverDialog };
