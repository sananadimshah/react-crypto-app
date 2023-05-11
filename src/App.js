import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componant/Header";
import Home from "./componant/Home";
import CoinDetails from "./componant/CoinDetails";
import Coins from "./componant/Coins";
import Exchanges from "./componant/Exchanges";
import Footer from "./componant/Footer";


function App() {
  return (
    <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
