import { useRef, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { MdOutlineUploadFile } from "react-icons/md";

const UploadReferralFile = () => {
  const hiddenFileInputRef = useRef<HTMLInputElement>(null);
  const [uploadState, setUploadState] = useState({
    status: "none" as "uploading" | "success" | "failure" | "none",
    width: "10%",
    fileName: "",
  });

  const handleClick = () => {
    if (hiddenFileInputRef.current) {
      hiddenFileInputRef.current.click();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setUploadState({
        status: "uploading",
        width: "10%",
        fileName: file.name,
      });

      setTimeout(() => {
        setUploadState({
          status: "success",
          width: "100%",
          fileName: file.name,
        });
      }, 1000);
    }
  };

  return (
    <section>
      {/* Referral upload input */}
      <div
        className="w-full h-[120px] border rounded-md border-dashed border-gray-500 flex flex-col justify-end items-center cursor-pointer pb-[10px]"
        onClick={handleClick}
      >
        <input
          className="hidden"
          type="file"
          ref={hiddenFileInputRef}
          accept=".csv"
          onChange={handleFileUpload}
          disabled={uploadState.fileName ? true : false}
        />

        <p className="text-base font-roboto text-[#000000DE] flex gap-1 ">
          <span className="cursor-pointer underline text-[#2196F3]">
            Click to upload
          </span>
          or drag and drop your referral
        </p>
        <p className="text-sm font-roboto text-[#00000099] mt-0.5">
          pdf, doc, txt, rtf, docx
        </p>
      </div>
      {uploadState.fileName && (
        <div className="flex items-center w-full gap-4 p-4 mt-2 rounded-sm">
          <div className="flex-none">
            <MdOutlineUploadFile
              className={`text-[25px] ${
                uploadState.status === "uploading"
                  ? "text-primary"
                  : uploadState.status === "success"
                    ? "text-green-500"
                    : "text-red-500"
              }`}
            />
          </div>
          <div className="flex items-center justify-between flex-1">
            <div>
              <p className="text-sm font-medium text-[#000000DE] mb-1 leading-none">
                {uploadState.fileName}
              </p>
              <p className="text-xs text-[#000000a5]">
                <span>
                  {uploadState.status === "uploading"
                    ? "Loading"
                    : uploadState.status === "success"
                      ? "Uploaded"
                      : "Failed"}
                </span>
              </p>
              <div
                className={`w-[200px] h-[4px] rounded-full mt-1.5 ${
                  uploadState.status === "uploading"
                    ? "bg-[#13018593]"
                    : uploadState.status === "success"
                      ? "bg-green-200"
                      : "bg-red-200"
                }`}
              >
                <div
                  className={`h-full rounded-full ${
                    uploadState.status === "uploading"
                      ? "bg-primary"
                      : uploadState.status === "success"
                        ? "bg-green-500"
                        : "bg-red-500"
                  }`}
                  style={{
                    width: uploadState.width,
                    transition: "width 1s",
                  }}
                />
              </div>
            </div>
            <button
              className="text-[#000000a5] text-lg transitions hover:text-primary"
              onClick={() => {
                setUploadState({
                  status: "none",
                  width: "10%",
                  fileName: "",
                });
                if (hiddenFileInputRef.current) {
                  hiddenFileInputRef.current.value = "";
                }
              }}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      )}

      <div
        className="w-full h-[100px] mt-3 border rounded-md border-dashed border-gray-500 flex flex-col justify-center items-center cursor-pointer pb-[10px]"
        onClick={handleClick}
      >
        <input
          className="hidden"
          type="file"
          ref={hiddenFileInputRef}
          accept=".csv"
          onChange={handleFileUpload}
          disabled={uploadState.fileName ? true : false}
        />

        <p className="text-base font-roboto text-[#000000DE] flex gap-1 ">
          <span className="cursor-pointer underline text-[#2196F3]">
            Click to upload
          </span>
          or drag and drop other information such as test results
        </p>
        <p className="text-sm font-roboto text-[#00000099] mt-0.5">
          pdf, doc, txt, rtf, docx (max. 3MB)
        </p>
      </div>
    </section>
  );
};

export default UploadReferralFile;
