import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  register?: any;
}
const FileInput = ({
  wrapperClassName,
  className,
  labelClassName,
  label,
  name,
  register,
  ...props
}: Props) => {
  return (
    <span
      className={`form-control w-full font-Roboto gap-1 ${wrapperClassName}`}
    >
      <label className={`label-text font-[500] ${labelClassName}`}>
        {label}
      </label>
      <input
        type="file"
        name="file"
        className={`file-input file-input-bordered file-input-secondary w-full focus:outline-none border-[#CFCFCF] ${className}`}
        {...(register && register(name))}
        {...props}
      />
    </span>
  );
};

export default FileInput;
