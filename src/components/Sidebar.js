import React from 'react'
import '../App.css'
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from './Product';
import ProductNew from './ProductNew';

const Sidebar = () => {
    return (
        <Router>
            <div className='container'>
                <div className='sidebar'>
                    <div className='product'>
                        <Link
                            to="/"
                        >
                            <img src='https://static.thenounproject.com/png/2495255-200.png' />
                        </Link>
                    </div>
                    <div className='productt'>
                        <Link
                            to="/productNew"
                        >
                            <img src='https://spng.pngfind.com/pngs/s/61-616906_ticket-icon-png-tickets-icon-transparent-png.png' />
                        </Link>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/" index element={<Product />} />
                <Route path="/productNew" element={<ProductNew />} />
            </Routes>
        </Router>
    )
}

export default Sidebar