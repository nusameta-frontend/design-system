import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";
import type { SortDescriptor, Key } from "@react-types/shared";
import {
  Table,
  TableHeader,
  Column,
  TableBody,
  Row,
  Cell,
  ResizableTableContainer,
} from "./Table";

// --- Mock Data ---
const users = [
  { id: 1, name: "John Doe", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", role: "User", status: "Inactive" },
  { id: 3, name: "Bob Johnson", role: "Editor", status: "Active" },
  { id: 4, name: "Alice Brown", role: "User", status: "Active" },
  { id: 5, name: "Charlie Wilson", role: "Admin", status: "Inactive" },
];

// --- Meta Configuration ---
const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    "aria-label": "Users Table",
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// --- 1. Default Story ---
export const Default: Story = {
  render: (args) => (
    <div className="nm:w-150 nm:border nm:rounded-md">
      <Table {...args}>
        <TableHeader>
          <Column isRowHeader>Name</Column>
          <Column>Role</Column>
          <Column>Status</Column>
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <Row>
              <Cell>{item.name}</Cell>
              <Cell>{item.role}</Cell>
              <Cell>{item.status}</Cell>
            </Row>
          )}
        </TableBody>
      </Table>
    </div>
  ),
};

// --- 2. Sorting Story ---
export const Sortable: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [list, setList] = useState(users);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [descriptor, setDescriptor] = useState<SortDescriptor>({
      column: "name",
      direction: "ascending",
    });

    const sort = ({ column, direction }: any) => {
      const sorted = [...list].sort((a, b) => {
        const first = a[column as keyof typeof a];
        const second = b[column as keyof typeof b];
        let cmp = first < second ? -1 : 1;
        if (direction === "descending") {
          cmp *= -1;
        }
        return cmp;
      });
      setDescriptor({ column, direction });
      setList(sorted);
    };

    return (
      <div className="nm:w-150 nm:border nm:rounded-md">
        <Table {...args} sortDescriptor={descriptor} onSortChange={sort}>
          <TableHeader>
            <Column id="name" isRowHeader allowsSorting>
              Name
            </Column>
            <Column id="role" allowsSorting>
              Role
            </Column>
            <Column id="status" allowsSorting>
              Status
            </Column>
          </TableHeader>
          <TableBody items={list}>
            {(item) => (
              <Row>
                <Cell>{item.name}</Cell>
                <Cell>{item.role}</Cell>
                <Cell>{item.status}</Cell>
              </Row>
            )}
          </TableBody>
        </Table>
      </div>
    );
  },
};

// --- 3. Selection Story ---
export const Selection: Story = {
  args: {
    selectionMode: "multiple",
    selectionBehavior: "toggle",
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set());

    return (
      <div className="nm:w-150 nm:border nm:rounded-md nm:flex nm:flex-col nm:gap-2">
        <div className="nm:p-2 nm:text-sm nm:text-muted-foreground">
          {selectedKeys.size === 0
            ? "No rows selected"
            : `Selected IDs: ${Array.from(selectedKeys).join(", ")}`}
        </div>

        <Table
          {...args}
          selectedKeys={selectedKeys}
          onSelectionChange={(keys) => {
            if (keys === "all") {
              setSelectedKeys(new Set(users.map((u) => u.id)));
            } else {
              setSelectedKeys(keys as Set<Key>);
            }
          }}
        >
          <TableHeader>
            <Column isRowHeader>Name</Column>
            <Column>Role</Column>
            <Column>Status</Column>
          </TableHeader>
          <TableBody items={users}>
            {(item) => (
              <Row id={item.id}>
                <Cell>{item.name}</Cell>
                <Cell>{item.role}</Cell>
                <Cell>{item.status}</Cell>
              </Row>
            )}
          </TableBody>
        </Table>
      </div>
    );
  },
};

// --- 4. Resizable Story ---
export const Resizable: Story = {
  render: (args) => (
    <div className="nm:w-150 nm:border nm:rounded-md">
      <ResizableTableContainer>
        <Table {...args}>
          <TableHeader>
            <Column isResizable>Name (Resizable)</Column>
            <Column isResizable>Role (Resizable)</Column>
            <Column isResizable>Status (Resizable)</Column>
          </TableHeader>
          <TableBody items={users}>
            {(item) => (
              <Row>
                <Cell>{item.name}</Cell>
                <Cell>{item.role}</Cell>
                <Cell>{item.status}</Cell>
              </Row>
            )}
          </TableBody>
        </Table>
      </ResizableTableContainer>
    </div>
  ),
};
