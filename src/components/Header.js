import items from "../items/Netflix_Logo_PMS.png"

const Header = () => {
  return (
    <div className="absolute w-33 px-8 py-2 bg-gradient-to-b from-black  z-10">
      <img 
      className="w-44" 
      src={items}
       alt="Netflix logo"
        />
    </div>
  );
};

export default Header