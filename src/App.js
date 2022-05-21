import "./app.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import Index from "./components/pages/home/Index/Index";
import Error from "./components/pages/home/error/Error";
import Patients from "./components/pages/Patients/Patients";
import Appointments from "./components/pages/Appointments/Appointments";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import Login from "./components/pages/Login/login";
import SignUp from "./components/pages/Signup/signup";

function App() {
  const privateRoutes = (
    <>
      <Route path="/" element={<Index />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/appointments" element={<Appointments />} />
    </>
  );

  return (
    <div>
      <Routes>
        {localStorage.getItem("login") ? (
          privateRoutes
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
