import { errorOptions } from "../error";

export const inputAddFilms = [
  {
    labelText: "Title Film",
    name: "nama_film",
    type: "text",
    optionError: errorOptions.title_film,
  },
  {
    labelText: "Sinopsis Film",
    name: "sinopsis_film_id",
    type: "text",
    optionError: errorOptions.sinopsis_film,
  },
  {
    labelText: "Trailer Film",
    name: "trailer_film",
    type: "text",
    optionError: errorOptions.url,
  },

  {
    labelText: "Poster Film",
    name: "poster_film",
    type: "file",
    optionError: errorOptions.img,
  },
];

export const inputEditFilms = (datasDefault) => [
  {
    labelText: "Title Film",
    name: "nama_film",
    type: "text",
    defaultValue: datasDefault.nama_film,
    optionError: errorOptions.title_film,
  },
  {
    labelText: "Sinopsis Film",
    name: "sinopsis_film_id",
    type: "text",
    defaultValue: datasDefault.sinopsis_film_id,
    optionError: errorOptions.sinopsis_film,
  },
  {
    labelText: "Trailer Film",
    name: "trailer_film",
    type: "text",
    defaultValue: datasDefault.trailer_film,
    optionError: errorOptions.url,
  },
  {
    labelText: "Poster Film",
    name: "poster_film",
    type: "file",
    tableImg: "films",
    defaultValue: datasDefault.poster_film,
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
