import { useSelector } from "react-redux";
import lang from "../utils/lanuageConstants";

const GptSearchBar = () => {
//to show the language whenever we will going to click to our language option
const langKey=useSelector((store)=>store.config.lang);

  return (
    <div className="pt-[12%] flex justify-center">
      <form className="w-1/2 bg-black grid  grid-cols-12 ">
        <input
          type="text"
          className="p-4 m-6 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-6 py-4 px-4 mr-8 bg-red-500 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
