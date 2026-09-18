import { classNames } from "@/lib/classNames";
import styles from "./ApplicationStageTabs.module.css";
export type ApplicationStage =
  | "All"
  | "Draft"
  | "Submitted"
  | "Interview"
  | "Offer"
  | "Closed";
export type StageTab = { label: ApplicationStage; count: number };
export type ApplicationStageTabsProps = {
  active?: ApplicationStage;
  tabs?: StageTab[];
  onChange?: (stage: ApplicationStage) => void;
  className?: string;
};
const DEFAULT: StageTab[] = [
  { label: "All", count: 9 },
  { label: "Draft", count: 1 },
  { label: "Submitted", count: 3 },
  { label: "Interview", count: 2 },
  { label: "Offer", count: 0 },
  { label: "Closed", count: 3 },
];
export function ApplicationStageTabs({
  active = "All",
  tabs = DEFAULT,
  onChange,
  className,
}: ApplicationStageTabsProps) {
  return (
    <div
      className={classNames(styles.wrap, className)}
      role="tablist"
      aria-label="Application stages"
    >
      {tabs.map((t) => (
        <button
          key={t.label}
          type="button"
          role="tab"
          aria-selected={active === t.label}
          className={classNames(
            styles.tab,
            active === t.label && styles.active,
          )}
          onClick={() => onChange?.(t.label)}
        >
          <span>{t.label}</span>
          <strong>{t.count}</strong>
        </button>
      ))}
    </div>
  );
}
