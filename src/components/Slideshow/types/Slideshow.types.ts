import { ReactNode } from "react";

export type Slide = {
  id: string;
  text: string;
  color: string;
};

export type Button = {
  id: string;
  text: string;
  action?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
};
