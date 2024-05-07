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

    const addCart =(event) => {
      if(localStorage.getItem('cart') === null) {
        var cart = {}
      }else {
        cart = JSON.parse(localStorage.getItem('cart'))
      }

      const productId = event.target.id;

      if(cart[productId] === undefined){
        var quantity = 1;
        var name = document.getElementById('productName'+productId).innerText;
        var price = Number(document.getElementById('productPrice' + productId).innerText);
        cart[productId] = [quantity,name,price]
  
      } else {
        cart[productId][0] = cart[productId][0] + 1;
        var price = Number(document.getElementById('productPrice' + productId).innerText) * cart[productId][0];
        cart[productId][2] = price;
      }
      localStorage.setItem('cart',JSON.stringify(cart));
      displayCartItems(cart);
      function displayCartItems(cartItems) {
        var cartData = ''

        for(let i in cartItems){
         cartData = cartData + 'QTY:'+cartItems[i][0]+" "+"Name:"+cartItems[i][1] +" "+"Price:"+cartItems[i][2]+" "+"<br/>" 
         console.log(cartData)
        }
        cartData = cartData + "<a href='productData.html' class='btn btn-success'>Continue</a>"
        document.getElementById('mypopover').setAttribute('data-content',cartData)
      }

    }


  return (
    <div className='card-container'>
        {
            productData.map((i) => {
                return   <div key={i.slno} className="card" style={{width: 350}}>
                <img src={i.imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" id={"productName" + i.slno}>{i.name}</h5>
                  <p className="card-text">{i.description} </p>
                  <del><h5>Price:{i.price}</h5></del>
                  <h5 id={"productPrice" + i.slno}>{i.discount}</h5>
                  <a href="#" className="btn btn-primary" onClick={addCart} id={i.slno}>Add to cart</a>
                </div>
              </div>
            })
        }
      
    </div>
  )
}

export default Card