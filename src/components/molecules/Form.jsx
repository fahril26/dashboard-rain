import { InputForm } from ".";
import { Button } from "../atom";
import { useForm } from "react-hook-form";

const generateDefaultValue = (configInput) => {
  return configInput.reduce((acc, curr) => {
    if (curr.defaultValue === undefined) return acc;

    if (curr.name.includes("date")) {
      acc[curr.name] = new Date(curr.defaultValue)?.toISOString().split("T")[0];
    } else {
      acc[curr.name] = curr.defaultValue;
    }
    return acc;
  }, {});
};

const Form = ({ configInput, buttonText, handleSubmitData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: generateDefaultValue(configInput),
  });

  const onSubmit = (data) => {
    handleSubmitData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        config={configInput}
        register={register}
        error={errors}
        watch={watch}
      />

      <Button className="bg-blue-600 rounded-sm w-full py-2 text-center text-white cursor-pointer hover:bg-blue-700">
        {buttonText}
      </Button>
    </form>
  );
};

export default Form;
