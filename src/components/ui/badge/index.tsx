import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Badge = ({ children, className = 'badge-success' }: Props) => {
  let badgeColor: string = '';
  //   Colors based on className
  switch (className) {
    case 'badge-primary':
      badgeColor = 'text-white border-transparent !bg-[#78B5FF]';
      break;
    case 'badge-danger':
      badgeColor = 'text-white !bg-[#C34D49]';
      break;
    case 'badge-warning':
      badgeColor = 'text-white !bg-[#FFAF1E]';
      break;
    case 'badge-success':
      badgeColor = 'text-white !bg-[#22AD5C]';
      break;
    case 'badge-blue':
      badgeColor = 'text-white !bg-[#202D54]';
      break;
    case 'badge-gold':
      badgeColor = 'text-black !bg-[#EFC77E] border-transparent';
      break;
    case 'badge-pink':
      badgeColor = 'text-black !bg-[#F8EBD0] border-transparent';
      break;
  }

  return (
    <div
      className={`badge ${className} !py-[7px] !px-[10px] font-poppin h-auto w-auto text-[12px] leading-none rounded-[10px] ${badgeColor} tracking-[0.5px] text-nowrap `}
    >
      {children}
    </div>
  );
};

export default Badge;
