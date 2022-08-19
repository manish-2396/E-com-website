import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  const Cont = styled.div`
    display: flex;
    justify-content: space-around;
    text-decoration: none;
    margin:5rem;
    div img {
      width: 400px;
      height: 400px;
      border-radius: 50%;
    }
    div h1 {
      font-style: inherit;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
      text-align: center;
      color: palevioletred;
      font-size: 1.5em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
    }
    Link {
      text-decoration: none;
    }
  `;
  let imgs = [
    "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ];
  const [coutn, setCoutn] = useState(0);
  const Riv = styled.div`
    img {
      width: 100%;
      height: 500px;
    }
    button {
      position: absolute;
    }
    .right {
      margin-left: 92%;
      margin-top: -270px;
      width: 40px;
      height: 40px;
      img {
        height: 40px;
      }
    }
    .left {
      margin-left: 50px;
      margin-top: 15%;
      width: 40px;
      height: 40px;
      img {
        height: 40px;
      }
    }
  `;
  return (
    <div>
      <Cont>


        <Link style={{ textDecoration: "none" , margin:"2rem" }} to={"/mens"}>
          <div>
            <img
              src="https://lsmensclothing.com/wp-content/uploads/2016/09/Suits.png"
              alt="mens"
            />
            <h1>Men's Clothing</h1>
          </div>
        </Link>


        <Link style={{ textDecoration: "none" , margin:"2rem" }} to={"/womens"}>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKxbYXUpZSWHxZzUfb4bliHBpfitSjo9d43Q&usqp=CAU"
              alt="mens"
            />
            <h1>Women's Clothing</h1>
          </div>
        </Link>



        <Link style={{ textDecoration: "none" , margin:"2rem" }} to={"/kids"}>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcAmpBOUSfPgAPfnmoeAnn_2ty5mPp3ooUBw&usqp=CAU"
              alt="mens"
            />
            <h1>Kid's Clothing</h1>
          </div>
        </Link>


      </Cont>
      <Riv className="slider">
        <button
          className="left"
          disabled={coutn === 0}
          onClick={() => setCoutn(coutn - 1)}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Circle_arrow_left_font_awesome.svg/768px-Circle_arrow_left_font_awesome.svg.png"
            alt="left"
          />
        </button>


        <img src={imgs[coutn]} alt="" />



        <button
          className="right"
          disabled={coutn === 3}
          onClick={() => setCoutn(coutn + 1)}
        >
          <img
            src="https://static.thenounproject.com/png/11587-200.png"
            alt="left"
          />
        </button>

        
      </Riv>
    </div>
  );
}

export default Home;
