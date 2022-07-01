import React, { useEffect, useState } from 'react'
import './Products.css'
const Products = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        getall()
    }, [])
    const getall = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setdata(res)
            }
            )
    }


    return (
        <div id='products'>
            {
                data.map((index) => {
                    return <div key={index.id} id="product">
                        <img src={index.image} alt="" style={{ width: "300px" }} />
                        <div>{index.category}</div>
                        <div>{index.title}</div>
                        <div>{index.price}</div>
                    </div>
                })
            }
        </div>
    )
}

export default Products