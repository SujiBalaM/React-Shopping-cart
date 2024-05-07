import React, { useState } from 'react'
import { mydatabase } from '../firebase';

function AddProducts() {
    const [productData, setProductData] =useState({
        productSlNo:'',
        productName:'',
        productImageUrl:'',
        productCategory:'',
        productDescription:'',
        productOriginalPrice:'',
        productDiscountedPrice:'',
    
    })

    const collectData =(event) => {
        const myValue = event.target.value;
        setProductData({...productData,[event.target.name]:myValue})
    }

    const saveData = () => {
        
         mydatabase.collection('products').add({
            slno:productData.productSlNo,
            description:productData.productDescription,
            name:productData.productName,
            category:productData.productCategory,
            imageurl:productData.productImageUrl,
            price:productData.productOriginalPrice,
            discount:productData.productDiscountedPrice
        })

        window.location.pathname ="/home"
    }

  return (
    <div className='row m-4'>
        <div className='col-md-4'>
        <label className='form-label'>Product Sl.No</label>
        <input type='number' className='form-control' name='productSlNo' onChange={collectData} /><br></br>

        <label className='form-label'>Product Name</label>
        <input type='text' className='form-control' name='productName' onChange={collectData} /><br></br>

        <label className='form-label'>Product Image URL</label>
        <input type='text' className='form-control' name='productImageUrl' onChange={collectData} /><br></br>

        <label className='form-label'>Product Category</label>
        <input type='text' className='form-control' name='productCategory' onChange={collectData} /><br></br>

        <label className='form-label'>Product Description</label>
        <textarea type='text' rows='3' cols='40' className='form-control' name='productDescription'  onChange={collectData}> </textarea><br></br>

        <label className='form-label'>Product Original Price</label>
        <input type='number' className='form-control' name='productOriginalPrice'  onChange={collectData}/><br></br>

        <label className='form-label'>Product Discounted Price</label>
        <input type='number' className='form-control' name='productDiscountedPrice' onChange={collectData} /><br></br>

        <button className='btn btn-outline-success' onClick={saveData}>Add Product</button>
        </div>

    </div>
  )
}

export default AddProducts