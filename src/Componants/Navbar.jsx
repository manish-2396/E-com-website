import React ,{useContext} from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";
import { AuthContext } from "../contex/AuthContext";

function Navbar() {

  const { isAuth, logout } = useContext(AuthContext)

  
  const Navigate = useNavigate();

  const handleClick = () => {
    if(isAuth){
      logout();
    }else{
      Navigate("/login")
    }
    
  }

  const Div = styled.div`
    height: 100px;
    margin-top: -15px;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    display: flex;
    div {
      display: flex;
      margin-left: 20%;
    }
    .width {
      margin-top: 10%;
      margin-left: 20px;
    }
    ion-icon {
      margin-top: 100%;
      margin-left: 15px;
    }
  `;
  const Image = styled.img`
    src: "https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052";
    alt: "Image";
    padding: 22px;
  `;
  return (
    <Div>
      <Link to={"/"}>
        <Image
          src="https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052"
          alt="img"
        />
      </Link>

      <div>
        <p className="width">Tanner Goods</p>
        <p className="width">Mazama Wares</p>

        <p className="width">
          <Link to={"/contact"}>Contact Us</Link>
        </p>
        <p className="width">
          <Link to={"/about"}>About Us</Link>
        </p>
        <p className="width">
          <Link to={"/faq"}>FAQ</Link>
        </p>
      </div>


      <div>
        <Link className="icons" to={"/login"}>
          <ion-icon size="large" name="person-outline"></ion-icon>
        </Link>
        <Link className="icons" to={"/"}>
          <ion-icon size="large" name="search-outline"></ion-icon>
        </Link>
        <Link className="icons" to={"/cart"}>
          <ion-icon size="large" name="cart-outline"></ion-icon>
        </Link>
        <button style={{marginRight:"30px"}} onClick={handleClick}>{isAuth ? "Logout" :"Login"}</button>
      </div>
    </Div>
  );
}

export default Navbar;
