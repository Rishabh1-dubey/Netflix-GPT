import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const BackgroundVideo = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  //we used a custom for our code that look clean and uderstandble

  //coustom hooks
useMovieTrailer(movieId);
  return (
    <div>
      <iframe className="w-screen aspect-video"
        
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
