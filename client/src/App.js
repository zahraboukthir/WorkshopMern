import "./App.css";
import ResponsiveAppBar from "./Components/NavBar/Navigation";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Components/AuthForms/SignUp";
import SignIn from "./Components/AuthForms/SignIn";
import Home from "./Components/Home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "./js/actions/authActions";
import PrivateRoute from "./Components/PrivateRoutes";
import DashbordAdmin from "./Components/Dashboard/DashbordAdmin";
import DashboardClient from "./Components/Dashboard/DashboardClient";
import UserList from "./Components/User/UserList";
import { getallproduct } from './js/actions/productActions';
import ListProduct from './Components/Product/ListProduct';
import AddProduct from './Components/Product/AddProduct';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getuser());
    dispatch(getallproduct())
  }, [dispatch]);
  const currentuser=useSelector(state=>state.authreducer.currentuser)
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/product" element={<ListProduct />} />
        <Route
          path="/dashboardAdmin"
          element={
            <PrivateRoute>
              <DashbordAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
         <Route
          path="/dashboardClient"
          element={
            <PrivateRoute>
              <DashboardClient />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
             {currentuser && currentuser.role == "admin" ? (
                <UserList />
              ) : (
               <Home/>
              )}
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
