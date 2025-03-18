export const inputAddFilms = [
  {
    labelText: "Title Film",
    name: "nama_film",
    type: "text",
    // optionError: errorOptions.name_country,
  },
  {
    labelText: "Sinopsis Film",
    name: "sinopsis_film_id",
    type: "text",
    // optionError: errorOptions.code_country,
  },
  {
    labelText: "Trailer Film",
    name: "trailer_film",
    type: "text",
    // optionError: errorOptions.code_country,
  },

  {
    labelText: "Poster Film",
    name: "poster_film",
    type: "file",
    // optionError: errorOptions.code_country,
  },
];

export const inputEditFilms = (datasDefault) => [
  {
    labelText: "Title Film",
    name: "nama_film",
    type: "text",
    defaultValue: datasDefault.title,
    // optionError: errorOptions.name_country,
  },
  {
    labelText: "Sinopsis Film",
    name: "sinopsis_film_id",
    type: "text",
    defaultValue: datasDefault.sinopsis,
    // optionError: errorOptions.code_country,
  },
  {
    labelText: "Trailer Film",
    name: "trailer_film",
    type: "text",
    defaultValue: datasDefault.trailer,
    // optionError: errorOptions.code_country,
  },
  {
    labelText: "Poster Film",
    name: "poster_film",
    type: "file",
    tableImg: "films",
    defaultValue: datasDefault.poster,
    // optionError: errorOptions.code_country,
  },
  {
    name: "status",
    type: "select",
    labelText: "Status",
    optionDisabledText: "Select Status",
    defaultValue: datasDefault.status,
    grid: 6,
    options: [
      { label: "Active", value: true },
      { label: "Inactive", value: false },
    ],
  },
];
