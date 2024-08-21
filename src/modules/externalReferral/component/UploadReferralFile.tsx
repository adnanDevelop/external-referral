import { useRef, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { MdOutlineUploadFile } from "react-icons/md";

const UploadReferralFile = () => {
  const hiddenFileInputRef1 = useRef<HTMLInputElement>(null);
  const hiddenFileInputRef2 = useRef<HTMLInputElement>(null);

  const [uploadState1, setUploadState1] = useState({
    status: "none" as "uploading" | "success" | "failure" | "none",
    width: "10%",
    fileName: "",
  });

  const [uploadState2, setUploadState2] = useState({
    status: "none" as "uploading" | "success" | "failure" | "none",
    width: "10%",
    fileName: "",
  });

  const handleClick = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setUploadState: React.Dispatch<
      React.SetStateAction<{
        status: "uploading" | "success" | "failure" | "none";
        width: string;
        fileName: string;
      }>
    >
  ) => {
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
      {/* First upload input */}
      <div
        className="w-full h-[100px] border rounded-md border-dashed border-gray-500 flex flex-col justify-end items-center cursor-pointer pb-[10px]"
        onClick={() => handleClick(hiddenFileInputRef1)}
      >
        <input
          className="hidden"
          type="file"
          ref={hiddenFileInputRef1}
          accept=".csv"
          onChange={(e) => handleFileUpload(e, setUploadState1)}
          disabled={uploadState1.fileName ? true : false}
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
      {uploadState1.fileName && (
        <div className="flex items-center w-full gap-4 p-4 mt-2 rounded-sm">
          <div className="flex-none">
            <MdOutlineUploadFile
              className={`text-[25px] ${
                uploadState1.status === "uploading"
                  ? "text-primary"
                  : uploadState1.status === "success"
                    ? "text-green-500"
                    : "text-red-500"
              }`}
            />
          </div>
          <div className="flex items-center justify-between flex-1">
            <div>
              <p className="text-sm font-medium text-[#000000DE] mb-1 leading-none">
                {uploadState1.fileName}
              </p>
              <p className="text-xs text-[#000000a5]">
                <span>
                  {uploadState1.status === "uploading"
                    ? "Loading"
                    : uploadState1.status === "success"
                      ? "Uploaded"
                      : "Failed"}
                </span>
              </p>
              <div
                className={`w-[200px] h-[4px] rounded-full mt-1.5 ${
                  uploadState1.status === "uploading"
                    ? "bg-[#13018593]"
                    : uploadState1.status === "success"
                      ? "bg-green-200"
                      : "bg-red-200"
                }`}
              >
                <div
                  className={`h-full rounded-full ${
                    uploadState1.status === "uploading"
                      ? "bg-primary"
                      : uploadState1.status === "success"
                        ? "bg-green-500"
                        : "bg-red-500"
                  }`}
                  style={{
                    width: uploadState1.width,
                    transition: "width 1s",
                  }}
                />
              </div>
            </div>
            <button
              className="text-[#000000a5] text-lg transitions hover:text-primary"
              onClick={() => {
                setUploadState1({
                  status: "none",
                  width: "10%",
                  fileName: "",
                });
                if (hiddenFileInputRef1.current) {
                  hiddenFileInputRef1.current.value = "";
                }
              }}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      )}

      {/* Second upload input */}
      <div
        className="w-full h-[100px] mt-3 border rounded-md border-dashed border-gray-500 flex flex-col justify-center items-center cursor-pointer pb-[10px]"
        onClick={() => handleClick(hiddenFileInputRef2)}
      >
        <input
          className="hidden"
          type="file"
          ref={hiddenFileInputRef2}
          accept=".csv"
          onChange={(e) => handleFileUpload(e, setUploadState2)}
          disabled={uploadState2.fileName ? true : false}
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
      {uploadState2.fileName && (
        <div className="flex items-center w-full gap-4 p-4 mt-2 rounded-sm">
          <div className="flex-none">
            <MdOutlineUploadFile
              className={`text-[25px] ${
                uploadState2.status === "uploading"
                  ? "text-primary"
                  : uploadState2.status === "success"
                    ? "text-green-500"
                    : "text-red-500"
              }`}
            />
          </div>
          <div className="flex items-center justify-between flex-1">
            <div>
              <p className="text-sm font-medium text-[#000000DE] mb-1 leading-none">
                {uploadState2.fileName}
              </p>
              <p className="text-xs text-[#000000a5]">
                <span>
                  {uploadState2.status === "uploading"
                    ? "Loading"
                    : uploadState2.status === "success"
                      ? "Uploaded"
                      : "Failed"}
                </span>
              </p>
              <div
                className={`w-[200px] h-[4px] rounded-full mt-1.5 ${
                  uploadState2.status === "uploading"
                    ? "bg-[#13018593]"
                    : uploadState2.status === "success"
                      ? "bg-green-200"
                      : "bg-red-200"
                }`}
              >
                <div
                  className={`h-full rounded-full ${
                    uploadState2.status === "uploading"
                      ? "bg-primary"
                      : uploadState2.status === "success"
                        ? "bg-green-500"
                        : "bg-red-500"
                  }`}
                  style={{
                    width: uploadState2.width,
                    transition: "width 1s",
                  }}
                />
              </div>
            </div>
            <button
              className="text-[#000000a5] text-lg transitions hover:text-primary"
              onClick={() => {
                setUploadState2({
                  status: "none",
                  width: "10%",
                  fileName: "",
                });
                if (hiddenFileInputRef2.current) {
                  hiddenFileInputRef2.current.value = "";
                }
              }}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default UploadReferralFile;
