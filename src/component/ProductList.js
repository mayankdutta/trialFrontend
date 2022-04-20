import React, {useEffect, useState} from "react";


const borders = {
    border: "black solid 2px"

}
const ProductList = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        // can be called directly from useEffect
        getProducts();

    }, [])

    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products/")
        result = await result.json();
        setProducts(result);
        console.log(products);
    }
    return (<>

        <table>
            <tr>
                <td style={borders}>S no.</td>
                <td style={borders}>Name</td>
                <td style={borders}>Price</td>
                <td style={borders}>company</td>
                <td style={borders}>Category</td>
            </tr>
            {
                products.map((item, index) => {
                    return (
                        <tr style={{border: "black solid 2px"}}>
                            <td style={borders}>{index + 1}</td>
                            <td style={borders}>{item.name}</td>
                            <td style={borders}>{item.price}</td>
                            <td style={borders}>{item.company}</td>
                            <td style={borders}>{item.category}</td>
                        </tr>
                    )
                })
            }
        </table>
    </>)
}

export default ProductList;