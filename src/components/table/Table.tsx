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
        "nm:w-full nm:caption-bottom nm:text-sm nm:-outline-offset-2 nm:data-[focus-visible]:outline-ring",
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
      cn("nm:[&_tr]:border-b", className)
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
        "nm:h-12 nm:text-left nm:align-middle nm:font-medium nm:text-table-header-fg nm:-outline-offset-2 nm:data-focus-visible:outline-ring",
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
            "nm:flex nm:h-10 nm:flex-1 nm:items-center nm:gap-1 nm:overflow-hidden nm:rounded-md nm:px-4",
            allowsSorting &&
              "nm:p-2 nm:data-hovered:bg-table-column-sortable-hover-bg nm:data-hovered:text-table-column-sortable-hover-fg",
            "nm:focus-visible:outline-none nm:data-focus-visible:-outline-offset-2 nm:data-focus-visible:outline-ring nm:[&:has([slot=selection])]:pr-0"
          )}
        >
          <span className="nm:truncate">{children}</span>
          {allowsSorting && <ArrowUpDown className="nm:ml-2 nm:size-4" />}
        </Group>
        {props.isResizable && (
          <ColumnResizer className="nm:box-content nm:h-5 nm:w-px nm:translate-x-[8px] nm:cursor-col-resize nm:rounded nm:bg-table-resizer-bg nm:bg-clip-content nm:px-[8px] nm:py-1 nm:focus-visible:outline-none nm:data-[resizing]:w-[2px] nm:data-[resizing]:bg-table-resizer-active-bg nm:data-[resizing]:pl-[7px] nm:data-[focus-visible]:ring-1 nm:data-[focus-visible]:ring-ring" />
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
        "nm:-outline-offset-2 nm:data-[empty]:h-24 nm:data-[empty]:text-center nm:data-[focus-visible]:outline-ring nm:[&_tr:last-child]:border-0",
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
        "nm:border-b nm:-outline-offset-2 nm:transition-colors nm:data-[hovered]:bg-table-row-hover-bg nm:data-[selected]:bg-table-row-selected-bg nm:data-[focus-visible]:outline-ring",
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
        "nm:p-4 nm:align-middle nm:-outline-offset-2 nm:data-[focus-visible]:outline-ring nm:[&:has([role=checkbox])]:pr-0",
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
