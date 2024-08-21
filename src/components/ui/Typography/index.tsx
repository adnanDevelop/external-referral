import React from 'react';

// Define the props interface
interface Props extends React.HTMLAttributes<HTMLElement> {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'label'
    | 'text-10'
    | 'text-12'
    | 'text-13'
    | 'text-14'
    | 'text-15'
    | 'text-16';
  children: React.ReactNode;
}

const Typography = ({ variant = 'p', children, ...rest }: Props) => {
  let Component: string;
  let style: string = '';

  switch (variant) {
    case 'h1':
      Component = 'h1';
      style = '!font-normal !text-[50px] !font-raisone tracking-[0.2px]';
      break;
    case 'h2':
      Component = 'h2';
      style = 'font-semibold !text-[40px] !font-raisone tracking-[0.2px]';

      break;
    case 'h3':
      Component = 'h3';
      style = 'font-normal !text-[28px] !font-raisone tracking-[0.2px]';

      break;
    case 'h4':
      Component = 'h4';
      style = 'font-semibold !text-[26px] !font-raisone tracking-[0.2px]';

      break;
    case 'h5':
      Component = 'h5';
      style = 'font-semibold !text-[20px] !font-raisone tracking-[0.2px]';

      break;
    case 'h6':
      Component = 'h6';
      style = 'font-normal !text-lg !font-raisone tracking-[0.1px]';

      break;
    case 'text-10':
      Component = 'p';
      style = 'font-semibold !font-poppin !text-[10px] tracking-[0.2px]';
      break;
    case 'text-12':
      Component = 'p';
      style = 'font-semibold !font-poppin !text-[12px] tracking-[0.1px]';
      break;
    case 'text-13':
      Component = 'p';
      style = 'font-normal !font-poppin !text-[13px] tracking-[0.1px]';
      break;
    case 'text-14':
      Component = 'p';
      style = 'font-semibold !font-poppin !text-[14px] tracking-[0.1px]';
      break;
    case 'text-15':
      Component = 'p';
      style = 'font-semibold !font-poppin !text-[15px] tracking-[0.1px]';
      break;
    case 'text-16':
      Component = 'p';
      style = 'font-semibold !font-poppin !text-[16px] tracking-[0.1px]';
      break;
    case 'label':
      Component = 'label';
      break;
    case 'p':
      Component = 'p';
      style = 'font-normal !font-poppin !text-[16px] tracking-[0.2px]';
      break;
    default:
      Component = 'p';
      style = 'font-normal !font-poppin !text-[16px] tracking-[0.1px]';
      break;
  }

  return (
    <span className={`prose  ${style} text-[#25282B] `}>
      <Component {...rest}>{children}</Component>
    </span>
  );
};

export default Typography;
