import { Table } from "@/components/ui/table";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Base components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    caption: { control: "text" },
    header: { control: "object" },
    rows: { control: "object" },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    caption: "Caption",
    header: ["col1", "col2", "col3"],
    rows: [
      ["row1", "row2", "row3"],
      ["row4", "row5", "row6"],
      ["row7", "row8", "row9"],
    ],
  },
};
