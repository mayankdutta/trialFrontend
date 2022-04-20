import React, {useState} from "react";

// "name": "a",
//     "price": "100",
//     "categgory": "general",
//     "userId": "100",
//     "company": "xyz"

const AddProduct = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false)
    // user id is for so that we can direct which user choose to register for this product

    const handleClick = async () => {
        // parse to convert data string -> JSON
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        console.log(userId);

        if (!name || !category || !price || !company) {
            setError(true);
            return;
        }
        let result = await fetch("http://localhost:5000/add-product/", {
            method: "post",
            body: JSON.stringify({
                name,
                category,
                price,
                userId,
                company
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
            {
                error && !name && (<p style={{color: "red"}}> Enter valid name</p>)
            }
            <input
                type="text"
                placeholder={"Enter Price"}
                value={price}
                onChange={(e) => {
                    setPrice(e.target.value);
                }}
            />
            {
                error && !price && (<p style={{color: "red"}}> Enter valid price</p>)
            }
            <input
                type="text"
                placeholder={"Enter Category"}
                value={category}
                onChange={(e) => {
                    setCategory(e.target.value);
                }}
            />
            {
                error && !category && (<p style={{color: "red"}}> Enter valid category</p>)
            }
            <input
                type="text"
                placeholder={"company"}
                value={company}
                onChange={(e) => {
                    setCompany(e.target.value);
                }}
            />
            {
                error && !company && (<p style={{color: "red"}}> Enter valid company</p>)
            }
            <button onClick={handleClick}>Add product</button>
        </>
    );
};

export default AddProduct;
