import { cn } from '@/lib/utils';
import { HTMLProps } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';



interface TextInputProps {
  // inputName: string;
  className?: HTMLProps<HTMLElement>["className"];
  inputProps: UseFormRegisterReturn & Partial<React.InputHTMLAttributes<HTMLElement>>;
  inputType?: "text" | "password" | "email" | "number";
}

export function TextInput({ inputProps, className, inputType = "text" }: TextInputProps) {
  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputType === "number") return e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
    return e
  }

  return (
    <input
      {...inputProps}
      className={cn("peer border border-gray-300 rounded-md p-3 w-full", className)}
      autoComplete={inputType === "password" ? "new-password" : "off"}
      type={inputType}
      onInput={onInput}
      // id={inputName}
      placeholder=" "
    />
  );
}