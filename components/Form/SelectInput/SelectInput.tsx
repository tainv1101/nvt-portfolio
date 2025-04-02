import { cn } from '@/lib/utils';
import { HTMLProps } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';



interface SelectInputProps {
  // inputName: string;
  className?: HTMLProps<HTMLElement>["className"];
  inputProps: UseFormRegisterReturn & Partial<React.InputHTMLAttributes<HTMLElement>>;
  options: { label: string, value: string }[]
}

export function SelectInput({ inputProps, options, className }: SelectInputProps) {
  return (
    <select
      {...inputProps}
      className={cn(
        "w-full capitalize bg-white border border-gray-400 rounded-md py-2 pl-2 pr-3 shadow-sm focus:border-primary focus:ring-primary",
        className
      )}
    >
      {options.map(({ value, label }) => (
        <option className="capitalize" key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}