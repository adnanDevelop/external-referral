interface Props {
  className: string;
}

const Skeleton = ({ className }: Props) => {
  return <div className={`skeleton bg-gray-300 ${className}`}></div>;
};

export default Skeleton;
