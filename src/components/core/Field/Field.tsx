import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { classNames } from "@/lib/classNames";
import styles from "./Field.module.css";

export type FieldState="default"|"focus"|"filled"|"error"|"disabled";
export type FieldProps=Omit<InputHTMLAttributes<HTMLInputElement>,"size"> & {label:string;state?:FieldState;error?:string;helperText?:string;containerClassName?:string};

export const Field=forwardRef<HTMLInputElement,FieldProps>(function Field({label,state,error,helperText,disabled,id,value,defaultValue,containerClassName,className,...props},ref){
  const generatedId=useId(); const inputId=id??generatedId; const hasValue=Boolean(value??defaultValue);
  const resolved:FieldState=state??(disabled?"disabled":error?"error":hasValue?"filled":"default");
  const message=error??helperText; const messageId=message?`${inputId}-message`:undefined;
  return <label className={classNames(styles.field,styles[resolved],containerClassName)} htmlFor={inputId}>
    <span className={styles.label}>{label}</span>
    <input {...props} ref={ref} id={inputId} value={value} defaultValue={defaultValue} disabled={disabled||resolved==="disabled"} aria-invalid={resolved==="error"||undefined} aria-describedby={messageId} className={classNames(styles.input,className)}/>
    {message&&<span id={messageId} className={classNames(styles.message,resolved==="error"&&styles.errorMessage)}>{message}</span>}
  </label>;
});
