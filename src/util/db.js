import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getMoviesCatalog = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(["getMoviesCatalog"], () =>
    axios
      .get("https://my-json-server.typicode.com/marycamila184/movies/movies")
      .then((res) => res.data)
  );
};

export const getMovieDetails = (id) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(["getMovieDetails" + id], () =>
    axios
      .get(
        "https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/" +
          id
      )
      .then((res) => res.data)
  );
};
