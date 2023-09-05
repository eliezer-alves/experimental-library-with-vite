import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Default: Story = {
  args: {
    size: "md",
    disabled: false,
  },
};

export const WithOnClick: Story = {
  args: {
    size: "md",
    disabled: false,
    onClick: () => alert("hello"),
  },
};
