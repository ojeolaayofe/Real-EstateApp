import React from 'react'
import './Featured.css'

import House1 from '../../assests/house1.jpg'
import Bed1 from '../../assests/bed1.jpg'
import Bed2 from '../../assests/bed2.jpg'
import kitchen from '../../assests/kitchen.jpg'
import Bathroom from '../../assests/bath1.jpg'

import House2 from '../../assests/house2.jpg'
import Bed3 from '../../assests/bed3.jpg'
import Bed4 from '../../assests/bed4.jpg'
import Bathroom2 from '../../assests/bath2.jpg'
import LivingRoom from '../../assests/living-room.jpg'

const Featured = () => {
  return (
    <div className='featured'>
        <h1 className='featured-text'>Top Featured Listings</h1>
        <p className='featured-text'>Selected Listings by City, State, Zip based on views.</p>
        <div className='container'>
            <img className='span-3 image-grid-row-2'  src={House1} alt='' />
            <img  src={Bed1} alt='' />
            <img  src={Bed2} alt='' />
            <img  src={kitchen} alt='' />
            <img  src={Bathroom} alt='' />
            <div className='span-3 img-details'>
                <div className='top'>
                    <h2>No 7, Jude Iyere street. Agbara</h2>
                    <p>House for sale</p>
                    <p className='price'>#14,000,000</p>
                </div>
                <div className='info-grid'>
                    <div>
                        <div className='info'>
                            <p className='bold'>Bedroom:</p><p>5</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Birthroom:</p><p>7</p>
                        </div>
                    </div>
                    <div>
                        <div className='info'>
                            <p className='bold'>Square Feet:</p><p>8,138</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Payment:</p><p>#6577767/month</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='span-2 right-img-details'>
                <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna.</p>
                <button className='btn'>View Listings</button>
            </div>

        </div>
{/* section */}
<div className='container'>
            <img className='order-2'  src={House2} alt='' />
            <img className='order-3'  src={Bed3} alt='' />

            <img className='span-3 image-grid-row-2 order-1' src={Bed4} alt='' />

            <img className='order-4'  src={Bathroom2} alt='' />
            <img className='order-5'  src={LivingRoom} alt='' />
            <div className='span-2 right-img-details order-7'>
                <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna.</p>
                <button className='btn'>View Listings</button>
            </div>
            <div className='span-3 img-details order-6'>
                <div className='top'>
                    <h2>No 7, Jude Iyere street. Agbara</h2>
                    <p>House for sale</p>
                    <p className='price'>#14,000,000</p>
                </div>
                <div className='info-grid'>
                    <div>
                        <div className='info'>
                            <p className='bold'>Bedroom:</p><p>5</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Birthroom:</p><p>7</p>
                        </div>
                    </div>
                    <div>
                        <div className='info'>
                            <p className='bold'>Square Feet:</p><p>8,138</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Payment:</p><p>#6577767/month</p>
                        </div>
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Featured;