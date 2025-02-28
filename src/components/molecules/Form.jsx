import { InputForm } from ".";
import { Button } from "../atom";
import { useForm } from "react-hook-form";

const Form = ({ configInput, buttonText, handleSubmitData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => handleSubmitData(data);
  const inputValues = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        config={configInput}
        register={register}
        error={errors}
        inputValues={inputValues}
      />

      <Button className="bg-blue-600 rounded-sm w-full py-2 text-center text-white cursor-pointer hover:bg-blue-700">
        {buttonText}
      </Button>
    </form>
  );
};

export default Form;
