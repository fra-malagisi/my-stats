import { Dialog } from "@/components/ui/dialog";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "Base components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "object" },
    trigger: { control: "object" },
    title: { control: "text" },
    description: { control: "text" },
    saveAction: { control: "object" },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    trigger: React.createElement("button", null, "Open dialog"),
    title: "Dialog",
    description: "Dialog description",
    children: React.createElement(
      "form",
      { onSubmit: () => console.log("hello") },
      React.createElement("label", null, "Enter your name: "),
      React.createElement("input", { type: "text", name: "name" })
    ),
    saveAction: () => console.log("hello"),
  },
};
