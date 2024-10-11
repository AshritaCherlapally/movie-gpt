import { useDispatch } from "react-redux";
import { addTrendingContent } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

//fetch Now playing movies list from TMDB API and dispatch these results to the redux store
const useTrendingContent = () => {
  const dispatch = useDispatch();
  const getTrendingContent = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    //dispatch an action by pushing our results fetched by API call to the redux store
    dispatch(addTrendingContent(json.results));
  };
  useEffect(() => {
    getTrendingContent();
  }, []);
};
export default useTrendingContent;
