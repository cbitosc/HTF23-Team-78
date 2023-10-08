import React, { useState } from 'react'
import homeimg from '../images/homepageimage.jpg'
import burger from '../images/burger.jpg'
import { Link } from 'react-router-dom';
import Recipies from './Recipies';
function LandingPage(props) {
    let cusines = ["ITALIAN", "INDIAN", "CHINESE", "JAPANESE", "AMERICAN"];
    return (
        <div>
            {/* <div className=''>
<img src={homeimg}></img>
</div> */}
            <div>
                <div className='justify-center align-center flex m-[50px] rounded-lg'>
                    <img className="w-[1200px] h-[500px] rounded-lg" src={burger}></img>
                </div>
            </div>
            <div className='flex flex-col gap-y-3'> 
            <div>

                <div className="flex flex-wrap gap-4 ml-[100px] mr-[100px] items-center justify-center">
                    {
                        cusines.map((cusine, index) => (
                            <Link to="/Cuisine" className='no-underline'>
                            <div className="w-[170px] h-[150px] rounded-2xl bg-[#a3a3a3] items-center justify-center flex cursor-pointer"
                            onClick={()=>props.getcontentfromlandingpage(cusine)}>
                                <h3 className="text-[#ffffff] font-semibold">{cusine}</h3>
                            </div>
                            </Link>
                        ))
                    }

                </div>
            </div>
            <div>
                <Recipies/>
            </div>
            </div>
        </div>
    )
}

export default LandingPage