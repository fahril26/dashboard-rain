import { FaEye } from "react-icons/fa";
import { errorOptions } from "./error";

export const loginPattern = [
  {
    name: "username",
    type: "text",
    labelText: "Username",
    optionError: errorOptions.username,
  },
  {
    name: "password",
    type: "password",
    labelText: "Password",
    icon: FaEye,
    optionError: errorOptions.password,
  },
];
