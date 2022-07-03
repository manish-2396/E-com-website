import React from "react";
import styled from "styled-components";

function Footer() {
  const Div = styled.div`
    /* height: 400px; */
    background-color: #2c272e;
    color: white;
  `;
  const Cont = styled.div`
    display: flex;
    justify-content: center;
    div {
      margin-top: 2%;
      margin-left: 8%;
      h6 {
        margin-top: 10%;
      }
    }
    h5 {
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    }
  `;
  const Bcount = styled.div`
    display: flex;
    justify-content: center;
    img{
        margin-left: 1%;
    }
  `;
  return (
    <Div>
      <Cont>
        <div style={{ marginLeft: "0%" }}>
          <h5>Featured Brands</h5>
          <h6>Heimat</h6>
          <h6>it Vanishes</h6>
          <h6>Lady White Co.</h6>
          <h6>Kestin</h6>
          <h6>Nanamica</h6>
          <h6>orSlow</h6>
          <h6>RoToTo</h6>
        </div>
        <div>
          <h5>Brands Info</h5>
          <h6>Heimat</h6>
          <h6>it Vanishes</h6>
          <h6>Lady White Co.</h6>
          <h6>Kestin</h6>
          <h6>Nanamica</h6>
          <h6>orSlow</h6>
          <h6>RoToTo</h6>
        </div>
        <div>
          <h5>Shop</h5>
          <h6>Heimat</h6>
          <h6>it Vanishes</h6>
          <h6>Lady White Co.</h6>
          <h6>Kestin</h6>
          <h6>Nanamica</h6>
          <h6>orSlow</h6>
          <h6>RoToTo</h6>
        </div>
        <div>
          <h5>Stay in the loop</h5>
          <h6>Heimat</h6>
          <h6>it Vanishes</h6>
          <h6>Lady White Co.</h6>
          <h6>Kestin</h6>
          <h6>Nanamica</h6>
          <h6>orSlow</h6>
          <h6>RoToTo</h6>
        </div>
        <div>
          <h5>Featured Brands</h5>
          <h6>Heimat</h6>
          <h6>it Vanishes</h6>
          <h6>Lady White Co.</h6>
          <h6>Kestin</h6>
          <h6>Nanamica</h6>
          <h6>orSlow</h6>
          <h6>RoToTo</h6>
        </div>
        <div>
          <h5>Featured Brands</h5>
          <h6>Heimat</h6>
          <h6>it Vanishes</h6>
          <h6>Lady White Co.</h6>
          <h6>Kestin</h6>
          <h6>Nanamica</h6>
          <h6>orSlow</h6>
          <h6>RoToTo</h6>
        </div>
      </Cont>
      <Bcount>
        <img
          src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
          alt="insta"
        />
        <img
          src="https://img.icons8.com/color/48/000000/facebook.png"
          alt="facebook"
        />
        <img
          src="https://img.icons8.com/material/48/000000/github.png"
          alt="git"
        />
        <img
          src="https://img.icons8.com/fluency/48/000000/twitter.png"
          alt="twitter"
        />
      </Bcount>
    </Div>
  );
}

export default Footer;
