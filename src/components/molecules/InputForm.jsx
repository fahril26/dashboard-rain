import { useState } from "react";
import { Button } from "../atom";
import { FaEyeSlash } from "react-icons/fa";

const InputForm = ({ config, register, inputValues, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {config.map((data, index) => (
        <div className="mb-6 relative" key={index}>
          <input
            type={!showPassword ? data.type : "text"}
            {...register(data.name, data.optionError)}
            id={data.name}
            className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-white"
          />
          <label
            htmlFor={data.name}
            style={{ pointerEvents: "none" }}
            className={`absolute left-4 bg-white transition-all text-gray-600 ${
              inputValues[data.name]
                ? "-top-2.5 text-xs px-1"
                : "top-2 text-base"
            } peer-focus:text-xs peer-focus:px-1 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:font-semibold cursor-text`}
          >
            {data.labelText}
          </label>

          {data.icon && (
            <Button
              type={"button"}
              className="absolute right-4 top-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <data.icon /> : <FaEyeSlash />}
            </Button>
          )}

          {error[data.name] && (
            <small className="text-[10px] mb-3 text-red-600">
              {error[data.name]?.message}
            </small>
          )}
        </div>
      ))}
    </>
  );
};

export default InputForm;
