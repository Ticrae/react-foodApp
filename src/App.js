import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { CartProvider } from "react-use-cart";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import meal1 from "./assets/meal1.svg";
import meal2 from "./assets/meal2.svg";
import meal3 from "./assets/meal3.svg";
import meal4 from "./assets/meal4.svg";
import meal5 from "./assets/meal5.svg";
import meal6 from "./assets/meal6.svg";
import SideCart from "./components/SideCart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Page404 from "./pages/Page404";

function App() {
  const meals = [
    {
      id: 1,
      img: meal1,
      title: "Stir Fry Pasta",
      text: "The in-house pasta and chicken by chef Moose",
      cName: "food-list",
      price: 1000,
      cartBtn: "Add to cart",
      status: "Cooking",
      quantity: 0,
    },
    {
      id: 2,
      img: meal2,
      title: "Indomie",
      text: "The in-house pasta and chicken by chef Moose",
      cName: "food-list",
      price: 1600,
      cartBtn: "Add to cart",
      status: "Delivered",
      quantity: 0,
    },
    {
      id: 3,
      img: meal3,
      title: "Cheese and Pasta",
      text: "The in-house pasta and chicken by chef Moose",
      cName: "food-list",
      price: 2800,
      cartBtn: "Add to cart",
      status: "Cooking",
      quantity: 0,
    },
    {
      id: 4,
      img: meal4,
      title: "Yam peppersoup",
      text: "The in-house pasta and chicken by chef Moose",
      cName: "food-list",
      price: 3300,
      cartBtn: "Add to cart",
      status: "Delivered",
      quantity: 0,
    },
    {
      id: 5,
      img: meal5,
      title: "Fries and Egg",
      text: "The in-house pasta and chicken by chef Moose",
      cName: "food-list",
      price: 1200,
      cartBtn: "Add to cart",
      status: "Cooking",
      quantity: 0,
    },
    {
      id: 6,
      img: meal6,
      title: "Rice and Egg sauce",
      text: "The in-house pasta and chicken by chef Moose",
      cName: "food-list",
      price: 4700,
      cartBtn: "Add to cart",
      status: "Delivered",
      quantity: 0,
    },
  ];

  const [cartItems, setcartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setcartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setcartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setcartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setcartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const [show, setshow] = useState(-100);
  const goUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let top = window.pageYOffset || document.documentElement.scrollTop;
      if (top > 500) {
        setshow(10);
      } else {
        setshow(-100);
      }
    });
  }, []);

  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<ProtectedRoutes />}>
              <Route
                path="/dashboard"
                element={
                  <Dashboard
                    meals={meals}
                    onAdd={onAdd}
                    count={cartItems.length}
                  />
                }
              />
            </Route>
            <Route
              path="/cart"
              element={
                <Cart
                  count={cartItems.length}
                  meals={meals}
                  cartItems={cartItems}
                  onRemove={onRemove}
                />
              }
            />
            <Route
              path="/meal/:id"
              element={meals.map((meal) => (
                <SideCart
                  key={meal.id}
                  meal={meal}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  cartItems={cartItems}
                  count={cartItems.length}
                />
              ))}
            />
            <Route
              path="/checkout"
              element={<Checkout count={cartItems.length} />}
            />
            <Route
              path="/orders"
              element={
                <Orders
                  meals={meals}
                  onRemove={onRemove}
                  count={cartItems.length}
                  cartItems={cartItems}
                />
              }
            />
            <Route
              path="/profile"
              element={<Profile count={cartItems.length} />}
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
