import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  label?: string;
  checked?: boolean;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  labelSide?: 'left' | 'right';
  register?: any;
}

const Radio = ({
  label,
  checked,
  name,
  id,
  className,
  labelClassName,
  labelSide = 'right',
  wrapperClassName,
  register,
  ...props
}: Props) => {
  return (
    <div className="form-control">
      <label
        htmlFor={name}
        className={`justify-start pb-0 gap-x-2 label cursor-pointer font-poppins ${wrapperClassName}`}
      >
        {labelSide === 'left' && (
          <span className={`label-text text-purple ${labelClassName}`}>
            {label}
          </span>
        )}
        <input
          id={id}
          name={name}
          type="radio"
          className={`radio radio-xs ${checked ? 'radio-primary' : 'radio-dark-color'}  ${className}`}
          {...props}
          checked={checked}
          {...(register && register(name))}
        />
        {labelSide === 'right' && (
          <span className={`label-text text-purple ${labelClassName}`}>
            {label}
          </span>
        )}
      </label>
    </div>
  );
};

export default Radio;
