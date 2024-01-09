import { ReactElement } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Container } from "semantic-ui-react";
import Dashboard from "./layouts/dashboard";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

function App(): ReactElement {
  return (
    <>
      <div className="App">
      <Navbar />
        <Container className="main">
          <Dashboard />
        </Container>

      </div>
    </>
  );
}

export default App;
