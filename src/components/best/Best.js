import React from 'react'
import Apt1 from '../../assests/apt1.jpeg'
import Apt2 from '../../assests/apt2.jpeg'
import Apt3 from '../../assests/apt3.jpeg'
import './Best.css'
const best = () => {
  return (
    <div className='best'>
        <h1>Find Best Rated Properties</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Agriculture</p>
            </div>
            <div className='container'>
                <img src={Apt1} alt="" />
                <img src={Apt2} alt="" />
                <img src={Apt3} alt="" />
            </div>
            <button className='btn'>View All</button>
    </div>
  )
}

export default best