import React from 'react-dom'
import {BiListCheck} from "react-icons/bi";
import {CiGift} from "react-icons/ci";
const Card=()=>{
    return(
        <>
        <div className='text-center p-5 m-5 rounded-[25px]  bg-gradient-to-l from-blue-300 flex justify-between' style={{height:"100px"}}>
        <h1 className='flex-intial w-4/5'>
            <p className='text-xl font-bold'>Task Offers</p>
            <p>Complete tasks to get coins</p>
        </h1>
        <div className='flex-intial'><BiListCheck size={"65px"}></BiListCheck></div>
        </div>
        <div className='text-center p-5 m-5 rounded-[25px]  bg-gradient-to-l from-green-300 flex justify-between' style={{height:"100px"}}>
        <h1 className='flex-intial w-4/5'>
            <p className='text-xl font-bold'>Task Offers</p>
            <p>Complete tasks to get coins</p>
        </h1>
        <div className='flex-intial'><CiGift size={"55px"}></CiGift></div>
        </div>
        <div className='text-center p-5 m-5 rounded-[25px]  bg-gradient-to-l from-orange-300 flex justify-between' style={{height:"100px"}}>
        <h1 className='flex-intial w-4/5'>
            <p className='text-xl font-bold'>Task Offers</p>
            <p>Complete tasks to get coins</p>
        </h1>
        <div className='flex-intial'><BiListCheck size={"65px"}></BiListCheck></div>
        </div>
        </>
    )
}
export default Card;