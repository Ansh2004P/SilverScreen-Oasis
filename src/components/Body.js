import {
  createBrowserRouter,
} from "react-router-dom";
import Login from "./Login";
import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { lazy } from "react";
import Error from "./Error";
import { RouterProvider } from "react-router-dom";

const Body = () => {
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


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
