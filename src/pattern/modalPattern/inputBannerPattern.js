import { errorOptions } from "../error";

export const inputAddBanner = [
  {
    name: "banner_name",
    type: "text",
    labelText: "Name Banner",
    optionError: errorOptions.name_banner,
  },

  {
    name: "start_date_banner",
    type: "date",
    labelText: "Start Date Banner",
    optionError: errorOptions.start_date_banner,
  },
  {
    name: "end_date_banner",
    type: "date",
    labelText: "End Date Banner",
    optionError: errorOptions.end_date_banner,
  },
  {
    name: "banner_img",
    type: "file",
    labelText: "Image Banner: ",
    optionError: errorOptions.img,
  },
  {
    name: "status",
    type: "select",
    labelText: "Status Banner",
    optionDisabledText: "Select Status",
    options: [
      { value: "true", label: "Active" },
      { value: "false", label: "Inactive" },
    ],
    optionError: errorOptions.status,
  },
];

export const inputEditBanner = (data) => {
  return [
    {
      name: "banner_name",
      type: "text",
      labelText: "Name Banner",
      key: "id",
      defaultValue: data.title,
      optionError: errorOptions.name_banner,
    },

    {
      name: "start_date_banner",
      type: "date",
      labelText: "Start Date Banner",
      key: "startDate",
      defaultValue: data.startDate,
      optionError: errorOptions.start_date_banner,
    },
    {
      name: "end_date_banner",
      type: "date",
      labelText: "End Date Banner",
      key: "endDate",
      defaultValue: data.endDate,
      optionError: errorOptions.end_date_banner,
    },
    {
      name: "status",
      type: "select",
      labelText: "Status Banner",
      optionDisabledText: "Select Status",
      key: "status",
      defaultValue: data.status,
      options: [
        { value: true, label: "Active" },
        { value: false, label: "Inactive" },
      ],
    },
    {
      name: "banner_img",
      type: "file",
      labelText: "Image Banner: ",
      key: "img",
      defaultValue: data.img,
    },
  ];
};
