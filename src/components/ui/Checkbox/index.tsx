import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  label?: string;
  defaultChecked?: boolean;
  className?: string;
  labelClassName?: string;
  labelSide?: 'left' | 'right';
  wrapperClassName?: string;
  register?: any;
}

const Checkbox = ({
  label,
  defaultChecked,
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
    <div className=" form-control">
      <label
        htmlFor={name}
        className={`cursor-pointer flex items-center font-poppin  ${wrapperClassName}`}
      >
        {labelSide === 'left' && (
          <span className={`mr-[7.7px] text-[0.75rem] ${labelClassName}`}>
            {label}
          </span>
        )}
        <input
          id={id}
          name={name}
          type="checkbox"
          defaultChecked={defaultChecked}
          className={`checkbox checkbox-xs rounded-[2px] border-[1.6px] ${className}`}
          {...(register && register(name))}
          {...props}
        />
        {labelSide === 'right' && (
          <span
            className={`ml-[0.3rem] text-gray-700 text-[0.75rem] ${labelClassName}`}
          >
            {label}
          </span>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
