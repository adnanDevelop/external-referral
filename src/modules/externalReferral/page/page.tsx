// import PhoneInput from "react-phone-input-2";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { ICreateReferralProp } from "../type";
import Navbar from "../../../components/global/Navbar";
import { Button, Input, MultiSelect } from "../../../components/ui";

const ExternalReferral = () => {
  const { register, handleSubmit, setValue } = useForm<ICreateReferralProp>();

  const hiddenFileInputRef = useRef<HTMLInputElement>(null);
  const options: { label: string; value: string }[] = [
    {
      label: "Beacon Hospital",
      value: "Beacon Hospital",
    },
    {
      label: "GM Hospital",
      value: "GM Hospital",
    },
  ];

  const handleClick = () => {
    if (hiddenFileInputRef.current) {
      hiddenFileInputRef.current.click();
    }
  };

  const submitData = (data: ICreateReferralProp) => {
    console.log(data);
  };

  return (
    <div className="pb-[80px]">
      <header>
        <Navbar />
      </header>

      <main className="mt-3 max-w-[1300px] mx-auto px-[25px]">
        {/* Title section */}
        <section className="text-center">
          <h2 className="3xl:text-[48px] md:text-[30px] text-[25px] text-primary ">
            Request a new appointment
          </h2>

          <p className="text-black 3xl:text-[20px] md:text-lg text-base mb-2.5">
            Please note that to make an appointment, you will first need a
            referral from your GP.
          </p>

          <p className="mb-1 font-bold text-black ">Submit your referral </p>
          <p className="text-center leading-[22px] md:text-lg text-base 3xl:text-[20px] w-full mx-auto">
            You can use this form to submit your referral and request an
            appointment. Please provide your details and upload the referral
            from your GP. After submitting the form, your referral will be
            processed, and a member of our team will get in touch with you.
          </p>
        </section>

        {/* Form section */}
        <form
          className="grid w-full grid-cols-12 lg:gap-[80px] mt-[25px]"
          onSubmit={handleSubmit(submitData)}
        >
          {/* Form inputs */}
          <div className="lg:col-span-5 col-span-full">
            <div>
              {/* Clinic details */}
              <div>
                <h3 className="2xl:text-[25px] text-base font-roboto ">
                  Desired service
                </h3>

                {/* Department select option */}
                <div className="items-center gap-3 mt-6 md:flex">
                  <div className="basis-1/5">
                    <p className="text-[13px] text-[#757575] text-nowrap ">
                      Clinic/Department
                    </p>
                  </div>
                  <div className="basis-4/5">
                    <MultiSelect
                      options={options}
                      onChange={(value) => {
                        setValue("department", value.toString());
                      }}
                    />
                  </div>
                </div>

                {/* Consultant select option */}
                <div className="items-center gap-3 mt-6 md:flex">
                  <div className="basis-1/5">
                    <p className="text-[13px] text-[#757575] text-nowrap ">
                      Consultant
                    </p>
                  </div>
                  <div className="basis-4/5">
                    <MultiSelect
                      options={options}
                      onChange={(value) =>
                        setValue("consultant", value.toString())
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Patient details */}
              <div className="mt-6 ">
                <h3 className="2xl:text-[25px] text-base font-roboto mb-6">
                  Your Patient Details
                </h3>

                {/* Fullname input */}
                <div className="items-center gap-3 md:flex">
                  <div className="basis-1/5">
                    <p className="text-[13px] text-[#757575] text-nowrap ">
                      Full Name
                    </p>
                  </div>
                  <div className="basis-4/5">
                    <Input
                      name="fullName"
                      type="text"
                      placeholder="John Doe"
                      className="relative"
                      register={register}
                    />
                  </div>
                </div>

                {/* Email input */}
                <div className="items-center gap-3 mt-3 md:flex">
                  <div className="basis-1/5">
                    <p className="text-[13px] text-[#757575] text-nowrap ">
                      Email Address
                    </p>
                  </div>
                  <div className="basis-4/5">
                    <Input
                      name="input"
                      type="email"
                      placeholder="Testing@gmail.com"
                      className="relative"
                      register={register}
                    />
                  </div>
                </div>

                {/* Mobile number input */}
                <div className="items-center gap-3 mt-3 md:flex">
                  <div className="basis-1/5">
                    <p className="text-[13px] text-[#757575] text-nowrap ">
                      Telephone
                    </p>
                  </div>
                  <div className="basis-4/5">
                    <Input
                      name="phone_number"
                      type="tel"
                      placeholder="+92 323083883-7"
                      className="relative"
                      register={register}
                    />
                  </div>
                </div>

                {/* Captcha */}
                <div className="flex justify-end mt-8">
                  <img src="/image/capcha-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Referral upload section */}
          <div className="lg:col-span-7 col-span-full">
            <div>
              <h3 className="2xl:text-[25px] text-base font-roboto mb-3">
                Referral Letter
              </h3>
              <p className="text-black 3xl:text-[20px] md:text-lg text-base mb-2.5">
                Appointments require a referral letter which you can upload
                here.
              </p>
            </div>

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

            {/* Additional information */}
            <div className="mt-5">
              <h3 className="2xl:text-[25px] text-base font-roboto mb-3.5">
                Additional Information
              </h3>

              <p className="leading-[22px] md:text-lg text-base 3xl:text-[20px]">
                Please add any additional information relevant to your referral.
                Please indictae if this is your initial appointment or renewal
                appointment.
              </p>

              <textarea
                className="w-full h-[115px] p-1.5 border border-gray-500 rounded-md mt-2.5 focus:outline-none text-[13px]"
                {...register("description")}
              ></textarea>
            </div>
          </div>
          <div className="flex items-cenc:\Users\adnan\AppData\Local\CapCut\Videos\0819.mp4ter justify-center col-span-full">
            <Button outline className="border-none">
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ExternalReferral;
