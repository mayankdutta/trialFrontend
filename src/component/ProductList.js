import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const borders = {
  border: "black solid 2px",
};
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // can be called directly from useEffect
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products/");
    result = await result.json();
    setProducts(result);
    console.log(products);
  };
  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/products/${id}/`, {
      method: "Delete",
    });

    result = await result.json();
    result
      ? await getProducts()
      : alert("some error is there, couldn't delete");
  };
  return (
    <>
      <h1> Table </h1>
      {products.length > 0 && (
        <table>
          <tbody>
            <td style={borders}>S no.</td>
            <td style={borders}>Name</td>
            <td style={borders}>Price</td>
            <td style={borders}>company</td>
            <td style={borders}>Category</td>
            <td style={borders}>operation</td>
          </tbody>
          {products.map((item, index) => {
            return (
              <tr style={{ border: "black solid 2px" }}>
                <td style={borders}>{index + 1}</td>
                <td style={borders}>{item.name}</td>
                <td style={borders}>{item.price}</td>
                <td style={borders}>{item.company}</td>
                <td style={borders}>{item.category}</td>
                <td>
                  <button onClick={() => deleteProduct(item._id)}>X</button>
                  <Link to={"/update/" + item._id}> Edit </Link>
                </td>
              </tr>
            );
          })}
        </table>
      )}
    </>
  );
};

export default ProductList;
