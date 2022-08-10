import React from 'react'
import '../App.css'

const Product = () => {
    return (
        <div className='container'>
            <div className='body'>
                <h1>Edit Product</h1>
                <div className='main'>
                    <p className='fst'>ID</p>
                    <input className='fstInput' placeholder='AAA1' type='text' />
                    <div className='avtar1'></div>
                    <h3>Select Your Product Picture</h3>
                    <button className='btn'>Browse</button>
                    <p className='second'>Product Name</p>
                    <input className='secondInput' placeholder='Capucino' type='text' />
                    <p className='third'>Category</p>
                    <input className='thirdInput' placeholder='Drink' type='text' />
                    <p className='fourth'>Price</p>
                    <input className='fourthInput' placeholder='5.3' type='text' />
                    <p className='fourth'>Description</p>
                    <input className='fifthInput' placeholder='Description
                         A cappuccino is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam (microfoam)' type='text' />
                </div>
                <div className='foot'>
                    <button className='btn2'>Save</button>
                    <button className='btn3'>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Product