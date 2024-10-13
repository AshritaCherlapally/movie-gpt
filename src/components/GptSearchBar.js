import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/GptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //Search the GPT returned movie suggestion in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    //API Call to OpenAI(GPT) to get movie results based on user interest
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Despicable Me, Toy Story, Tangled, Moana, Ice Age";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResults.choices?.[0].message?.content.split(","); //Turning the movie list into any array
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()} //prevents page to refresh
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptPlaceHolderText}
          className="p-5 m-5 rounded-lg col-span-9"
        />
        <button
          className="py-2 px-4 bg-red-600 text-white cursor-pointer m-4 rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
