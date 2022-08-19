import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import axios from "axios"

function Cart() {
  // const [data ,setData] = useState([])
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://ecommerce-tanner-goods.herokuapp.com/bag")
      .then((d) => d.json())
      .then((res) => {
        setList(res);
      });
  };



  const DeleteProduct = (id) => {
    fetch(`https://ecommerce-tanner-goods.herokuapp.com/bag/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((res) => {
        console.log(res)
        fetchData();
      })
    })
  };

  console.log(list);
  const Div = styled.div`
    display: grid;
    width: 88%;
    margin-left: 8%;
    grid-template-columns: auto auto auto auto;
    div {
      width: 280px;
      margin-top: 3%;
      height: 430px;
      color: gray.400;
    }
    div img {
      width: 100%;
      height: 200px;
    }
    div h5 {
      height: 80px;
    }
    div p {
      margin-left: 40%;
    }
    div button {
      margin-left: 30%;
    }
  `;
  return (
    <div style={{ marginBottom: "30px" }}>
      <Div>
        {list.map((e) => (
          <div key={e.id}>
            <Box boxShadow="dark-lg" p="4" rounded="md" bg="white">
              <img src={e.thumbnail} alt="imgs" />
              <h5>{e.title}</h5>
              <p>{e.price}</p>
              <button style={{ marginTop: "30px", border: "1px solid black", padding: "0.2rem", borderRadius: "10px", backgroundColor: "teal", color: "#fff" }} onClick={() => DeleteProduct(e.id)}>Remove</button>
            </Box>
          </div>
        ))}
      </Div>
    </div>
  );
}

export default Cart;
