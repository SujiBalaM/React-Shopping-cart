import React, { useEffect, useState } from 'react'
import { mydatabase } from '../firebase'

const Card = () => {

    const [productData,setProductData] = useState([])
    useEffect(()=>{
        mydatabase.collection("products").onSnapshot((snapshot) => {
            setProductData(snapshot.docs.map((i) =>{
                return i.data()
                
            }))
        })
    })
  return (
    <div className='card-container'>
        {
            productData.map((i) => {
                return   <div key={i.slno} className="card" style={{width: 350}}>
                <img src={i.imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{i.name}</h5>
                  <p className="card-text">{i.description} </p>
                  <del><h5>Price:{i.price}</h5></del>
                  <h5>Discounted Rate:{i.discount}</h5>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
              </div>
            })
        }
      
    </div>
  )
}

export default Card