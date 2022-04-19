import React, { useState } from "react";

// "name": "a",
//     "price": "100",
//     "categgory": "general",
//     "userId": "100",
//     "company": "xyz"

const AddProduct = () => {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [company, setCompany] = useState();
  // user id is for so that we can direct which user choose to register for this product

  const handleClick = async () => {
    // parse to convert data string -> JSON
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.log(userId);
    let result = await fetch("http://localhost:5000/add-product/", {
      method: "post",
      body: JSON.stringify({
        name,
        price,
        category,
        price,
        userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };
  return (
    <>
      <input
        type="text"
        placeholder={"Enter product name"}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder={"Enter Price"}
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder={"Enter Category"}
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder={"company"}
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      <button onClick={handleClick}>Add product</button>
    </>
  );
};

export default AddProduct;
