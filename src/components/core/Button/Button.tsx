import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "@/lib/classNames";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVisualState = "default" | "hover" | "focus" | "pressed" | "disabled" | "loading";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  visualState?: ButtonVisualState;
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
};

type NativeProps = SharedProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & { href?: never };
type AnchorProps = SharedProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps> & { href: string };
export type ButtonProps = NativeProps | AnchorProps;

export function Button({
  children, variant="primary", size="md", visualState="default",
  isLoading=false, fullWidth=false, className, ...props
}: ButtonProps) {
  const state = isLoading ? "loading" : visualState;
  const classes = classNames(styles.button, styles[variant], styles[size], styles[state], fullWidth && styles.fullWidth, className);

  if ("href" in props && typeof props.href === "string") {
    const { href, ...anchorProps } = props;
    return <a {...anchorProps} href={href} className={classes} aria-busy={isLoading || undefined} aria-disabled={state==="disabled" || undefined}>{isLoading ? "Loading…" : children}</a>;
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button {...buttonProps} className={classes} disabled={buttonProps.disabled || state==="disabled" || state==="loading"} aria-busy={isLoading || undefined}>{isLoading ? "Loading…" : children}</button>;
}
