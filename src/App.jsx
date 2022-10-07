import { Routes, Route } from "react-router-dom";

// Layouts
import AuthLayout from "./layouts/auth/AuthLayout";

// Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ChangePassword from "./pages/auth/ChangePassword";
import Error404 from "./pages/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="registro" element={<Register />} />
        <Route path="olvide-password" element={<ForgetPassword />} />
        <Route
          path="restablecer-password/:token"
          element={<ChangePassword />}
        />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
