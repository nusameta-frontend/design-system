import { ArrowUpDown } from "lucide-react";
import {
  Cell as AriaCell,
  Column as AriaColumn,
  ColumnProps as AriaColumnProps,
  ResizableTableContainer as AriaResizableTableContainer,
  Row as AriaRow,
  Table as AriaTable,
  TableBody as AriaTableBody,
  TableHeader as AriaTableHeader,
  CellProps,
  ColumnResizer,
  composeRenderProps,
  Group,
  ResizableTableContainerProps,
  RowProps,
  TableBodyProps,
  TableHeaderProps,
  TableProps,
} from "react-aria-components";

import { cn } from "@/lib/utils";

import { buttonVariants } from "../button/Button";

const ResizableTableContainer = AriaResizableTableContainer;

const Table = ({ className, ...props }: TableProps) => (
  <AriaTable
    className={composeRenderProps(className, (className) =>
      cn(
        "nm-w-full nm-caption-bottom nm-text-sm -nm-outline-offset-2 data-[focus-visible]:nm-outline-ring",
        className
      )
    )}
    {...props}
  />
);

const TableHeader = <T extends object>({
  className,
  ...props
}: TableHeaderProps<T>) => (
  <AriaTableHeader
    className={composeRenderProps(className, (className) =>
      cn("[&_tr]:nm-border-b", className)
    )}
    {...props}
  />
);

export interface ColumnProps extends AriaColumnProps {
  isResizable?: boolean;
}

const Column = ({ className, children, ...props }: ColumnProps) => (
  <AriaColumn
    className={composeRenderProps(className, (className) =>
      cn(
        "nm-h-12 nm-text-left nm-align-middle nm-font-medium nm-text-muted-foreground -nm-outline-offset-2 data-[focus-visible]:nm-outline-ring",
        className
      )
    )}
    {...props}
  >
    {composeRenderProps(children, (children, { allowsSorting }) => (
      <div className="nm-flex nm-items-center">
        <Group
          role="presentation"
          tabIndex={-1}
          className={cn(
            "nm-flex nm-h-10 nm-flex-1 nm-items-center nm-gap-1 nm-overflow-hidden nm-rounded-md nm-px-4",
            allowsSorting &&
              "nm-p-2 data-[hovered]:nm-bg-accent data-[hovered]:nm-text-accent-foreground",
            "focus-visible:nm-outline-none  data-[focus-visible]:-nm-outline-offset-2 data-[focus-visible]:nm-outline-ring [&:has([slot=selection])]:nm-pr-0"
          )}
        >
          <span className="nm-truncate">{children}</span>
          {allowsSorting && <ArrowUpDown className="nm-ml-2 nm-size-4" />}
        </Group>
        {props.isResizable && (
          <ColumnResizer className="data-[focus-visible]:nm-ring-rin nm-box-content nm-h-5 nm-w-px nm-translate-x-[8px] nm-cursor-col-resize nm-rounded nm-bg-muted-foreground nm-bg-clip-content nm-px-[8px]  nm-py-1 focus-visible:nm-outline-none data-[resizing]:nm-w-[2px] data-[resizing]:nm-bg-primary data-[resizing]:nm-pl-[7px] data-[focus-visible]:nm-ring-1  data-[focus-visible]:nm-ring-ring" />
        )}
      </div>
    ))}
  </AriaColumn>
);

const TableBody = <T extends object>({
  className,
  ...props
}: TableBodyProps<T>) => (
  <AriaTableBody
    className={composeRenderProps(className, (className) =>
      cn(
        "-nm-outline-offset-2 data-[empty]:nm-h-24 data-[empty]:nm-text-center data-[focus-visible]:nm-outline-ring [&_tr:last-child]:nm-border-0",
        className
      )
    )}
    {...props}
  />
);

const Row = <T extends object>({ className, ...props }: RowProps<T>) => (
  <AriaRow
    className={composeRenderProps(className, (className, renderProps) =>
      cn(
        "nm-border-b -nm-outline-offset-2 nm-transition-colors data-[hovered]:nm-bg-muted/50 data-[focus-visible]:nm-outline-ring",
        renderProps.isSelected
          ? "nm-bg-table-row-selected-highlight/10 data-[hovered]:nm-bg-table-row-selected-highlight-hover/15"
          : "data-[selected]:nm-bg-muted",
        className
      )
    )}
    {...props}
  />
);

const Cell = ({ className, ...props }: CellProps) => (
  <AriaCell
    className={composeRenderProps(className, (className) =>
      cn(
        "nm-p-4 nm-align-middle -nm-outline-offset-2 data-[focus-visible]:nm-outline-ring [&:has([role=checkbox])]:nm-pr-0",
        className
      )
    )}
    {...props}
  />
);

export {
  Table,
  TableHeader,
  Column,
  TableBody,
  Row,
  Cell,
  ResizableTableContainer,
};
