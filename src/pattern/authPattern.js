import { FaEye } from "react-icons/fa";
import { errorOptions } from "./error";

export const loginPattern = [
  {
    name: "username",
    type: "text",
    grid: 12,
    labelText: "Username",
    optionError: errorOptions.username,
  },
  {
    name: "password",
    type: "password",
    labelText: "Password",
    grid: 12,
    icon: FaEye,
    optionError: errorOptions.password,
  },
];
