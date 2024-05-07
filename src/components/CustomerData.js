import React from 'react'
import { mydatabase } from '../firebase';
import {useEffect} from 'react'

function CustomerData() {
useEffect(() => {
  const firstname = localStorage.getItem('First Name')
  const lastname = localStorage.getItem('Last Name')
  const city = localStorage.getItem('City')
  const state = localStorage.getItem('State')
  const address = localStorage.getItem('Address')
  const address1 = localStorage.getItem('Address1')
  const zip = Number(localStorage.getItem('Zip'))
  const totalPrice = Number(localStorage.getItem('total'))
    console.log(firstname,lastname,city,state,address,address1,zip,totalPrice)
  mydatabase.collection('customers').add({
    firstname:firstname,
    lastname:lastname,
    address:address,
    address1:address1,
    city:city,
    state:state,
    zip:zip,
    totalPrice:totalPrice
  })

})


  return (
    <div>

    </div>
  )
}

export default CustomerData