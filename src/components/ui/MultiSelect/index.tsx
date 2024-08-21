import Select from "react-select";

interface Props {
  options: { value: string; label: string }[];
  onChange: (selectedOptions: string[] | string) => void;
  defaultValue?: { value: string; label: string }[];
  value?: { value: string; label: string };
  placeholder?: string;
  className?: string;
  required?: boolean;
  isMulti?: boolean;
  disabled?: boolean;
}

const MultiSelect = ({
  options,
  onChange,
  defaultValue,
  value,
  placeholder,
  className,
  required,
  isMulti,
  disabled,
}: Props) => {
  const handleChange = (selectedOptions: any) => {
    if (selectedOptions) {
      if (isMulti) {
        const selectedValues = selectedOptions.map(
          (option: any) => option.value
        );
        onChange(selectedValues);
      } else {
        onChange(selectedOptions.value);
      }
    } else {
      onChange(isMulti ? [] : "");
    }
  };

  return (
    <Select
      options={options}
      isMulti={isMulti}
      onChange={handleChange}
      className={`text-xs focus:!outline-none focus:border-purple ${className}`}
      maxMenuHeight={200}
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      required={required}
      isSearchable={true}
      isDisabled={disabled}
    />
  );
};

export default MultiSelect;
