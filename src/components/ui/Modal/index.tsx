import React from 'react';

interface Props {
  id: string;
  title?: string;
  children: React.ReactNode;
  open: boolean;
  className?: string;
  setOpen: (open: boolean) => void;
}

const Modal = ({ id, title, open, setOpen, className, children }: Props) => {
  const modalRef = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    if (!modalRef.current) return;
    open ? modalRef.current?.showModal() : modalRef.current?.close();
  }, [open]);

  return (
    <dialog
      ref={modalRef}
      id={id}
      onCancel={() => setOpen(!open)}
      className="modal"
    >
      <div
        className={`modal-box !pt-[30px] !pb-[30px] rounded-lg border overflow-hidden border-[#ADB5BD] z-[1] ${className}`}
      >
        {/* close button */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute top-[-0%] right-[-0%] !cursor-pointer text-xs btn btn-sm btn-circle btn-ghost text-dark-color border-none transition duration-300 hover:rotate-[180deg] hover:scale-150 hover:text-primary"
        >
          ✕
        </button>
        {/* title */}
        <h3 className="font-[500] text-center text-[20px] text-purple">
          {title}
        </h3>
        {/* children */}
        {children}
      </div>
      {/* close when clicked outside */}
      <form className="modal-backdrop ">
        <button className="z-[-1]" type="button" onClick={() => setOpen(!open)}>
          close
        </button>
      </form>
    </dialog>
  );
};

export default Modal;
