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
        "nm:z-50 nm:rounded-md nm:border nm:bg-popover nm:text-popover-foreground nm:shadow-md nm:outline-none",
        /* Entering */
        "nm:data-[entering]:animate-in nm:data-[entering]:fade-in-0 nm:data-[entering]:zoom-in-95",
        /* Exiting */
        "nm:data-[exiting]:animate-out nm:data-[exiting]:fade-out-0 nm:data-[exiting]:zoom-out-95",
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
      className={cn("nm:p-4 nm:outline nm:outline-0", className)}
      {...props}
    />
  );
}

export { Popover, PopoverTrigger, PopoverDialog };
