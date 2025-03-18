import { errorOptions } from "../error";

export const inputAddProvince = (options) => [
  {
    labelText: "Province Name",
    name: "province_name",
    type: "text",
    grid: 12,
    optionError: errorOptions.name_province,
  },
  {
    labelText: "Province Code",
    name: "province_code",
    type: "text",
    grid: 12,
    optionError: errorOptions.code_province,
  },
  {
    name: "id_country",
    type: "select",
    labelText: "Name Country",
    optionDisabledText: "Select Country",
    options,
    optionError: errorOptions.select_country,
  },
];

export const inputEditProvince = (defaultValues, options) => {
  return [
    {
      labelText: "Province Name",
      name: "province_name",
      type: "text",
      defaultValue: defaultValues.name,
      optionError: errorOptions.name_province,
    },
    {
      labelText: "Province Code",
      name: "province_code",
      type: "text",
      defaultValue: defaultValues.code,
      optionError: errorOptions.code_province,
    },
    {
      name: "id_country",
      type: "select",
      labelText: "Name Country",
      optionDisabledText: "Select Country",
      defaultValue: defaultValues.country_id,
      options,
      optionError: errorOptions.select_country,
    },
    {
      name: "status",
      type: "select",
      labelText: "Status",
      optionDisabledText: "Select Status",
      defaultValue: defaultValues.status,
      grid: 4,
      options: [
        { label: "Active", value: true },
        { label: "Inactive", value: false },
      ],
    },
  ];
};
