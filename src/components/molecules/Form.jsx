import { useEffect } from "react";
import { InputForm } from ".";
import { Button } from "../atom";
import { useForm } from "react-hook-form";

const generateDefaultValue = (configInput) => {
  return configInput?.reduce((acc, curr) => {
    if (curr.defaultValue === undefined) return acc;

    if (curr.name.includes("date")) {
      acc[curr.name] = new Date(curr.defaultValue)?.toISOString().split("T")[0];
    } else {
      acc[curr.name] = curr.defaultValue;
    }
    return acc;
  }, {});
};

const Form = ({
  configInput,
  buttonText,
  forType,
  type,
  handleSubmitData,
  className,
  handleShowSidebar,
  dataDefault,
  handleOpenModal,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: generateDefaultValue(configInput) });

  const onSubmit = (data) => {
    handleSubmitData(data);
  };

  useEffect(() => {
    const defaultValues = generateDefaultValue(configInput);
    if (type === "edit") {
      reset(defaultValues);
    } else if (type === "add") {
      const emptyValues = configInput.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {});

      reset(emptyValues);
    }
  }, [type, dataDefault, reset]);

  return (
    <>
      <form
        key={type}
        onSubmit={handleSubmit(onSubmit)}
        className={className || ""}
      >
        <InputForm
          config={configInput}
          register={register}
          error={errors}
          watch={watch}
        />

        {forType === "sidebar" ? (
          <div className="flex justify-between items-center">
            <div className="space-x-2 ">
              <Button
                className={"py-2 px-3 rounded-md bg-green-500 text-white"}
              >
                Save
              </Button>

              <Button
                className={"py-2 px-3 rounded-md bg-gray-400 text-white"}
                onClick={handleShowSidebar}
                type="button"
              >
                Cancel
              </Button>
            </div>

            {type !== "add" && (
              <div>
                <Button
                  className={"py-2 px-3 rounded-md bg-red-600 text-white"}
                  onClick={() => handleOpenModal("delete")}
                  type="button"
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
        ) : (
          <Button
            className={`bg-blue-600 rounded-sm py-2 w-full  text-center text-white cursor-pointer hover:bg-blue-700`}
          >
            {buttonText}
          </Button>
        )}
      </form>
    </>
  );
};

export default Form;
