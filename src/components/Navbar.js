import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AddProducts from './AddProducts'
import Login from './Login'
import Logout from './Logout'
import Card from './Card'

const Navbar = (props) => {
  const logout = () => {
    window.location.pathname = "/login";
    props.data(false)
  }
  return (
    <BrowserRouter>
      <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Shopping Cart</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <button type="button" id='mypopover' data-html="true" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
                sagittis lacus vel augue laoreet rutrum faucibus.">
                Cart</button>
                {props.isLoggedIn ?
                  <>
                    <li className="nav-item">
                      <Link to="/home" className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/add" className='nav-link'>Add Products</Link>
                    </li>

                    <button className='btn btn-outline-light ml-2' onClick={logout}>LogOut</button>
                    <form className="d-flex" style={{ position: 'relative', left: '52rem' }}>
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                  </>
                  : <li className="nav-item">
                    <Link to="/login" className='nav-link'>Log In</Link>
                  </li>
                }

              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path='/home' element={<Card />}></Route>

        <Route path='/add' element={<AddProducts />}></Route>
        <Route path='/login' element={<Login  info={props.data}/>}></Route>
        <Route path='/logout' element={<Logout />}></Route>
      </Routes>

    </BrowserRouter>

  )
}

export default Navbar