import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  labelSide?: 'left' | 'right';
  register?: any;
  checked?: boolean;
}

const Toggle = ({
  label,
  className,
  labelClassName,
  wrapperClassName,
  labelSide = 'left',
  name,
  register,
  checked,
  ...props
}: Props) => {
  return (
    <div className="form-control">
      <label
        className={`label px-0 cursor-pointer flex items-center gap-2 ${wrapperClassName}`}
      >
        {label && labelSide === 'left' && (
          <span
            className={`font-semibold font-poppins text-[14px] text-light-black ${labelClassName}`}
          >
            {label}
          </span>
        )}
        <span className="relative flex items-center cursor-pointer select-none w-max">
          <input
            type="checkbox"
            name={name}
            // checked={checked}
            defaultChecked={checked}
            {...(register && register(name))}
            {...props}
            className={`peer appearance-none transition-colors cursor-pointer w-[38px] h-[20px] rounded-full focus:outline-none border-none bg-[#C4CCF8] ${className}`}
          />
          <span
            className={`absolute font-medium text-[7px] uppercase top-[6px] right-[10%] ${checked ? 'text-primary' : ' text-[rgba(0,0,0,1)]'}`}
          >
            OFF
          </span>
          <span
            className={`absolute font-medium text-[7px] uppercase top-[6px] right-6 ${checked ? 'text-primary' : ' text-[rgba(0,0,0,1)]'}`}
          >
            ON
          </span>
          <span
            className={`peer-checked:translate-x-[16px] w-[15px] h-[16px] absolute rounded-full transform transition-transform bg- border-2 border-[#3A57E8] bg-white m-1`}
          />
        </span>
        {label && labelSide === 'right' && (
          <span className={`label-text ${labelClassName}`}>{label}</span>
        )}
      </label>
    </div>
  );
};

export default Toggle;
