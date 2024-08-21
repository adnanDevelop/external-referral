import { HiChevronDoubleRight } from 'react-icons/hi2';

interface Props {
  id: string;
  open: boolean;
  children: React.ReactNode;
  wrapperClassName?: string;
  className?: string;
  setOpen: (open: boolean) => void;
}
const Drawer = ({
  id,
  open,
  setOpen,
  children,
  wrapperClassName,
  className,
}: Props) => {
  return (
    <div id={id} className={`drawer drawer-end ${open} && "fade-in`}>
      <input type="checkbox" checked={open} className="drawer-toggle" readOnly/>
      <div className={`drawer-side ${wrapperClassName} !z-[4]`}>
        <div
          onClick={() => setOpen(false)}
          aria-label="close sidebar"
          className={`drawer-overlay ${open && '!bg-opacity-50 !bg-[#6B7280]'}`}
        ></div>
        <div className={`h-full w-[90%] max-w-[1000px] ${className} 0]`}>
          <div className={`w-full h-full overflow-y-scroll`}>{children}</div>
          <button
            className={`drawer-button border-none shadow-none flex items-center justify-center bg-white rounded-md h-[24px] w-[24px] text-center text-purple cursor-pointer absolute ${open && 'top-3 -ml-10'}`}
            onClick={() => setOpen(false)}
          >
            <HiChevronDoubleRight />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Drawer;
