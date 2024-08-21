import React from 'react';
interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  children?: React.ReactNode;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  register?: any;
  placeholder?: string;
  required?: boolean;
}
const Select = ({
  className,
  label,
  labelClassName,
  children,
  wrapperClassName,
  register,
  name,
  placeholder,
  required,
  ...props
}: Props) => {
  return (
    <div className={`form-control font-Roboto ${wrapperClassName}`}>
      <label
        className={`label-text font-medium text-purple text-[14px] ${labelClassName}`}
      >
        {label}
      </label>
      <div className="relative w-full">
        <select
          placeholder={placeholder}
          name={name}
          className={`select appearance-none w-full min-h-[30px] border border-gray-300 focus:border-purple text-xs shadow-sm rounded-[4px] max-w-full focus:!outline-none ${className}`}
          {...(register &&
            register(name, {
              required: required ? `${label} is required` : false,
            }))}
          {...props}
        >
          {children}
        </select>
        {/* <span className="absolute inset-y-3 top-0 flex items-center pr-2 pointer-events-none text-purple right-1 bg-[#FF6760]" /> */}
      </div>
    </div>
  );
};
export default Select;
