import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button/Button";
import { Popover, PopoverTrigger, PopoverDialog } from "./Popover";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <PopoverTrigger>
      <Button>Open Popover</Button>
      <Popover>
        <PopoverDialog>
          <div className="nm-text-sm nm-font-medium">Popover Content</div>
          <p className="nm-text-xs nm-text-muted-foreground nm-mt-2">
            This is a simple popover component
          </p>
        </PopoverDialog>
      </Popover>
    </PopoverTrigger>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <PopoverTrigger>
      <Button>Settings</Button>
      <Popover>
        <PopoverDialog>
          <div className="nm-space-y-2">
            <h3 className="nm-font-semibold">Settings</h3>
            <p className="nm-text-sm nm-text-muted-foreground">
              Configure your preferences here
            </p>
          </div>
        </PopoverDialog>
      </Popover>
    </PopoverTrigger>
  ),
};

export const WithActions: Story = {
  render: () => (
    <PopoverTrigger>
      <Button>More Options</Button>
      <Popover>
        <PopoverDialog>
          <div className="nm-space-y-2">
            <button className="nm-w-full nm-text-left nm-px-2 nm-py-1 nm-text-sm nm-rounded hover:nm-bg-muted">
              Edit
            </button>
            <button className="nm-w-full nm-text-left nm-px-2 nm-py-1 nm-text-sm nm-rounded hover:nm-bg-muted">
              Delete
            </button>
            <button className="nm-w-full nm-text-left nm-px-2 nm-py-1 nm-text-sm nm-rounded hover:nm-bg-muted">
              Share
            </button>
          </div>
        </PopoverDialog>
      </Popover>
    </PopoverTrigger>
  ),
};

export const TopPlacement: Story = {
  render: () => (
    <div className="nm-pt-32">
      <PopoverTrigger>
        <Button>Top Popover</Button>
        <Popover placement="top">
          <PopoverDialog>
            <div className="nm-text-sm">Popover positioned on top</div>
          </PopoverDialog>
        </Popover>
      </PopoverTrigger>
    </div>
  ),
};

export const BottomPlacement: Story = {
  render: () => (
    <PopoverTrigger>
      <Button>Bottom Popover</Button>
      <Popover placement="bottom">
        <PopoverDialog>
          <div className="nm-text-sm">Popover positioned on bottom</div>
        </PopoverDialog>
      </Popover>
    </PopoverTrigger>
  ),
};

export const LeftPlacement: Story = {
  render: () => (
    <div className="nm-pl-32">
      <PopoverTrigger>
        <Button>Left Popover</Button>
        <Popover placement="left">
          <PopoverDialog>
            <div className="nm-text-sm">Popover positioned on left</div>
          </PopoverDialog>
        </Popover>
      </PopoverTrigger>
    </div>
  ),
};

export const RightPlacement: Story = {
  render: () => (
    <div className="nm-pr-32">
      <PopoverTrigger>
        <Button>Right Popover</Button>
        <Popover placement="right">
          <PopoverDialog>
            <div className="nm-text-sm">Popover positioned on right</div>
          </PopoverDialog>
        </Popover>
      </PopoverTrigger>
    </div>
  ),
};

export const WithForm: Story = {
  render: () => (
    <PopoverTrigger>
      <Button>Form</Button>
      <Popover>
        <PopoverDialog>
          <div className="nm-space-y-3 nm-min-w-[250px]">
            <h3 className="nm-font-semibold">Quick Add</h3>
            <input
              type="text"
              placeholder="Enter name"
              className="nm-w-full nm-px-2 nm-py-1 nm-text-sm nm-border nm-rounded"
            />
            <input
              type="email"
              placeholder="Enter email"
              className="nm-w-full nm-px-2 nm-py-1 nm-text-sm nm-border nm-rounded"
            />
            <div className="nm-flex nm-gap-2">
              <button className="nm-flex-1 nm-px-2 nm-py-1 nm-text-sm nm-bg-primary nm-text-primary-foreground nm-rounded">
                Submit
              </button>
              <button className="nm-flex-1 nm-px-2 nm-py-1 nm-text-sm nm-border nm-rounded">
                Cancel
              </button>
            </div>
          </div>
        </PopoverDialog>
      </Popover>
    </PopoverTrigger>
  ),
};

export const CustomOffset: Story = {
  render: () => (
    <PopoverTrigger>
      <Button>Large Offset</Button>
      <Popover offset={16}>
        <PopoverDialog>
          <div className="nm-text-sm">Popover with larger offset</div>
        </PopoverDialog>
      </Popover>
    </PopoverTrigger>
  ),
};
