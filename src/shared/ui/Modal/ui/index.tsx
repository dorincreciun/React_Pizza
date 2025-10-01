import { BackdropLayout } from "./BackdropLayout";
import { cn } from "@/shared/utils/cn.ts";
import { type FC, useEffect, useRef } from "react";
import type { ModalProps } from "../model/types";
import { Button } from "@/shared/ui/Button";
import { X } from "lucide-react";
import { useModal } from "@/shared/ui/Modal";

export const Modal: FC<ModalProps> = ({
	children,
	className,
	closeOnEsc,
	id,
}) => {
	const ref = useRef<HTMLDivElement | null>(null);

	const isOpen = useModal((s) => s.registry[id]);
	const close = useModal((s) => s.close);

	/* Click outside */
	useEffect(() => {
		const outsideClick = (event: MouseEvent | TouchEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				close(id);
			}
		};

		document.addEventListener("click", outsideClick);
		document.addEventListener("touchmove", outsideClick);

		return () => {
			document.removeEventListener("click", outsideClick);
			document.removeEventListener("touchmove", outsideClick);
		};
	}, [isOpen, close]);

	/* Press Esc */
	useEffect(() => {
		if (!isOpen || !closeOnEsc) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") close(id);
		};
		window.addEventListener("keydown", onKeyDown, { passive: true });
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [isOpen, closeOnEsc, close]);

	/* Overflow-x remove */
	useEffect(() => {
		if (!isOpen) return;
		const original = document.documentElement.style.overflow;
		document.documentElement.style.overflow = "hidden";
		return () => {
			document.documentElement.style.overflow = original;
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<>
			<BackdropLayout isOpen={isOpen} />
			<div ref={ref} className={cn(!isOpen && "hidden", className)}>
				{/* Close */}
				<Button
					isOnlyIcon
					color={"secondary"}
					aria-label={"Close modal button"}
					className={"absolute top-2 right-2 bg-transparent"}
					onClick={() => close(id)}
				>
					<X />
				</Button>
				{/* Content */}
				{children}
			</div>
		</>
	);
};
