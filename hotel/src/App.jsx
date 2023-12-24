
import './App.css'
import Booking from './Routes/Booking';
import Dashboared from './Routes/Dashboared';
import Rooms from './Routes/Rooms';
import Sidebar from './Routes/Sidebar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './Routes/Users';
import Rightside from './Routes/Rightside';

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

  return (
    <BrowserRouter >
<Sidebar />
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.link} element={<route.component />} key={index} />
        ))}
      </Routes>
      <Rightside />
    </BrowserRouter>
  );
}

export default App;
