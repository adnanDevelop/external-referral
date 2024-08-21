import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  outline?: boolean;
  className?: string;
  size?: 'xs' | 'sm' | 'lg';
  wide?: boolean;
  responsive?: boolean;
  disabled?: boolean;
  shape?: 'circle' | 'square' | 'rounded';
  block?: boolean;
  icon?: React.ReactNode;
}

const Button = ({
  children,
  outline,
  className,
  type = 'button',
  size,
  wide,
  responsive,
  disabled = false,
  shape,
  block,
  icon,
  ...props
}: Props) => {
  let style = '';
  if (outline)
    style =
      'btn-outline shadow !shadow-none border-2 border-[#130185D9] !text-[#130185D9] bg-transparent hover:!text-[#130185D9] hover:bg-transparent hover:!border-[#130185D9]';
  if (wide) style += 'btn-wide';
  if (responsive) style += 'btn-xs sm:btn-sm md:btn-md lg:btn-lg';
  if (block) style += 'btn-block';
  size &&
    size === 'xs' &&
    (style +=
      'bg-transparent !text-primary border-none font-semibold capitalize hover:bg-transparent !text-sm min-w-[75px] !shadow-none ');
  size && size === 'sm' && (style += 'px-[20px]');
  size && size === 'lg' && (style += 'btn-lg h-[45px] min-h-[45px]');
  shape && shape === 'circle' && (style += 'btn-circle h-[45px] min-h-[45px]');
  shape && shape === 'square' && (style += 'btn-square h-[45px] min-h-[45px]');
  shape &&
    shape === 'rounded' &&
    (style += 'rounded-full h-[45px] min-h-[45px]');

  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn bg-primary transitions hover:bg-[#130185D9] hover:scale-105 h-[40px] min-h-[35px] text-white text-sm font-[500] font-Roboto rounded-[2px] shadow-md ${style} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
