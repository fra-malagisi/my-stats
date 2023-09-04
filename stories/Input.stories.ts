import { Input } from "@/components/ui/input";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Base components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    label: { control: "text" },
    id: { control: "text" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    placeholder: "Field...",
    label: "Field",
    id: "field",
  },
};
