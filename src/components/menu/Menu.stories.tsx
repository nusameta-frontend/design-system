import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuItem,
  MenuHeader,
  MenuSeparator,
  MenuKeyboard,
  MenuSection,
  MenuSubTrigger,
  MenuCollection,
  MenuWrapper,
} from "./Menu";
import { Button } from "../button/Button";
import { Pressable } from "react-aria-components";
import {
  Cloud,
  CreditCard,
  GitBranch,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => (
    <MenuTrigger>
      <Button variant="outline">Open Menu</Button>
      <MenuPopover>
        <Menu>
          <MenuItem>New Tab</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem>New Private Window</MenuItem>
          <MenuSeparator />
          <MenuItem>Print...</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <MenuTrigger>
      <Button variant="outline">
        <User className="size-4" />
        Profile
      </Button>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <User className="size-4" />
            Profile
            <MenuKeyboard>⇧⌘P</MenuKeyboard>
          </MenuItem>
          <MenuItem>
            <CreditCard className="size-4" />
            Billing
            <MenuKeyboard>⌘B</MenuKeyboard>
          </MenuItem>
          <MenuItem>
            <Settings className="size-4" />
            Settings
            <MenuKeyboard>⌘S</MenuKeyboard>
          </MenuItem>
          <MenuItem>
            <Keyboard className="size-4" />
            Keyboard shortcuts
            <MenuKeyboard>⌘K</MenuKeyboard>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <Users className="size-4" />
            Team
          </MenuItem>
          <MenuItem>
            <UserPlus className="size-4" />
            Invite users
            <MenuKeyboard>⌘I</MenuKeyboard>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <GitBranch className="size-4" />
            GitHub
          </MenuItem>
          <MenuItem>
            <LifeBuoy className="size-4" />
            Support
          </MenuItem>
          <MenuItem>
            <Cloud className="size-4" />
            API
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <LogOut className="size-4" />
            Log out
            <MenuKeyboard>⇧⌘Q</MenuKeyboard>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
};

export const WithSections: Story = {
  render: () => (
    <MenuTrigger>
      <Button variant="outline">Edit</Button>
      <MenuPopover>
        <Menu>
          <MenuSection>
            <MenuHeader>Actions</MenuHeader>
            <MenuItem>
              <Plus className="size-4" />
              New File
            </MenuItem>
            <MenuItem>
              <PlusCircle className="size-4" />
              New Folder
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuSection>
            <MenuHeader>Account</MenuHeader>
            <MenuItem>
              <User className="size-4" />
              Profile
            </MenuItem>
            <MenuItem>
              <Settings className="size-4" />
              Settings
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuItem>
            <LogOut className="size-4" />
            Log out
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
};

export const WithSubmenu: Story = {
  render: () => (
    <MenuTrigger>
      <Button variant="outline">Options</Button>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <Mail className="size-4" />
            Email
          </MenuItem>
          <MenuItem>
            <MessageSquare className="size-4" />
            Message
          </MenuItem>
          <MenuSeparator />
          <MenuSubTrigger>
            <MenuItem>
              <Plus className="size-4" />
              More Options
            </MenuItem>
            <MenuPopover>
              <Menu>
                <MenuItem>
                  <User className="size-4" />
                  Profile
                </MenuItem>
                <MenuItem>
                  <Settings className="size-4" />
                  Settings
                </MenuItem>
                <MenuSeparator />
                <MenuSubTrigger>
                  <MenuItem>
                    <Settings className="size-4" />
                    Advanced
                  </MenuItem>
                  <MenuPopover>
                    <Menu>
                      <MenuItem>Developer Tools</MenuItem>
                      <MenuItem>Experimental Features</MenuItem>
                      <MenuItem>Debug Mode</MenuItem>
                    </Menu>
                  </MenuPopover>
                </MenuSubTrigger>
              </Menu>
            </MenuPopover>
          </MenuSubTrigger>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
};

const SingleSelectionDemo = () => {
  const [selected, setSelected] = useState<"light" | "dark" | "system">(
    "light"
  );

  return (
    <MenuTrigger>
      <Button variant="outline">Theme: {selected}</Button>
      <MenuPopover>
        <Menu
          selectionMode="single"
          selectedKeys={[selected]}
          onSelectionChange={(keys) => {
            const key = Array.from(keys)[0] as typeof selected;
            setSelected(key);
          }}
        >
          <MenuItem id="light">Light</MenuItem>
          <MenuItem id="dark">Dark</MenuItem>
          <MenuItem id="system">System</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const WithSelectionSingle: Story = {
  render: () => <SingleSelectionDemo />,
};

const MultipleSelectionDemo = () => {
  const [selected, setSelected] = useState<Set<string>>(
    new Set(["sidebar", "toolbar"])
  );

  return (
    <MenuTrigger>
      <Button variant="outline">View ({selected.size} selected)</Button>
      <MenuPopover>
        <Menu
          selectionMode="multiple"
          selectedKeys={selected}
          onSelectionChange={(keys) =>
            setSelected(new Set(keys as Set<string>))
          }
        >
          <MenuHeader>Show/Hide Panels</MenuHeader>
          <MenuItem id="sidebar">Sidebar</MenuItem>
          <MenuItem id="toolbar">Toolbar</MenuItem>
          <MenuItem id="statusbar">Status Bar</MenuItem>
          <MenuItem id="minimap">Minimap</MenuItem>
          <MenuItem id="breadcrumb">Breadcrumb</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export const WithSelectionMultiple: Story = {
  render: () => <MultipleSelectionDemo />,
};

export const WithDisabledItems: Story = {
  render: () => (
    <MenuTrigger>
      <Button variant="outline">Actions</Button>
      <MenuPopover>
        <Menu>
          <MenuItem>New File</MenuItem>
          <MenuItem>Open File</MenuItem>
          <MenuItem>Save</MenuItem>
          <MenuItem isDisabled>Save As...</MenuItem>
          <MenuSeparator />
          <MenuItem>Export</MenuItem>
          <MenuItem isDisabled>Import</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
};

export const MenuWrapperExample: Story = {
  render: () => (
    <MenuWrapper label="Quick Actions" variant="default">
      <MenuItem>
        <User className="size-4" />
        Profile
      </MenuItem>
      <MenuItem>
        <Settings className="size-4" />
        Settings
      </MenuItem>
      <MenuSeparator />
      <MenuItem>
        <LogOut className="size-4" />
        Log out
      </MenuItem>
    </MenuWrapper>
  ),
};

export const MenuWrapperVariants: Story = {
  render: () => (
    <div className="nm:flex nm:gap-4 nm:flex-wrap">
      <MenuWrapper label="Default" variant="default">
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Log out</MenuItem>
      </MenuWrapper>

      <MenuWrapper label="Outline" variant="outline">
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Log out</MenuItem>
      </MenuWrapper>

      <MenuWrapper label="Ghost" variant="ghost">
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Log out</MenuItem>
      </MenuWrapper>

      <MenuWrapper label="Secondary" variant="secondary">
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Log out</MenuItem>
      </MenuWrapper>
    </div>
  ),
};

export const WithCollection: Story = {
  render: () => {
    const items = [
      { id: 1, name: "New File", icon: Plus },
      { id: 2, name: "Profile", icon: User },
      { id: 3, name: "Settings", icon: Settings },
      { id: 4, name: "Log out", icon: LogOut },
    ];

    return (
      <MenuTrigger>
        <Button variant="outline">Menu</Button>
        <MenuPopover>
          <Menu>
            <MenuCollection items={items}>
              {(item) => (
                <MenuItem id={item.id} textValue={item.name}>
                  <item.icon className="size-4" />
                  {item.name}
                </MenuItem>
              )}
            </MenuCollection>
          </Menu>
        </MenuPopover>
      </MenuTrigger>
    );
  },
};

export const ContextMenu: Story = {
  render: () => (
    <div className="nm:p-8 nm:border nm:border-dashed nm:border-border nm:rounded-lg nm:text-center">
      <p className="nm:text-sm nm:text-muted-foreground nm:mb-4">
        Right-click anywhere in this area
      </p>
      <MenuTrigger trigger="longPress">
        <Pressable>
          <div
            role="button"
            tabIndex={0}
            className="nm:min-h-50 nm:flex nm:items-center nm:justify-center nm:bg-muted/50 nm:rounded-md nm:cursor-context-menu"
          >
            <p className="nm:text-muted-foreground">Context Menu Area</p>
          </div>
        </Pressable>
        <MenuPopover>
          <Menu>
            <MenuItem>
              <Plus className="size-4" />
              New
            </MenuItem>
            <MenuItem>
              <User className="size-4" />
              View Profile
            </MenuItem>
            <MenuSeparator />
            <MenuItem>
              <Settings className="size-4" />
              Settings
            </MenuItem>
            <MenuSeparator />
            <MenuItem>
              <LogOut className="size-4" />
              Delete
            </MenuItem>
          </Menu>
        </MenuPopover>
      </MenuTrigger>
    </div>
  ),
};

export const LongMenu: Story = {
  render: () => (
    <MenuTrigger>
      <Button variant="outline">Long List</Button>
      <MenuPopover>
        <Menu className="nm:max-h-75">
          <MenuHeader>Countries</MenuHeader>
          {[
            "Afghanistan",
            "Albania",
            "Algeria",
            "Argentina",
            "Australia",
            "Austria",
            "Bangladesh",
            "Belgium",
            "Brazil",
            "Canada",
            "China",
            "Colombia",
            "Denmark",
            "Egypt",
            "Finland",
            "France",
            "Germany",
            "Greece",
            "India",
            "Indonesia",
            "Iran",
            "Iraq",
            "Ireland",
            "Israel",
            "Italy",
            "Japan",
            "Kenya",
            "Mexico",
            "Netherlands",
            "New Zealand",
            "Norway",
            "Pakistan",
            "Poland",
            "Portugal",
            "Russia",
            "Saudi Arabia",
            "Singapore",
            "South Africa",
            "South Korea",
            "Spain",
            "Sweden",
            "Switzerland",
            "Thailand",
            "Turkey",
            "Ukraine",
            "United Kingdom",
            "United States",
            "Vietnam",
          ].map((country) => (
            <MenuItem key={country}>{country}</MenuItem>
          ))}
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
};
