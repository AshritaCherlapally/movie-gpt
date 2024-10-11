import { useDispatch } from "react-redux";
import { addTvSeries } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

//fetch Now playing movies list from TMDB API and dispatch these results to the redux store
const useTvSeries = () => {
  const dispatch = useDispatch();
  const getTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    //dispatch an action by pushing our results fetched by API call to the redux store
    dispatch(addTvSeries(json.results));
  };
  useEffect(() => {
    getTvSeries();
  }, []);
};
export default useTvSeries;
