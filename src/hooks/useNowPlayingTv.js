import { useDispatch } from "react-redux";
import { addNowPlayingTv } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

//fetch Now playing movies list from TMDB API and dispatch these results to the redux store
const useNowPlayingTv = () => {
  const dispatch = useDispatch();
  const getNowPlayingTv = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    //dispatch an action by pushing our results fetched by API call to the redux store
    dispatch(addNowPlayingTv(json.results));
  };
  useEffect(() => {
    getNowPlayingTv();
  }, []);
};
export default useNowPlayingTv;
