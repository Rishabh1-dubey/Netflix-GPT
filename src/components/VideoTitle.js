const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg  border border-black font-bold ">
          ▶️ Play
        </button>
        <button className=" mx-2 bg- bg-white text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg  font-bold  ">
          MoreInfo
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
