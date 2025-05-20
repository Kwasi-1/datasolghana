"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  options: { label: string; value: string }[];
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  required = false,
  options,
}) => {
  return (
    <div className="space-y-1">
      <Select
        value={value}
        onValueChange={(val) => onChange(val)}
        required={required}
      >
        <SelectTrigger
          id={name}
          className="w-full text-base rounded border-[#202020] bg-white px-6 py-8"
        >
          <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
