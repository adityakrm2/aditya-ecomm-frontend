import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path="/"
          element={user ? <Home /> : <Navigate to="/register" replace />} />
        <Route path="/products/:category"
          element={user ? <ProductList /> : <Navigate to="/login" replace />} />
        <Route path="/product/:id"
          element={user ? <Product /> : <Navigate to="/login" replace />} />
        <Route path="/cart"
          element={user ? <Cart /> : <Navigate to="/login" replace />} />

        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace />} />
        <Route path="/register"
          element={!user ? <Register /> : <Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;