import type { HTMLAttributes,ReactNode } from "react"; import { classNames } from "@/lib/classNames"; import styles from "./SignalChip.module.css";
export type SignalChipTone="neutral"|"brand"|"dark"; export type SignalChipProps=HTMLAttributes<HTMLSpanElement>&{children:ReactNode;tone?:SignalChipTone};
export function SignalChip({children,tone="neutral",className,...props}:SignalChipProps){return <span {...props} className={classNames(styles.chip,styles[tone],className)}>{children}</span>}
