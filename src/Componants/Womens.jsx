import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Womens() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("https://ecommerce-tanner-goods.herokuapp.com/womens")
      .then((d) => d.json())
      .then((res) => {
        setList(res);
      });
  };
  console.log(list);
  const Div = styled.div`
    display: grid;
    width: 88%;
    margin-left: 8%;
    grid-template-columns: auto auto auto auto;
    div {
      width: 280px;
      margin: 3%;
      height: 450px;
      color: gray.400;
    }
    div img {
      width: 100%;
      height: 250px;
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
  const handleAddToBag = (id, pic, title, price) => {
    const payload = {
      product_id: id,
      thumbnail: pic,
      title: title,
      price: price,
    };
    fetch("https://ecommerce-tanner-goods.herokuapp.com/bag", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(alert("Added successfully"));
  };
  return (
    <div>
      <Div>
        {list.map((e) => (
          <div key={e.product_id}>
            <Box boxShadow="dark-lg" p="3" rounded="md" bg="white">
              <img src={e.thumbnail} alt="imgs" />
              <h5>{e.title}</h5>
              <p>{e.price}</p>
              <Button
                onClick={() =>
                  handleAddToBag(e.product_id, e.thumbnail, e.title, e.price)
                }
                colorScheme="teal"
                variant="outline"
              >
                Add to bag
              </Button>
            </Box>
          </div>
        ))}
      </Div>
    </div>
  );
}

export default Womens;
