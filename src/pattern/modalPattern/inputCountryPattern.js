import { errorOptions } from "../error";

export const inputAddCountry = [
  {
    labelText: "Country Name",
    name: "country_name",
    type: "text",
    optionError: errorOptions.name_country,
  },
  {
    labelText: "Country Code",
    name: "country_code",
    type: "text",
    optionError: errorOptions.code_country,
  },
];

export const inputEditCountry = (data) => {
  return [
    {
      labelText: "Country Name",
      name: "country_name",
      type: "text",
      defaultValue: data.name,
      optionError: errorOptions.name_country,
    },
    {
      labelText: "Country Code",
      name: "country_code",
      type: "text",
      defaultValue: data.code,
      optionError: errorOptions.code_country,
    },
  ];
};
