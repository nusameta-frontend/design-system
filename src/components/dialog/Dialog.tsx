import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import {
  Button as AriaButton,
  Dialog as AriaDialog,
  DialogProps as AriaDialogProps,
  DialogTrigger as AriaDialogTrigger,
  Heading as AriaHeading,
  HeadingProps as AriaHeadingProps,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  ModalOverlayProps as AriaModalOverlayProps,
  composeRenderProps,
} from "react-aria-components";

import { cn } from "@/lib/utils";

const Dialog = AriaDialog;

const sheetVariants = cva(
  [
    "nm:fixed nm:z-50 nm:gap-4 nm:bg-background nm:shadow-lg nm:transition nm:ease-in-out",
    /* Entering */
    "data-[entering]:nm:duration-500 data-[entering]:nm:animate-in",
    /* Exiting */
    "data-[exiting]:nm:duration-300  data-[exiting]:nm:animate-out",
  ],
  {
    variants: {
      side: {
        top: "nm:inset-x-0 nm:top-0 nm:border-b data-[entering]:nm:slide-in-from-top data-[exiting]:nm:slide-out-to-top",
        bottom:
          "nm:inset-x-0 nm:bottom-0 nm:border-t data-[entering]:nm:slide-in-from-bottom data-[exiting]:nm:slide-out-to-bottom",
        left: "nm:inset-y-0 nm:left-0 nm:h-full nm:w-3/4 nm:border-r data-[entering]:nm:slide-in-from-left data-[exiting]:nm:slide-out-to-left sm:nm:max-w-sm",
        right:
          "nm:inset-y-0 nm:right-0 nm:h-full nm:w-3/4  nm:border-l data-[entering]:nm:slide-in-from-right data-[exiting]:nm:slide-out-to-right sm:nm:max-w-sm",
      },
    },
  }
);

const DialogTrigger = AriaDialogTrigger;

const DialogOverlay = ({
  className,
  isDismissable = true,
  ...props
}: AriaModalOverlayProps) => (
  <AriaModalOverlay
    isDismissable={isDismissable}
    className={composeRenderProps(className, (className) =>
      cn(
        "nm:fixed nm:inset-0 nm:z-50 nm:bg-black/80",
        /* Exiting */
        "data-[exiting]:nm:duration-300 data-[exiting]:nm:animate-out data-[exiting]:nm:fade-out-0",
        /* Entering */
        "data-[entering]:nm:animate-in data-[entering]:nm:fade-in-0",
        className
      )
    )}
    {...props}
  />
);

interface DialogContentProps
  extends Omit<React.ComponentProps<typeof AriaModal>, "children">,
    VariantProps<typeof sheetVariants> {
  children?: AriaDialogProps["children"];
  role?: AriaDialogProps["role"];
  closeButton?: boolean;
}

const DialogContent = ({
  className,
  children,
  side,
  role,
  closeButton = true,
  ...props
}: DialogContentProps) => (
  <AriaModal
    className={composeRenderProps(className, (className) =>
      cn(
        side
          ? sheetVariants({ side, className: "nm:h-full nm:p-6" })
          : "nm:fixed nm:left-[50vw] nm:top-1/2 nm:z-50 nm:w-full nm:max-w-lg nm:-translate-x-1/2 nm:-translate-y-1/2 nm:border nm:bg-background nm:p-6 nm:shadow-lg nm:duration-200 data-[exiting]:nm:duration-300 data-[entering]:nm:animate-in data-[exiting]:nm:animate-out data-[entering]:nm:fade-in-0 data-[exiting]:nm:fade-out-0 data-[entering]:nm:zoom-in-95 data-[exiting]:nm:zoom-out-95 data-[entering]:nm:slide-in-from-left-1/2 data-[entering]:nm:slide-in-from-top-[48%] data-[exiting]:nm:slide-out-to-left-1/2 data-[exiting]:nm:slide-out-to-top-[48%] sm:nm:rounded-lg md:nm:w-full",
        className
      )
    )}
    {...props}
  >
    <AriaDialog
      role={role}
      className={cn(
        !side && "nm:grid nm:h-full nm:gap-4",
        "nm:h-full nm:outline-none"
      )}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          {children}
          {closeButton && (
            <AriaButton
              onPress={renderProps.close}
              className="nm:absolute nm:right-4 nm:top-4 nm:rounded-sm nm:opacity-70 nm:ring-offset-background nm:transition-opacity data-[disabled]:nm:pointer-events-none data-[entering]:nm:bg-accent data-[entering]:nm:text-muted-foreground data-[hovered]:nm:opacity-100 data-[focused]:nm:outline-none data-[focused]:nm:ring-2 data-[focused]:nm:ring-ring data-[focused]:nm:ring-offset-2"
            >
              <X className="nm:size-4" />
              <span className="nm:sr-only">Close</span>
            </AriaButton>
          )}
        </>
      ))}
    </AriaDialog>
  </AriaModal>
);

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "nm:flex nm:flex-col nm:space-y-1.5 nm:text-center sm:nm:text-left",
      className
    )}
    {...props}
  />
);

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "nm:flex nm:flex-col-reverse sm:nm:flex-row sm:nm:justify-end sm:nm:space-x-2",
      className
    )}
    {...props}
  />
);

const DialogTitle = ({ className, ...props }: AriaHeadingProps) => (
  <AriaHeading
    slot="title"
    className={cn(
      "nm:text-lg nm:font-semibold nm:leading-none nm:tracking-tight",
      className
    )}
    {...props}
  />
);

const DialogDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn(
      "nm:flex nm:flex-col nm:space-y-1.5 nm:text-center sm:nm:text-left",
      className
    )}
    {...props}
  />
);

export {
  Dialog,
  DialogOverlay,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
};
export type { DialogContentProps };
