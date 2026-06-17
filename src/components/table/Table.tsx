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
  RowProps,
  TableBodyProps,
  TableHeaderProps,
  TableProps,
} from "react-aria-components";

import { cn } from "@/lib/utils";

const ResizableTableContainer = AriaResizableTableContainer;

const Table = ({ className, ...props }: TableProps) => (
  <AriaTable
    className={composeRenderProps(className, (className) =>
      cn(
        /* Layout */
        "nm:w-full nm:caption-bottom",
        /* Typography */
        "nm:text-sm nm:leading-5",
        /* Focus Ring */
        "nm:-outline-offset-2 nm:data-focus-visible:outline-ring",
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
      cn(
        /* Border */
        "nm:[&_tr]:border-b nm:[&_tr]:border-neutral-200",
        className
      )
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
        /* Sizing */
        "nm:h-12",
        /* Spacing - Using Design Tokens */
        "nm:px-table-column-x nm:py-table-column-y",
        /* Typography */
        "nm:text-left nm:align-middle nm:font-medium nm:text-muted-foreground",
        /* Focus Ring */
        "nm:-outline-offset-2 nm:data-focus-visible:outline-ring",
        className
      )
    )}
    {...props}
  >
    {composeRenderProps(children, (children, { allowsSorting }) => (
      <div className="nm:flex nm:items-center">
        <Group
          role="presentation"
          tabIndex={-1}
          className={cn(
            /* Layout */
            "nm:flex nm:flex-1 nm:items-center nm:overflow-hidden",
            /* Sizing & Spacing */
            "nm:h-10 nm:gap-1 nm:rounded-md nm:px-4",
            /* Sortable Hover State */
            allowsSorting &&
              "nm:p-2 nm:data-hovered:bg-accent nm:data-hovered:text-accent-foreground",
            /* Focus Ring */
            "nm:focus-visible:outline-none nm:data-focus-visible:-outline-offset-2 nm:data-focus-visible:outline-ring nm:[&:has([slot=selection])]:pr-0"
          )}
        >
          <span className="nm:truncate">{children}</span>
          {allowsSorting && <ArrowUpDown className="nm:ml-2 nm:size-4" />}
        </Group>
        {props.isResizable && (
          <ColumnResizer className="nm:box-content nm:h-5 nm:w-px nm:translate-x-2 nm:cursor-col-resize nm:rounded-sm nm:bg-muted-foreground nm:bg-clip-content nm:px-2 nm:py-0 nm:focus-visible:outline-none nm:data-resizing:w-0.5 nm:data-resizing:bg-primary nm:data-resizing:pl-1.5 nm:data-focus-visible:ring-1 nm:data-focus-visible:ring-ring" />
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
        /* Focus Ring */
        "nm:-outline-offset-2 nm:data-focus-visible:outline-ring",
        /* Empty State */
        "nm:data-empty:h-24 nm:data-empty:text-center",
        /* Last Row Border */
        "nm:[&_tr:last-child]:border-0",
        className
      )
    )}
    {...props}
  />
);

const Row = <T extends object>({ className, ...props }: RowProps<T>) => (
  <AriaRow
    className={composeRenderProps(className, (className) =>
      cn(
        /* Border - Using Design Token */
        "nm:border-b nm:border-b-table-row-border-color",
        /* Transition */
        "nm:transition-colors",
        /* States */
        "nm:data-hovered:bg-muted/50 nm:data-selected:bg-muted",
        /* Focus Ring */
        "nm:-outline-offset-2 nm:data-focus-visible:outline-ring",
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
        /* Spacing - Using Design Token */
        "nm:px-table-cell-x nm:py-table-cell-y",
        /* Alignment */
        "nm:align-middle",
        /* Focus Ring */
        "nm:-outline-offset-2 nm:data-focus-visible:outline-ring",
        /* Checkbox Cell */
        "nm:[&:has([role=checkbox])]:pr-0",
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
