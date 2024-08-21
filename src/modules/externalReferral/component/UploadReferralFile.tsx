import { useRef } from "react";

const UploadReferralFile = () => {
  const hiddenFileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (hiddenFileInputRef.current) {
      hiddenFileInputRef.current.click();
    }
  };

  return (
    <section>
      {/* Referral upload input */}
      <div
        className="w-full h-[120px] border rounded-md border-dashed border-gray-500 flex flex-col justify-end items-center cursor-pointer pb-[10px]"
        onClick={handleClick}
      >
        <input className="hidden" type="file" ref={hiddenFileInputRef} />

        <p className="text-base font-roboto text-[#000000DE] flex gap-1 ">
          <span className="cursor-pointer underline text-[#2196F3]">
            Click to upload
          </span>
          or drag and drop your referral
        </p>
        <p className="text-sm font-roboto text-[#000000DE] mt-0.5">
          pdf, doc, txt, rtf, docx (max. 3MB)
        </p>
      </div>

      {/* Drag and drop upload input */}
      <div
        className="w-full h-[100px] border rounded-md border-dashed border-gray-500 flex flex-col justify-end items-center mt-6 cursor-pointer pb-[10px]"
        onClick={handleClick}
      >
        <input className="hidden" type="file" ref={hiddenFileInputRef} />

        <p className="text-base font-roboto text-[#000000DE] flex gap-1 ">
          <span className="cursor-pointer underline text-[#2196F3]">
            Click to upload
          </span>
          or drag and drop other information such as test results
        </p>
        <p className="text-sm font-roboto text-[#000000DE] mt-0.5">
          pdf, doc, txt, rtf, docx (max. 3MB)
        </p>
      </div>
    </section>
  );
};

export default UploadReferralFile;
