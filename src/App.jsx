import React, { useEffect, useState } from 'react'
import "./App.css"
import Loader from "./Loading/Loader"

const App = () => {

  const[products,setProducts] = useState([])
  const[error,setError] = useState()
  const[loading,setLoading] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((resu) => resu.json())
    .then((datas) => {
      setProducts(datas)
      setLoading(false)
    })
  
    .catch((err) => {
      setLoading(false)
      setError("Please try after some time")
        console.log("failed to fetch",err)
         })

    },[])

  return (
    <div className='products-container'>
      <h2 className='title'>Products List</h2>
       <div className='products-grid'>
        {
          products.map((product,index) => (
            <div className='product-card' key={product.id}>
              <img className='product-image' src={product.image} alt="" />
              <h3 className='product-title'>{product.title}</h3>
              <p className='product-price'>{product.price}</p>
              <p className='product-rating'>{product.rating.rate} - {product.rating.count}</p>
            </div>
          ))
        }
       </div>

       <div>{loading && <Loader/> }</div>
       <div>{error && <h2>{error}</h2>}</div>

    </div>
  )
}

export default App