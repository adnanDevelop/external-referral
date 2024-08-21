interface ImageProps {
  src: string;
  alt?: string;
}

interface PlaceholderProps {
  placeholder: string;
}

interface Props {
  type: 'image' | 'placeholder';
  imageProps?: ImageProps;
  placeholderProps?: PlaceholderProps;
  className?: string;
  wrapperClassName?: string;
  ring?: boolean;
  mode?: 'online' | 'offline';
}

const Avatar = ({
  type,
  className,
  wrapperClassName,
  ring = false,
  mode,
  imageProps,
  placeholderProps,
}: Props) => {
  const ringStyle = ring
    ? 'ring ring-secondary ring-offset-base-100 ring-offset-2'
    : null;

  const Render = () => {
    if (type === 'image' && imageProps) {
      return (
        <div className={`rounded-full ${ringStyle} ${wrapperClassName}`}>
          <img className={`${className}`} {...imageProps} />
        </div>
      );
    } else if (type === 'placeholder' && placeholderProps) {
      return (
        <div
          className={`bg-secondary text-neutral-content rounded-full w-16 ${ringStyle} ${wrapperClassName}`}
        >
          <span className={`text-sm ${className}`}>
            {placeholderProps.placeholder}
          </span>
        </div>
      );
    }
    return (
      <div className={`bg-neutral text-neutral-content rounded-full w-16`}>
        <span className="text-xs ml-3">Invalid props</span>
      </div>
    );
  };

  return (
    <div
      className={`avatar ${mode ? mode : null} ${
        type === 'placeholder' ? 'placeholder' : null
      }`}
    >
      {Render()}
    </div>
  );
};

export default Avatar;
