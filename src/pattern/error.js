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

  title_about: {
    required: "Title is Required",
    minLength: {
      value: 4,
      message: "Title must be at least 4 characters",
    },
  },

  desc_about: {
    required: "Description is Required",
    minLength: {
      value: 10,
      message: "Description must be at least 10 characters",
    },
  },

  title_film: {
    required: "Title Film is Required",
    minLength: {
      value: 4,
      message: "Title Film must be at least 4 characters",
    },
  },

  sinopsis_film: {
    required: "Sinopsis Film is Required",
    minLength: {
      value: 6,
      message: "Sinopsis Film must be at least 6 characters",
    },
  },

  url: {
    required: "Url is Required",

    pattern: {
      value:
        /^(https?:\/\/)?([\w\-]+\.)+[\w-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/,
      message: "Format link tidak valid",
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

  name_province: {
    required: "Name Province is Required",
    minLength: {
      value: 4,
      message: "Name Provice must be at least 4 characters",
    },
  },

  code_province: {
    required: "Code Province is Required",
    minLength: {
      value: 3,
      message: "Code Province must be at least 3 characters",
    },
    maxLength: {
      value: 3,
      message: "Code Province must be at most 3 characters",
    },
  },

  select_country: {
    required: "Select Country is Required",
  },

  name_city: {
    required: "Name City is Required",
    minLength: {
      value: 4,
      message: "Name City must be at least 4 characters",
    },
  },

  code_city: {
    required: "Code City is Required",
    minLength: {
      value: 3,
      message: "Code City must be at least 3 characters",
    },
    maxLength: {
      value: 3,
      message: "Code City must be at most 3 characters",
    },
  },

  select_province: {
    required: "Select Province is Required",
  },

  name_office: {
    required: "Name Office is Required",
    minLength: {
      value: 4,
      message: "Name Office must be at least 4 characters",
    },
  },

  social_media: {
    required: "Social Media is Required",
  },

  select_city: {
    required: "Select City is Required",
  },
  adress: {
    required: "Address is Required",
  },
  longitute: {
    required: "Longitute is Required",
    pattern: {
      value: /^-?\d+(\.\d+)?$/,
      message: "Hanya boleh angka",
    },
  },
  latitude: {
    required: "Latitude is Required",
    pattern: {
      value: /^-?\d+(\.\d+)?$/,
      message: "Hanya boleh angka",
    },
  },
};
