import type { ReactNode } from "react";
import { classNames } from "@/lib/classNames";
import styles from "./LandingSection.module.css";

type LandingSectionWidth = "default" | "wide" | "full";

type LandingSectionProps = {
  children: ReactNode;
  width?: LandingSectionWidth;
  bleed?: boolean;
};

export function LandingSection({
  children,
  width = "default",
  bleed = false,
}: LandingSectionProps) {
  return (
    <div className={classNames(styles.frame, styles[width], bleed && styles.bleed)}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
