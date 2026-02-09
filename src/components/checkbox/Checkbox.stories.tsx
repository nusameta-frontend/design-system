import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    children: "Accept terms and conditions",
  },
};

export const Checked: Story = {
  args: {
    children: "Accept terms and conditions",
    defaultSelected: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Accept terms and conditions",
    isDisabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    children: "Accept terms and conditions",
    isDisabled: true,
    defaultSelected: true,
  },
};

export const Indeterminate: Story = {
  args: {
    children: "Select all",
    isIndeterminate: true,
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const AllStates: Story = {
  render: () => (
    <div className="nm-flex nm-flex-col nm-gap-4">
      <Checkbox>Unchecked</Checkbox>
      <Checkbox defaultSelected>Checked</Checkbox>
      <Checkbox isIndeterminate>Indeterminate</Checkbox>
      <Checkbox isDisabled>Disabled</Checkbox>
      <Checkbox isDisabled defaultSelected>
        Disabled Checked
      </Checkbox>
    </div>
  ),
};
