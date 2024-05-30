import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Liked from "./pages/Liked";
import LeftSideBar from "./layouts/LeftSideBar";
import RightSideBar from "./layouts/RightSideBar";
import './App.css'

const router = createBrowserRouter( [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/playlist",
    element: <Playlist />
  },
  {
    path: "/liked",
    element: <Liked />
  },
]);

function App() {
  return (
    <>
    <div className="app">
      <LeftSideBar />
      <RouterProvider router={router}></RouterProvider>
      <RightSideBar />
    </div>
    </>
  );
};

export default App;