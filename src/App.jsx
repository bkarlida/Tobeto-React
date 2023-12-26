import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage"
import Products from "./pages/Products/Products"
import Navbar from "./components/Navbar/Navbar"
import Detail from "./pages/Products/Detail/Detail"
import Add from "./pages/ProductAdd/Add"
import Delete from "./pages/Products/Delete/Delete"


export default function App() {
  return <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<Detail />}/>
        <Route path="/products/Delete/:id" element={<Delete />}/>
        <Route path="/add" element={<Add />}></Route>
        <Route path="*" element={<div>Not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  </>

}