import { Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { AuthProvider } from "./contexts/auth";
import Register from "./pages/Register/signup";
import Signin from "./pages/Login/signin";
import RoutesApp from "./routes";

const App = () => {
  return (
    <AuthProvider>
      <RoutesApp>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Register />} />
      </RoutesApp>
    </AuthProvider>
  );
};

export default App;
