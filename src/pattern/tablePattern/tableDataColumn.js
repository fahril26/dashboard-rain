export const configTableFilms = [
  { title: "Title", key: "nama_film", type: "text" },
  { title: "Sinopsis", key: "sinopsis_film_id", type: "text" },
  { title: "Traier", key: "trailer_film", type: "text" },
  {
    title: "Poster",
    key: "poster_film",
    type: "select",
    placeholder: "Type File",
    options: [
      { label: "All", value: "" },
      { label: "JPEG", value: "jpeg" },
      { label: "JPG", value: "jpg" },
      { label: "PNG", value: "png" },
    ],
  },
  {
    title: "Status",
    key: "status",
    type: "select",
    placeholder: "Select Status",
    options: [
      { label: "Active", value: true },
      { label: "Inactive", value: false },
    ],
  },
];

export const configTableCountry = [
  { title: "Country Name", key: "country_name", type: "text" },
  { title: "Country Code", key: "country_code", type: "text" },
  { title: "Created By", key: "username", type: "text" },
  {
    title: "Status",
    key: "status",
    type: "select",
    placeholder: "Select Status",
    options: [
      { label: "Active", value: true },
      { label: "Inactive", value: false },
    ],
  },
];

export const configTableProvince = [
  { title: "Province Name", key: "name" },
  { title: "Province Code", key: "code" },
  { title: "Country Name", key: "country_name" },
  { title: "Created By", key: "username" },
  { title: "Status", key: "status" },
];

export const configTableCity = [
  { title: "City Name", key: "name" },
  { title: "City Code", key: "code" },
  { title: "Province Name", key: "province_name" },
  { title: "Created By", key: "username" },
  { title: "Status", key: "status" },
];

export const configTableOffice = [
  { title: "Office Name", key: "name" },
  { title: "City Name", key: "city_name" },
  { title: "Created By", key: "username" },
  { title: "Instagram", key: "ig" },
  { title: "Facebook", key: "fb" },
  { title: "X", key: "x" },
  { title: "Youtube", key: "yt" },
  { title: "Address", key: "address" },
  { title: "Status", key: "status" },
];

export const dayNames = [
  { title: "Sunday" },
  { title: "Monday" },
  { title: "Tuesday" },
  { title: "Wednesday" },
  { title: "Thursday" },
  { title: "Friday" },
  { title: "Saturday" },
];
