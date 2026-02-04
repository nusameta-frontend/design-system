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
        "nm-z-50 nm-rounded-md nm-border nm-bg-popover nm-text-popover-foreground nm-shadow-md nm-outline-none",
        /* Entering */
        "data-[entering]:nm-animate-in data-[entering]:nm-fade-in-0 data-[entering]:nm-zoom-in-95",
        /* Exiting */
        "data-[exiting]:nm-animate-out data-[exiting]:nm-fade-out-0 data-[exiting]:nm-zoom-out-95",
        /* Placement */
        "data-[placement=bottom]:nm-slide-in-from-top-2 data-[placement=left]:nm-slide-in-from-right-2 data-[placement=right]:nm-slide-in-from-left-2 data-[placement=top]:nm-slide-in-from-bottom-2",
        className
      )
    )}
    {...props}
  />
);

function PopoverDialog({ className, ...props }: AriaDialogProps) {
  return (
    <AriaDialog
      className={cn("nm-p-4 nm-outline nm-outline-0", className)}
      {...props}
    />
  );
}

export { Popover, PopoverTrigger, PopoverDialog };
