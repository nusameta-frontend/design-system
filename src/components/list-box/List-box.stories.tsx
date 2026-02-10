import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import type { Selection } from "react-aria-components";
import {
  ListBox,
  ListBoxItem,
  ListBoxHeader,
  ListBoxSection,
} from "./List-box";

const meta: Meta<typeof ListBox> = {
  title: "Components/ListBox",
  component: ListBox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Default: Story = {
  render: () => (
    <div className="nm:w-[280px]">
      <ListBox aria-label="Fruits">
        <ListBoxItem id="apple">Apple</ListBoxItem>
        <ListBoxItem id="banana">Banana</ListBoxItem>
        <ListBoxItem id="orange">Orange</ListBoxItem>
        <ListBoxItem id="strawberry">Strawberry</ListBoxItem>
        <ListBoxItem id="grape">Grape</ListBoxItem>
      </ListBox>
    </div>
  ),
};

export const WithSections: Story = {
  render: () => (
    <div className="nm:w-[280px]">
      <ListBox aria-label="Foods">
        <ListBoxSection>
          <ListBoxHeader>Fruits</ListBoxHeader>
          <ListBoxItem id="apple">Apple</ListBoxItem>
          <ListBoxItem id="banana">Banana</ListBoxItem>
          <ListBoxItem id="orange">Orange</ListBoxItem>
        </ListBoxSection>
        <ListBoxSection>
          <ListBoxHeader>Vegetables</ListBoxHeader>
          <ListBoxItem id="carrot">Carrot</ListBoxItem>
          <ListBoxItem id="broccoli">Broccoli</ListBoxItem>
          <ListBoxItem id="spinach">Spinach</ListBoxItem>
        </ListBoxSection>
      </ListBox>
    </div>
  ),
};

export const SingleSelection: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Selection>(new Set(["apple"]));

    return (
      <div className="nm:w-[280px] nm:flex nm:flex-col nm:gap-4">
        <ListBox
          aria-label="Fruits"
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <ListBoxItem id="apple">Apple</ListBoxItem>
          <ListBoxItem id="banana">Banana</ListBoxItem>
          <ListBoxItem id="orange">Orange</ListBoxItem>
          <ListBoxItem id="strawberry">Strawberry</ListBoxItem>
          <ListBoxItem id="grape">Grape</ListBoxItem>
        </ListBox>
        <div className="nm:text-sm nm:text-muted-foreground">
          Selected: {Array.from(selected).join(", ")}
        </div>
      </div>
    );
  },
};

export const MultipleSelection: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Selection>(
      new Set(["apple", "banana"])
    );

    return (
      <div className="nm:w-[280px] nm:flex nm:flex-col nm:gap-4">
        <ListBox
          aria-label="Fruits"
          selectionMode="multiple"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <ListBoxItem id="apple">Apple</ListBoxItem>
          <ListBoxItem id="banana">Banana</ListBoxItem>
          <ListBoxItem id="orange">Orange</ListBoxItem>
          <ListBoxItem id="strawberry">Strawberry</ListBoxItem>
          <ListBoxItem id="grape">Grape</ListBoxItem>
        </ListBox>
        <div className="nm:text-sm nm:text-muted-foreground">
          Selected: {Array.from(selected).join(", ")}
        </div>
      </div>
    );
  },
};

export const DisabledItems: Story = {
  render: () => (
    <div className="nm:w-[280px]">
      <ListBox
        aria-label="Fruits"
        selectionMode="single"
        disabledKeys={["orange", "grape"]}
      >
        <ListBoxItem id="apple">Apple</ListBoxItem>
        <ListBoxItem id="banana">Banana</ListBoxItem>
        <ListBoxItem id="orange">Orange (Disabled)</ListBoxItem>
        <ListBoxItem id="strawberry">Strawberry</ListBoxItem>
        <ListBoxItem id="grape">Grape (Disabled)</ListBoxItem>
      </ListBox>
    </div>
  ),
};

export const Empty: Story = {
  render: () => (
    <div className="nm:w-[280px]">
      <ListBox aria-label="Empty list" renderEmptyState={() => "No items"}>
        {[]}
      </ListBox>
    </div>
  ),
};

export const Dynamic: Story = {
  render: () => {
    const items = [
      { id: 1, name: "Apple", category: "Fruit" },
      { id: 2, name: "Banana", category: "Fruit" },
      { id: 3, name: "Carrot", category: "Vegetable" },
      { id: 4, name: "Broccoli", category: "Vegetable" },
    ];

    return (
      <div className="nm:w-[280px]">
        <ListBox aria-label="Foods" items={items} selectionMode="single">
          {(item) => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
        </ListBox>
      </div>
    );
  },
};
