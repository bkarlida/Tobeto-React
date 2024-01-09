import { Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Homepage from "../pages/Homepage/Homepage";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import AddProduct from "../pages/AddProduct/AddProduct";
import Login from "../pages/Login/Login";
import { Routes } from "react-router-dom";


type Props = {}

const dashboard = (props: Props) => {
  return (
    <div>
    <ToastContainer position="bottom-right"/>
          <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/product-detail/:id" element={<ProductDetail />}></Route>
              <Route path="/add-product" element={<AddProduct />}></Route>
              <Route path="/login" element={<Login />}></Route>
          </Routes>
  </div>
  )
}

export default dashboard