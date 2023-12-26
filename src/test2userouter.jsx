import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detail from "./pages/Detail";

function App() {


  return (
    <>
		<Router>
			<Routes>
					<Route path="/" element={<Homepage />}></Route>
					<Route path="/detail/:id" element={<Detail />}></Route>
			</Routes>
		</Router>

    </>
  )
}

export default App
