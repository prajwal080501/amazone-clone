import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import { useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //will only run when app components load
    auth.onAuthStateChanged(authUser => {
      console.log("User >>", authUser);
      if (authUser) {
        //user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //user is not logged out
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
    });
    
  }, [])
  return (
    <Router>
      {/* code to hide header at login page */}

      <div className="App">
        <Routes>
        
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
