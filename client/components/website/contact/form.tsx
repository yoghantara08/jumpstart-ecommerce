import React from "react";
import { useForm } from "react-hook-form";
import { emailPattern } from "@/utils/validation-pattern";
import Input from "../form/input";
import TextArea from "../form/text-area";

interface IContactForm {
  name: string;
  email: string;
  question: string;
}

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IContactForm>({
    criteriaMode: "all",
  });

  const submitHandler = (data: IContactForm) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="p-5 space-y-3 order-2 md:order-1"
    >
      <Input
        errors={errors}
        register={register}
        label="Name"
        name="name"
        validation={{
          required: "This input is required.",
        }}
        className="p-3"
      />
      <Input
        errors={errors}
        register={register}
        label="Email"
        name="email"
        type="email"
        validation={{
          required: "This input is required.",
          pattern: emailPattern,
        }}
        className="p-3"
      />
      <TextArea
        errors={errors}
        register={register}
        label="Your Question"
        name="question"
        validation={{
          required: "This input is required.",
        }}
        className="p-3"
      />
      <button type="submit" className="button-primary py-2">
        Send Question
      </button>
    </form>
  );
};

export default ContactForm;
