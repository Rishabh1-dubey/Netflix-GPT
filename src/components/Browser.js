import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryConatainer from "./SecondaryConatainer";

const Browser = () => {
  //creating a new custom hooks and inpoert in as useNowPlayingMovies
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryConatainer />
    </div>
  );
};

export default Browser;
