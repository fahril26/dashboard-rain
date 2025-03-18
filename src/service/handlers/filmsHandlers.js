import { handleSubmitData } from "../../pattern";
import {
  addFilmService,
  deleteFilmService,
  updateFilmService,
} from "../dashboardService/filmService";

export const handleAddFilms = (extraOptions) => {
  return (datas) => {
    handleSubmitData(datas, addFilmService, extraOptions);
  };
};

export const handleEditFilms = (extraOptions, dataRow) => {
  return (datas) => {
    handleSubmitData(
      { ...datas, id: dataRow.id },
      updateFilmService,
      extraOptions
    );
  };
};

export const handleDeleteFilms = (extraOptions) => {
  return (datas) => {
    deleteFilmService(datas.id, extraOptions);
  };
};
