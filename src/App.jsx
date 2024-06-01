import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Liked from "./pages/Liked";
import LeftSideBar from "./layouts/LeftSideBar";
import RightSideBar from "./layouts/RightSideBar";
import './App.css';
import { getToken } from "./components/utility";
import MusicPlayer from "./components/MusicPlayer";
import { useDispatch, useSelector } from "react-redux";
import { create } from "./redux/authSlice";

const router = createBrowserRouter([
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
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const expireDate = useSelector((state) => state.auth.date);

  useEffect(() => {
    console.log('useEffect called');
    getToken()
      .then(res => {
        console.log('Token received:', res);
        if (res && res.token) {
          console.log('Valid token received:', res.token);
          dispatch(create(res));
        } else {
          console.log('No valid token received');
        }
      })
      .catch(err => {
        console.log('Error fetching token:', err);
      });
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      console.log('Token stored in Redux:', token);
      console.log('Token expire date:', expireDate);
    }
  }, [token, expireDate]);

  return (
    <div className="app">
      <LeftSideBar />
      <div className="main-content">
        <RouterProvider router={router} />
        <MusicPlayer />
      </div>
      <RightSideBar />
    </div>
  );
}

export default App;
