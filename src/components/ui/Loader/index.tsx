interface Props {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const Loader = ({ className, size }: Props) => {
  size === 'xs' && (className += ' loading-xs');
  size === 'sm' && (className += ' loading-sm');
  size === 'md' && (className += ' loading-md');
  size === 'lg' && (className += ' loading-lg');
  return (
    <span
      className={`loading loading-spinner text-secondary ${className}`}
    ></span>
  );
};

export default Loader;
