import { useForm } from "react-hook-form";
import { ICreateReferralProp } from "../type";
import Navbar from "../../../components/global/Navbar";
import { Button, Input, MultiSelect } from "../../../components/ui";
import UploadReferralFile from "../component/UploadReferralFile";

const ExternalReferral = () => {
  const { register, handleSubmit, setValue } = useForm<ICreateReferralProp>();

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

          <p className="text-black 3xl:text-[20px] md:text-lg text-base mb-3.5">
            Please note that to make an appointment, you will first need a
            referral from your GP.
          </p>

          <p className="mb-1 font-bold text-black ">Submit your referral </p>
          <p className="text-center md:text-lg text-base 3xl:text-[20px] !leading-[22px] w-full mx-auto">
            You can use this form to submit your referral and request an
            appointment. Please provide your details and upload the referral
            from your GP. After submitting the form, your referral will be
            processed, and a member of our team will get in touch with you.
          </p>
        </section>

        {/* Form section */}
        <form
          className="grid w-full grid-cols-12 lg:gap-x-[70px] lg:gap-y-[40px] mt-[25px]"
          onSubmit={handleSubmit(submitData)}
        >
          {/* Form inputs */}
          <div className="lg:col-span-5 col-span-full">
            <div>
              {/* Clinic details */}
              <div>
                <h3 className="xl:text-[24px] md:text-[20px] text-[#000000DE] text-base font-roboto ">
                  Desired service
                </h3>

                {/* Department select option */}
                <div className="items-center gap-2 mt-3 md:flex">
                  <div className=" w-full xl:w-[30%] mb-1 md:w-[30%] lg:w-[40%]">
                    <p className="text-sm text-[#757575] text-nowrap ">
                      Clinic/Department
                    </p>
                  </div>
                  <div className="w-full xl:w-[70%] lg:w-[60%]">
                    <MultiSelect
                      options={options}
                      onChange={(value) => {
                        setValue("department", value.toString());
                      }}
                    />
                  </div>
                </div>

                {/* Consultant select option */}
                <div className="items-center gap-2 mt-3 md:flex">
                  <div className=" w-full xl:w-[30%] mb-1 md:w-[30%] lg:w-[40%]">
                    <p className="text-sm text-[#757575] text-nowrap ">
                      Consultant
                    </p>
                  </div>
                  <div className="w-full xl:w-[70%] lg:w-[60%]">
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
                <h3 className="xl:text-[24px] md:text-[20px] text-[#000000DE] text-base font-roboto mb-6">
                  Your Patient Details
                </h3>

                {/* Fullname input */}
                <div className="items-center gap-2 md:flex">
                  <div className=" w-full xl:w-[30%] mb-1 md:w-[30%] lg:w-[40%]">
                    <p className="text-sm text-[#757575] text-nowrap ">
                      Full Name
                    </p>
                  </div>
                  <div className="w-full xl:w-[70%] lg:w-[60%]">
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
                <div className="items-center gap-2 mt-3 md:flex">
                  <div className=" w-full xl:w-[30%] mb-1 md:w-[30%] lg:w-[40%]">
                    <p className="text-sm text-[#757575] text-nowrap ">
                      Email Address
                    </p>
                  </div>
                  <div className="w-full xl:w-[70%] lg:w-[60%]">
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
                <div className="items-center gap-2 mt-3 md:flex">
                  <div className=" w-full xl:w-[30%] mb-1 md:w-[30%] lg:w-[40%]">
                    <p className="text-sm text-[#757575] text-nowrap ">
                      Telephone
                    </p>
                  </div>
                  <div className="w-full xl:w-[70%] lg:w-[60%]">
                    <Input
                      name="phone_number"
                      type="tel"
                      placeholder="+92 323083883-7"
                      className="relative"
                      register={register}
                    />
                  </div>
                </div>

                {/* Captcha 
                <div className="flex justify-end mt-8">
                  <img src="/image/capcha-img.png" alt="" />
                </div>*/}
              </div>
            </div>
          </div>

          {/* Referral upload section */}
          <div className="mt-6 lg:col-span-7 col-span-full lg:mt-0">
            <div>
              <h3 className="xl:text-[24px] md:text-[20px] text-[#000000DE] text-base font-roboto mb-6">
                Referral Letter
              </h3>
              <p className="text-black text-sm mb-2.5 leading-none">
                Appointments require a referral letter which you can upload
                here.
              </p>
            </div>

            {/* Referral upload input */}
            <div>
              <UploadReferralFile />
            </div>

            {/* Additional information */}
            <div className="mt-5">
              <h3 className="xl:text-[24px] md:text-[20px] text-[#000000DE] text-base font-roboto mb-3.5">
                Additional Information
              </h3>

              <p className="text-sm font-poppin">
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
          <div className="flex items-center justify-center mt-6 lg:mt-0 col-span-full">
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
