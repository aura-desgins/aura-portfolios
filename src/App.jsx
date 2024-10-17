import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Portfolio1 from "./Portfolios/Portfolio1/Portfolio1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page of app */}
        <Route path="/" element={<Home />} />

        {/* PORTFOLIOS */}
        <Route path="/portfolio1" element={<Portfolio1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
