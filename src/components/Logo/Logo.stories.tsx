import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Logo, { ECMWFLogo } from "./Logo";

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: "C3S-UI/Logo",
  argTypes: {
    organisation: {
      options: ["c3s", "copernicus", "ecmwf", "eu"],
      control: {type: "select"},
    },
    mode: {
      options: ["positive", "negative"],
      control: {type: "radio"},
    },
    size: {
      options: ["small", "medium", "large"],
      control: {type: "radio"},
    },
  },
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Positive: Story = (args) => (
  <Logo {...args} />
);
Positive.args = {
  organisation: "c3s",
  mode: "positive",
  size: "medium",
};

export const Negative: Story = (args) => (
  <Logo {...args} />
);
Negative.args = {
  organisation: "c3s",
  mode: "negative",
  size: "medium",
};

export const ECMWF: Story = (args) => (
  <ECMWFLogo {...args} />
);
ECMWF.args = {
  organisation: "ecmwf",
  mode: "positive",
  size: "medium",
};
