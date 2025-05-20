// components/InputField.tsx
"use client";

import { Input } from "@/components/ui/input";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  required?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  required = false,
  ...props
}) => {
  return (
    <div className="space-y-1">
      <Input
        id={name}
        placeholder={label}
        name={name}
        required={required}
        {...props}
        className="w-full rounded px-6 py-8 border-[#202020] "
      />
    </div>
  );
};
