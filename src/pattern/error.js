import { max } from "date-fns";

export const errorOptions = {
  username: {
    required: "Username is Required",
    minLength: {
      value: 5,
      message: "Username must be at least 5 characters",
    },
  },

  password: {
    required: "Password is Required",
    minLength: {
      value: 4,
      message: "Password must be at least 4 characters",
    },
  },

  name_banner: {
    required: "Name Banner is Required",
    minLength: {
      value: 4,
      message: "Name Banner must be at least 4 characters",
    },
  },

  start_date_banner: {
    required: "Start Date Banner is Required",
  },

  end_date_banner: {
    required: "End Date Banner is Required",
  },

  status: {
    required: "Status is Required",
  },

  img: {
    required: "Image is Required",
  },

  name_country: {
    required: "Name Country is Required",
    minLength: {
      value: 4,
      message: "Name Country must be at least 4 characters",
    },
  },

  code_country: {
    required: "Code Country is Required",
    minLength: {
      value: 3,
      message: "Code Country must be at least 3 characters",
    },
    maxLength: {
      value: 3,
      message: "Code Country must be at most 3 characters",
    },
  },
};
