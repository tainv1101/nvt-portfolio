"use client";
import { SubmitHandler, useForm, useFormState, useWatch } from "react-hook-form";
import { NormalFormType } from "../../types";
import { ScrollArea } from "@radix-ui/react-scroll-area";

import InputWrapper from "../../../../../components/Form/InputWrapper/InputWrapper";
import PreviewNormalForm from "../PreviewNormalForm/PreviewNormalForm";

function Normal() {
  const {
    register,
    handleSubmit,
    control,
    setError,
    reset,
    getValues,
    formState: { isSubmitSuccessful, isSubmitting },
    trigger,
  } = useForm<NormalFormType>({
    defaultValues: {
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      acceptTermsAndConditions: false,
    },
    mode: "onBlur",
    shouldFocusError: true,
    // resetOptions: {
    //   keepDefaultValues: true
    // }
  });

  const { errors } = useFormState({ control });

  const onSubmit: SubmitHandler<NormalFormType> = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", { message: "Password does not match" });
      return;
    }

    // Giả lập quá trình submit mất 1.5 giây
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("onSubmit", data);

    // Reset form về giá trị mặc định
    reset();
  };

  //if wanto trigger re-rendering
  // const watchData = watch();
  const watchData = useWatch({ control }) as NormalFormType;
  const errorClassName = "text-red-500 mt-2 ml-2 mb-1";


  // ***************** Test Zod *****************
  // const mySchema = z.object({
  //   tuple: z.tuple([
  //     z.string(),
  //     z.number(),
  //     z.enum(["a", "b", "c"]),
  //   ]),
  //   array: z.array(z.string()).nonempty().max(3),
  //   union: z.union([z.string(), z.number()]),
  //   discriminatedUnion: z.discriminatedUnion("type", [
  //     z.object({
  //       type: z.literal("data"),
  //       data: z.string(),
  //     }),
  //     z.object({
  //       type: z.literal("error"),
  //       error: z.string(),
  //     }),
  //   ])
  // }
  // )

  // // parsing
  // const parsed = mySchema.safeParse({
  //   tuple: ["tuna", 15, "a"],
  //   array: ["e"],
  //   union: 155,
  //   discriminatedUnion: {
  //     type: "data",
  //     data: "data"
  //   }
  // });
  // console.log("parsed", parsed)
  // ***************** Test Zod *****************

  return (
    <div>
      <ScrollArea className="xl:h-fit h-[520px] w-full overflow-auto scrollbar pt-8">
        <form className="mr-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col xl:flex-row gap-8">
            <div className="flex flex-col gap-6 w-full">
              <InputWrapper
                id="userName"
                label="User Name"
                isError={!!errors.userName}
                errorMessage={errors.userName?.message}
                inputProps={register("userName", {
                  required: "User Name is required",
                  minLength: { value: 3, message: "Must be at least 3 characters" },
                })}
              />
              {/* <div className={inputWrapperClassName}>
              <input
                className={inputClassName}
                autoComplete="off"
                type="text"
                id="age"
                placeholder=" "
                {...register("age", {
                  required: "Age is required",
                  // validate: (value) => !isNaN(value) || "Only numbers are allowed",
                  valueAsNumber: true,
                })}
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
                }}
              />
              <label className={labelClassName} htmlFor="age">
                Age (Only number)
              </label>
              {errors.age && <p className={errorClassName}>{errors.age.message}</p>}
            </div> */}


              <InputWrapper
                id="phoneNumber"
                label="Phone Number"
                isError={!!errors.phoneNumber}
                errorMessage={errors.phoneNumber?.message}
                inputType="number"
                inputProps={register("phoneNumber", {
                  pattern: { value: /^[0-9]+$/, message: "Only numbers are allowed" },
                  minLength: { value: 10, message: "Must be at least 10 digits" },
                })}
              />

              {/* <div className={inputWrapperClassName}>
                <label htmlFor="gender">Gender</label>
                <div className="flex gap-4 mt-2 mb-1">
                  {Object.entries(GenderEnum).map(([key, value]) => (
                    <label key={key} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        autoComplete="off"
                        value={value}
                        {...register("gender")}
                        className="hidden peer"
                      />
                      <div className="w-5 h-5 border-2 border-gray-500 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"></div>
                      <span className="ml-2 capitalize">{value}</span>
                    </label>
                  ))}
                </div>
              </div> */}

              <InputWrapper
                id="email"
                label="Email"
                isError={!!errors.email}
                errorMessage={errors.email?.message}
                inputType="email"
                inputProps={register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" },
                })}
              />

              <InputWrapper
                id="password"
                label="Password"
                isError={!!errors.password}
                errorMessage={errors.password?.message}
                inputType="password"
                inputProps={register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Must be at least 6 characters" },
                })}
              />

              <InputWrapper
                id="confirmPassword"
                label="Confirm Password"
                isError={!!errors.email}
                errorMessage={errors.email?.message}
                inputType="password"
                inputProps={register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) => value === getValues("password") || "Passwords do not match",
                })}
              />


              <div>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="size-[18px]"
                    id="acceptTermsAndConditions"
                    {...register("acceptTermsAndConditions", {
                      required: "You must accept the terms and conditions",
                    })}
                    onInput={(e) => {
                      trigger("acceptTermsAndConditions");
                      return e.currentTarget.value;
                    }}
                  />
                  <label className="cursor-pointer" htmlFor="acceptTermsAndConditions">
                    Accept Terms & Conditions
                  </label>
                </div>
                {errors.acceptTermsAndConditions && (
                  <p className={errorClassName}>{errors.acceptTermsAndConditions.message}</p>
                )}
              </div>
            </div>

            {/* real-time preview data */}
            <PreviewNormalForm previewData={watchData} submitSuccess={isSubmitSuccessful} />
          </div>
        </form>

      </ScrollArea>
      <div className="flex justify-end">
        <button
          type="submit"
          className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600  mt-8 flex items-center justify-center transition-all ${isSubmitting && "animate-pulse"}`}
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default Normal;


