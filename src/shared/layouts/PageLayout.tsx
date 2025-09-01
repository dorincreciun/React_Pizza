import type { PageLayoutProps } from "../types/layouts.ts";

export const PageLayout = ({ children }: PageLayoutProps) => {
  return <main>{children}</main>;
};
