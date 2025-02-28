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
};
