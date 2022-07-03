import { Route, Routes } from "react-router-dom";
import Require from "./HOC/Require";
import About from "./Componants/About";
import Cart from "./Componants/Cart";
import Contact from "./Componants/Contact";
import FAQ from "./Componants/FAQ";
import Footer from "./Componants/Footer";
import Home from "./Componants/Home";
import Kids from "./Componants/Kids";
import Login from "./Componants/Login";
import Mens from "./Componants/Mens";
import Navbar from "./Componants/Navbar";
import Womens from "./Componants/Womens";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/cart" element=
        {
          <Require>
            <Cart />
          </Require>
        }>
        </Route>

        <Route path="/mens" element={
          <Require>
            <Mens />
          </Require>}>
        </Route>

        <Route path="/womens" element={
          <Require>
            <Womens />
          </Require>}>
        </Route>

        <Route path="/kids" element={
          <Require>
            <Kids />
          </Require>}>
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}>  </Route>
        <Route path="/faq" element={<FAQ />}>   </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <br/>
      <Footer />
    </div>
  );
}
export default App;
