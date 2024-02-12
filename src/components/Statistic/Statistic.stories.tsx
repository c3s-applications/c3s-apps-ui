import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Statistic from "./Statistic";

const meta: Meta<typeof Statistic> = {
  component: Statistic,
  title: "C3S-UI/Statistic",
  argTypes: {
  },
};
export default meta;

type Story = StoryObj<typeof Statistic>;

export const Number: Story = (args) => (
  <Statistic {...args} />
);
Number.args = {
  value: "1000000",
  label: "Cabbages",
};