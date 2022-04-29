import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

const UpdateProduct = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    // user id is for so that we can direct which user choose to register for this product

    // to get the user id from the url
    const params = useParams();

    // to redirect
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetail();
    }, []);

    const getProductDetail = async () => {
        let result = await fetch(`http://localhost:5000/products/${params.id}`);
        result = await result.json();
        console.warn(result);
        setName(result.name);
        setCategory(result.category);
        setCompany(result.company);
        setPrice(result.price);
    };

    const handleClick = async () => {
        if (!name || !category || !price || !company) {
        }

        let result = await fetch(`http://localhost:5000/products/${params.id}`, {
            method: 'Put', body: JSON.stringify({name, price, category, company}), headers: {
                'Content-Type': "application/json"
            }
        })

        result = await result.json();
        // console.warn(result);
        navigate("/");
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
            <button onClick={handleClick}> Update product</button>
        </>
    );
};

export default UpdateProduct;
