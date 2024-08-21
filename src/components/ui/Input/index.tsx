import React from 'react';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  wrapperClassName?: string;
  label?: string;
  labelClassName?: string;
  type?: string;
  palceholder?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  register?: any;
  required?: boolean;
  pattern?: string;
  watch?: any;
}
const Input = ({
  className,
  wrapperClassName,
  label,
  labelClassName,
  type = 'text',
  placeholder,
  disabled,
  icon,
  register,
  name,
  pattern,
  required,
  ...props
}: Props) => {
  return (
    <div
      className={`form-control w-full font-poppin focus:!outline-none rounded-[4px] ${wrapperClassName}`}
    >
      {/* Icon input */}
      <label
        className={`label-text text-light-black text-[13px] font-semibold ${labelClassName}`}
      >
        {label}
      </label>
      {icon ? (
        <span className="flex items-center gap-2 h-[40px] border border-gray-300 focus:border-purple text-xs shadow-sm input input-secondary focus-within:outline-none pl-[10px] pr-[0px]">
          <input
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            type={type}
            className={`w-full h-full border-none rounded-[4px] placeholder:!text-light-black text-xs input-secondary focus:!outline-none ${className}`}
            {...(register &&
              register(name, {
                required: required ? `${label} is required` : false,
                pattern,
              }))}
            {...props}
          />
          {icon}
        </span>
      ) : (
        <input
          name={name}
          disabled={disabled}
          type={type}
          placeholder={placeholder}
          className={`input w-full h-[40px] border border-gray-300 focus:border-purple placeholder:!text-light-black text-xs shadow-sm rounded-[4px] max-w-full input-secondary !px-2 focus:!outline-none  ${className}`}
          {...(register && register(name))}
          {...props}
        />
      )}
    </div>
  );
};
export default Input;
