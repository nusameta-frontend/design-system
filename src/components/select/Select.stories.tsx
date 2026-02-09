import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectPopover,
  SelectListBox,
  SelectItem,
  ComposedSelect,
} from "@/components/select/Select";
import { Label } from "@/components/textfield/Field";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" },
  { id: 4, name: "Strawberry" },
  { id: 5, name: "Grape" },
];

export const Default: Story = {
  render: () => (
    <div className="nm-w-[280px]">
      <Select placeholder="Select a fruit">
        <Label>Favorite Fruit</Label>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectPopover>
          <SelectListBox>
            <SelectItem id="apple">Apple</SelectItem>
            <SelectItem id="banana">Banana</SelectItem>
            <SelectItem id="orange">Orange</SelectItem>
            <SelectItem id="strawberry">Strawberry</SelectItem>
            <SelectItem id="grape">Grape</SelectItem>
          </SelectListBox>
        </SelectPopover>
      </Select>
    </div>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <div className="nm-w-[280px]">
      <Select defaultSelectedKey="banana" placeholder="Select a fruit">
        <Label>Favorite Fruit</Label>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectPopover>
          <SelectListBox>
            <SelectItem id="apple">Apple</SelectItem>
            <SelectItem id="banana">Banana</SelectItem>
            <SelectItem id="orange">Orange</SelectItem>
            <SelectItem id="strawberry">Strawberry</SelectItem>
            <SelectItem id="grape">Grape</SelectItem>
          </SelectListBox>
        </SelectPopover>
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="nm-w-[280px]">
      <Select isDisabled placeholder="Select a fruit">
        <Label>Favorite Fruit</Label>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectPopover>
          <SelectListBox>
            <SelectItem id="apple">Apple</SelectItem>
            <SelectItem id="banana">Banana</SelectItem>
          </SelectListBox>
        </SelectPopover>
      </Select>
    </div>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <div className="nm-w-[280px]">
      <Select placeholder="Select a fruit" disabledKeys={["orange"]}>
        <Label>Favorite Fruit</Label>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectPopover>
          <SelectListBox>
            <SelectItem id="apple">Apple</SelectItem>
            <SelectItem id="banana">Banana</SelectItem>
            <SelectItem id="orange">Orange (Disabled)</SelectItem>
            <SelectItem id="strawberry">Strawberry</SelectItem>
            <SelectItem id="grape">Grape</SelectItem>
          </SelectListBox>
        </SelectPopover>
      </Select>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<string>("apple");

    return (
      <div className="nm-w-[280px] nm-flex nm-flex-col nm-gap-4">
        <Select
          selectedKey={selected}
          onSelectionChange={(key) => setSelected(key as string)}
          placeholder="Select a fruit"
        >
          <Label>Favorite Fruit</Label>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectPopover>
            <SelectListBox>
              <SelectItem id="apple">Apple</SelectItem>
              <SelectItem id="banana">Banana</SelectItem>
              <SelectItem id="orange">Orange</SelectItem>
              <SelectItem id="strawberry">Strawberry</SelectItem>
              <SelectItem id="grape">Grape</SelectItem>
            </SelectListBox>
          </SelectPopover>
        </Select>
        <div className="nm-text-sm nm-text-muted-foreground">
          Selected: {selected}
        </div>
      </div>
    );
  },
};

export const ComposedSelectExample: Story = {
  render: () => (
    <div className="nm-w-[280px]">
      <ComposedSelect
        label="Favorite Fruit"
        description="Choose your favorite fruit"
        placeholder="Select a fruit"
        items={fruits}
      >
        {(item) => <SelectItem id={item.id}>{item.name}</SelectItem>}
      </ComposedSelect>
    </div>
  ),
};

export const WithValidation: Story = {
  render: () => (
    <div className="nm-w-[280px]">
      <ComposedSelect
        label="Favorite Fruit"
        placeholder="Select a fruit"
        isRequired
        errorMessage="Please select a fruit"
      >
        <SelectItem id="apple">Apple</SelectItem>
        <SelectItem id="banana">Banana</SelectItem>
        <SelectItem id="orange">Orange</SelectItem>
      </ComposedSelect>
    </div>
  ),
};
