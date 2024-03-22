import { signOut } from "firebase/auth";
import { useEffect } from "react";
import items from "../items/Netflix_Logo_PMS.png"
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser ,removeUser} from "../utils/userSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const  dispatch =useDispatch();

  const handleSignout = () => {
    signOut(auth).then(() => {
  
    }).catch((error) => {
      //ab error hanppend
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe=   onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayname, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayname: displayname,
          photoURL: photoURL,
        })
        );
        navigate("/browser")

      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
//unsubscribe when components is unmount
    return ()=>unsubscribe();
  }, [])


  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black  z-10 flex justify-between">
      <img
        className="w-44"
        src={items}
        alt="Netflix logo"
      />
      {user && (
        <div className="flex p-4 gap-1">
          <img className="h-[45px] w-[46px]" src={user?.photoURL} alt="icon-logo" />
          <button className="text-white" onClick={handleSignout} >signOUt</button>
        </div>
      )}
    </div>

  );
};

export default Header