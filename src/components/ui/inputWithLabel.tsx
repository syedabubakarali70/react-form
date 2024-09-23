import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HTMLInputTypeAttribute } from "react";

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type: HTMLInputTypeAttribute;
};

export function InputWithLabel({
  label,
  type,
  name,
  placeholder,
  value,
  handleChange,
  handleBlur,
  error = "",
}: InputProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">{label}</Label>
      <Input
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={e => handleChange(e)}
        onBlur={e => handleBlur(e)}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
