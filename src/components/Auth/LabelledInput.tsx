interface LabelledInputProps {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputProps) {
  return (
    <div>
      <label className="block pt-4 mb-2 text-sm font-semibold text-[#4a00e0]">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id={label}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#4a00e0] block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default LabelledInput;
