import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browser from "./Browser";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";


const Body = () => {

    const dispatch = useDispatch();



    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browser",
            element: <Browser />
        },
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayname,photoURL } = user;
                dispatch(addUser({ 
                    uid: uid, 
                    email: email,
                     displayname: displayname,
                     photoURL:photoURL 
                    })
                     );
                     
            } else {
                dispatch(removeUser());
            }
        })
    }, [])




    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};
export default Body;