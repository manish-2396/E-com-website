import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";
import { AuthContext } from "../Contex/AuthContext";

function Navbar() {

  const { isAuth, logout } = useContext(AuthContext)


  const Navigate = useNavigate();

  const handleClick = () => {
    if (isAuth) {
      logout();
    } else {
      Navigate("/login")
    }

  }

  const Div = styled.div`
    height: 100px;
    margin-top:20px;
    margin-right:10px;
    margin-left:10px;
    position: -webkit-sticky;
    position: sticky;
    width: 95%;
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      gap:1rem;
    }
    
    
  `;

  const Image = styled.img`
    src: "https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052";
    alt: "Image";
    padding: 22px;
  `;
  return (
    <Div>
      <div style={{marginTop:"-30px"}} >
        <Link to={"/"}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052"
            alt="img"
          />
        </Link>
      </div>


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


      <div style={{ display: "flex" , justifyContent:"space-around" }} >
        <div>
          <Link className="icons" to={"/login"}>
            <ion-icon size="large" name="person-outline"></ion-icon>
          </Link>
        </div>

        <div>
          <Link className="icons" to={"/"}>
            <ion-icon size="large" name="search-outline"></ion-icon>
          </Link>
        </div>

        <div>
          <Link className="icons" to={"/cart"}>
            <ion-icon size="large" name="cart-outline"></ion-icon>
          </Link>
        </div>

        <div style={{}} >
          <button style={{ marginTop:"-75px", fontSize: "2rem", fontWeight: "bolder"}} onClick={handleClick}>{isAuth ? "Logout" : "Login"}</button>
        </div>

      </div>
    </Div>
  );
}

export default Navbar;
