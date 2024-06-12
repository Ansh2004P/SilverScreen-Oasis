import {
  createBrowserRouter,
} from "react-router-dom";
import Login from "./Login";
import { useEffect, Suspense } from "react";
import { onAuthStateChanged } from "firebase/auth/cordova";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { lazy } from "react";
import { USER_AVATAR } from "../utils/constants";
import Error from "./Error";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const dispatch = useDispatch();
  const Browse = lazy(() => import("./Browse"));

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <Error />
    },
    {
      path: "/browse",
      errorElement: <Error />,
      element: (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Browse />,
        </Suspense>
      ),
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: USER_AVATAR,
          })
        );
      } else {
        // User is Signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
