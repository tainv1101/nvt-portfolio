import type { UseFormRegisterReturn } from 'react-hook-form';
import { TextInput } from "../TextInput/TextInput";
import { HTMLProps } from 'react';
import { cn } from '@/lib/utils';

interface InputWrapperProps {
  id: string;
  label: string;
  isError?: boolean;
  errorMessage?: string;
  inputProps: UseFormRegisterReturn;
  inputType?: "text" | "password" | "email" | "number";
  isSelectWrapper?: boolean
  render?: (inputProps: UseFormRegisterReturn & Partial<React.InputHTMLAttributes<HTMLElement>>, inputClassName: HTMLProps<HTMLElement>["className"]) => React.ReactNode;
}

function InputWrapper({ id, label, isError, errorMessage, inputProps, inputType = "text", render, isSelectWrapper = false }: InputWrapperProps) {
  const inputClassName: HTMLProps<HTMLElement>["className"] =
    "peer border border-gray-300 rounded-md p-2 w-full";
  return (
    <div className="w-full relative">
      {render ? render(inputProps, inputClassName) : <TextInput inputType={inputType} inputProps={{ ...inputProps, id, name: id, type: inputType }} />}
      <InputLabel isSelectWrapper={isSelectWrapper} label={label} id={id} />
      {isError && <InputError errorMessage={errorMessage} />}
    </div>
  );
}

export default InputWrapper;


interface InputLabelProps {
  label: string;
  id: string;
  isSelectWrapper: boolean;
}

function InputLabel({ label, id, isSelectWrapper }: InputLabelProps) {
  return (
    <label
      className={cn(
        "absolute  bg-white px-1 left-2 text-gray-600 font-semibold transition-all duration-300",
        {
          "-top-3 peer-placeholder-shown:top-3 peer-focus:-top-3": !isSelectWrapper,
          "-top-3": isSelectWrapper
        }
      )}
      htmlFor={id}
    >
      {label}
    </label>
  );
}


interface InputErrorProps {
  errorMessage: string | undefined;
}

function InputError({ errorMessage }: InputErrorProps) {
  return (
    <p className="text-red-500 mt-2 ml-2">
      {errorMessage}
    </p>
  );
}