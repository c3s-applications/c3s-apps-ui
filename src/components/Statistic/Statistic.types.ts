import React from "react";

export interface StatisticProps {
  value: string;
  label: React.ReactNode;
  icon?: string;
  size?: "small" | "medium" | "large";
}