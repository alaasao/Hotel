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
import axios from "axios";
import React from "react";
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
  let [rooms, setRooms] = useState([]);
  let [usersData, setUsersData] = React.useState([]);
  let [bookingsData, setBookingsData] = React.useState([]);
  let [async, setAsync] = React.useState(false);
  useEffect(() => {
    axios
      .get("https://aceiny.tech:3331/api/admin/dashboard")
      .then((res) => {
        setUsersData(res.data.success);
        localStorage.setItem("users", JSON.stringify(res.data.success));
      })
      .catch(() => {
        setUsersData(JSON.parse(localStorage.getItem("users")));
      });

    axios
      .get("https://aceiny.tech:3331/api/admin/bookings")
      .then((res) => {
        setBookingsData(res.data.bookings);
        localStorage.setItem("bookings", JSON.stringify(res.data.bookings));
      })
      .catch(() => {
        setBookingsData(JSON.parse(localStorage.getItem("bookings")));
      });
    axios
      .get("https://aceiny.tech:3331/api/admin/rooms")
      .then((res) => {
        setRooms(res.data.rooms.reverse());
        localStorage.setItem("rooms", JSON.stringify(res.data.rooms));
      })
      .catch(() => {
        setRooms(JSON.parse(localStorage.getItem("rooms")));
      });

  }, [async]);
  bookingsData = bookingsData.map((booking) => {
    return {
      ...booking,
      user: usersData.filter((user) => user.userName === booking.userName)[0],
    };
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
          usersData,
          setUsersData,
          bookingsData,
          setBookingsData,
          rooms,
          setRooms,
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
            <Route path="/" element={<Dashboared />} />
          </Routes>
          <Rightside async={async} setAsync={setAsync} />
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
