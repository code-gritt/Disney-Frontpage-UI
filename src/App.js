import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {" "}
      <Router>
        <Header />
        <Routes>
          <Route path="/home" Component={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
