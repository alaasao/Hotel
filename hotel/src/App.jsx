import "./App.css";
import Booking from "./Routes/Booking";
import Dashboared from "./Routes/Dashboared";
import Rooms from "./Routes/Rooms";
import Sidebar from "./Routes/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Routes/Users";
import Rightside from "./Routes/Rightside";
import Context from "./Context";
import { useEffect, useState } from "react";
import Nav from "./Routes/Nav";
function App() {
  const routes = [
    {
      name: "dashboard",
      link: "/dashboard",
      component: Dashboared,
    },
    {
      name: "users",
      link: "/users",
      component: Users,
    },
    {
      name: "Booking",
      link: "/booking",
      component: Booking,
    },
    {
      name: "rooms",
      link: "/Rooms",
      component: Rooms,
    },
  ];
  let [user, setUser] = useState({
    username: "Ahmed Ahmed",
    superuser: true,
  });
  let [smallScreen, setSmallScreen] = useState(window.innerWidth < 1280);
  let [showSidebar, setShowSidebar] = useState(false);
  let [tooSmall, setTooSmall] = useState(window.innerWidth < 1024);
  window.addEventListener("resize", () => {
    setSmallScreen(window.innerWidth < 1280);
    setTooSmall(window.innerWidth < 1024);
  });
  return (
    <BrowserRouter>
      <Context.Provider
        value={{
          smallScreen,
          setSmallScreen,
          showSidebar,
          setShowSidebar,
          user,
          setUser,
          tooSmall,
          setTooSmall,
        }}
      >
        <div
          className={`flex ${tooSmall ? "flex-col " : ""} ${
            showSidebar ? "h-[100vh] w-[100vw] overflow-hidden" : ""
          }`}
        >
          <Sidebar />
          {smallScreen && !showSidebar && <Nav />}
          <Routes>
            {routes.map((route, index) => (
              <Route
                path={route.link}
                element={<route.component />}
                key={index}
              />
            ))}
          </Routes>
          <Rightside />
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
