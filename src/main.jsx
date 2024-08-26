import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Earn from "./components/Earn/Earn.jsx";
import Friends from "./components/Friends/Friends.jsx";
import Wallet from "./components/Wallet/Wallet.jsx";
import Loading from "./components/Loading/Loading.jsx";
import Profile from "./components/UserProfile/Profile.jsx";
import Menu from "./components/MenuNavigation/Menu.jsx";
import Ranking from "./components/UserRanking/Ranking.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="home" element={<Home />} />
      <Route path="earn" element={<Earn />} />
      <Route path="friends" element={<Friends />} />
      <Route path="wallet" element={<Wallet />} />
      <Route path="" element={<Loading />} />
      <Route path="profile" element={<Profile />} />
      <Route path="menu" element={<Menu />} />
      <Route path="ranking" element={<Ranking />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
