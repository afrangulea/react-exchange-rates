import Nav from "./Nav";
import Home from "./Home";
import Crypto from "./Crypto";
import CryptoCoin from "./CryptoCoin";
// import CryptoCoin from "./CryptoCoin";
import Classic from "./Classic";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto" element={<Crypto coin />}>
          {/* <Route path="{coin}" element={<Crypto />} /> */}
        </Route>
        {/* <Route path="/crypto/:coin" element={<CryptoCoin /> */}
        <Route path="/classic" element={<Classic />} />
        <Route path="CryptoCoin" element={<CryptoCoin />} />
      </Routes>
    </Router>
  );
}

export default App;
