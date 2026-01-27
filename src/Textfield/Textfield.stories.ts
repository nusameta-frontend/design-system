import type { Meta, StoryObj } from "@storybook/react";
import { TextField, Input, TextArea } from "./textfield";
import { Label } from "./field";

// 1. Konfigurasi Metadata
const meta = {
  title: "Components/Atoms/Textfield",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isDisabled: {
      control: "boolean",
      description: "Status apakah input bisa diisi atau tidak",
    },
    isRequired: {
      control: "boolean",
      description: "Apakah field wajib diisi",
    },
    isInvalid: {
      control: "boolean",
      description: "Apakah field memiliki error",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "Tipe input HTML",
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// 2. Default Story - Basic Text Input
// export const Default: Story = () => {
//   return (
//     <TextField>
//       <Label>Username</Label>
//       <Input placeholder="Enter your username" />
//     </TextField>
//   );
// };

// // 3. Email Input
// export const Email: Story = {
//   render: () => (
//     <TextField>
//       <Label>Email Address</Label>
//       <Input type="email" placeholder="Enter your email" />
//     </TextField>
//   ),
// };

// // 4. Password Input
// export const Password: Story = {
//   render: () => (
//     <TextField>
//       <Label>Password</Label>
//       <Input type="password" placeholder="Enter your password" />
//     </TextField>
//   ),
// };

// // 5. Disabled State
// export const Disabled: Story = {
//   render: () => (
//     <TextField isDisabled>
//       <Label>Disabled Field</Label>
//       <Input placeholder="This field is disabled" />
//     </TextField>
//   ),
// };

// // 6. Required Field
// export const Required: Story = {
//   render: () => (
//     <TextField isRequired>
//       <Label>Required Field</Label>
//       <Input placeholder="This field is required" />
//     </TextField>
//   ),
// };

// // 7. Text Area
// export const WithTextArea: Story = {
//   render: () => (
//     <TextField>
//       <Label>Description</Label>
//       <TextArea placeholder="Enter your description" />
//     </TextField>
//   ),
// };

// // 8. With Helper Text
// export const WithHelperText: Story = {
//   render: () => (
//     <TextField>
//       <Label>Username</Label>
//       <Input placeholder="Enter your username" />
//     </TextField>
//   ),
// };

// // 9. Error State
// export const WithError: Story = {
//   render: () => (
//     <TextField isInvalid>
//       <Label>Email Address</Label>
//       <Input type="email" placeholder="Enter your email" />
//     </TextField>
//   ),
// };

// // 10. Multiple Fields (Form Example)
// export const FormExample: Story = {
//   render: () => (
//     <div className="nm-space-y-4 nm-w-full nm-max-w-md">
//       <TextField>
//         <Label>Full Name</Label>
//         <Input placeholder="John Doe" />
//       </TextField>
//       <TextField>
//         <Label>Email</Label>
//         <Input type="email" placeholder="john@example.com" />
//       </TextField>
//       <TextField>
//         <Label>Message</Label>
//         <TextArea placeholder="Your message here..." />
//       </TextField>
//     </div>
//   ),
// };
