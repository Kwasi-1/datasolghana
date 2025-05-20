import { Textarea } from "@/components/ui/textarea";

interface TextareaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  required?: boolean;
}

export const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  name,
  required = false,
  ...props
}) => {
  return (
    <div className="space-y-1">
      <Textarea
        id={name}
        placeholder={label}
        name={name}
        required={required}
        {...props}
        className="w-full text-base rounded border-[#202020] bg-white px-6 py-6"
      />
    </div>
  );
};
