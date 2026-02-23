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
        /* Layout */
        "nm:w-full nm:caption-bottom",
        /* Typography - Using Design Tokens */
        "nm:text-table nm:leading-table",
        /* Focus Ring - Using Design Token */
        "nm:-outline-offset-2 nm:data-focus-visible:outline-table-focus-ring",
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
        /* Border - Using Design Token */
        "nm:[&_tr]:border-b nm:[&_tr]:border-b-table-header-width nm:[&_tr]:border-table-header-border",
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
        /* Sizing - Using Design Token */
        "nm:h-table-header-height",
        /* Spacing - Using Design Tokens */
        "nm:px-table-column-x nm:py-table-column-y",
        /* Typography - Using Design Tokens */
        "nm:text-left nm:align-middle nm:font-table-header nm:text-table-header-fg",
        /* Focus Ring - Using Design Token */
        "nm:-outline-offset-2 nm:data-focus-visible:outline-table-focus-ring",
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
            /* Sizing & Spacing - Using Design Tokens */
            "nm:h-table-column-group-height nm:gap-table-column-group-gap nm:rounded-table-column-group nm:px-table-column-group-x",
            /* Sortable Hover State */
            allowsSorting &&
              "nm:p-table-column-group-y nm:data-hovered:bg-table-column-sortable-hover-bg nm:data-hovered:text-table-column-sortable-hover-fg",
            /* Focus Ring */
            "nm:focus-visible:outline-none nm:data-focus-visible:-outline-offset-2 nm:data-focus-visible:outline-table-focus-ring nm:[&:has([slot=selection])]:pr-0"
          )}
        >
          <span className="nm:truncate">{children}</span>
          {allowsSorting && (
            <ArrowUpDown className="nm:ml-table-column-icon-ml nm:size-table-column-icon" />
          )}
        </Group>
        {props.isResizable && (
          <ColumnResizer className="nm:box-content nm:h-table-resizer-height nm:w-table-resizer-width nm:translate-x-table-resizer-translate-x nm:cursor-col-resize nm:rounded-table-resizer nm:bg-table-resizer-bg nm:bg-clip-content nm:px-table-resizer-x nm:py-table-resizer-y nm:focus-visible:outline-none nm:data-resizing:w-0.5 nm:data-resizing:bg-table-resizer-active-bg nm:data-resizing:pl-[--nm-table-resizer-active-padding-left] nm:data-focus-visible:ring-table-resizer-width nm:data-focus-visible:ring-ring" />
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
        /* Focus Ring - Using Design Token */
        "nm:-outline-offset-2 nm:data-focus-visible:outline-table-focus-ring",
        /* Empty State - Using Design Token */
        "nm:data-empty:h-table-body-empty-height nm:data-empty:text-center",
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
        "nm:border-b nm:border-b-table-row-border-color ",
        /* Transition */
        "nm:transition-colors",
        /* States - Using Design Tokens */
        "nm:data-hovered:bg-table-row-hover-bg nm:data-selected:bg-table-row-selected-bg",
        /* Focus Ring - Using Design Token */
        "nm:-outline-offset-2 nm:data-focus-visible:outline-table-focus-ring",
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
        /* Focus Ring - Using Design Token */
        "nm:-outline-offset-2 nm:data-focus-visible:outline-table-focus-ring",
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
