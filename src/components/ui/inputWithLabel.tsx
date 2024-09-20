import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HTMLInputTypeAttribute } from "react";

type InputProps = {
  label: string;
  placeholder: string;
  error?: string;
  type: HTMLInputTypeAttribute;
};

export function InputWithLabel({
  label,
  type,
  placeholder,
  error = "",
}: InputProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">{label}</Label>
      <Input type={type} id={label} placeholder={placeholder} />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
