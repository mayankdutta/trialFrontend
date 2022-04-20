import React, { useState } from "react";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  // user id is for so that we can direct which user choose to register for this product

  const handleClick = async () => {};
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
      <button onClick={handleClick}> Update product</button>
    </>
  );
};

export default UpdateProduct;
