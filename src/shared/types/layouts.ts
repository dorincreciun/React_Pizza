import type { ComponentPropsWithoutRef } from "react";

export type PageLayoutProps = ComponentPropsWithoutRef<"main">;

export type BackdropProps = {
	isOpen: boolean;
};
