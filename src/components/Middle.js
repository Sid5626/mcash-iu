import React from 'react-dom';
import Card from './Card';


const Middle=()=>{
    return <>
    <div className=''>
        <div className='m-5'>
         <Card></Card>
        {/* <div className='text-center p-5 m-5 rounded-[25px]  bg-gradient-to-l from-blue-300 ' style={{height:"100px"}}>Hello This is Content 1</div>
        <div className='text-center p-5 m-5 rounded-[25px]  bg-gradient-to-l from-green-300 ' style={{height:"100px"}}>Hello This is Content 2</div>
        <div className='text-center p-5 m-5 rounded-[25px]  bg-gradient-to-l from-orange-300 ' style={{height:"100px"}}>Hello This is Content 3</div> */}
     </div>       
        <div className='grid gap-4 grid-cols-2 p-5 m-4'>
            <div className='text-center rounded-[25px]  bg-gradient-to-l from-yellow-300 ' style={{height:"100px"}}>
                <h1 className='font-bold text-xl py-10'>Adscend offer</h1></div>
            <div className='text-center rounded-[25px]  bg-gradient-to-l from-blue-300' style={{height:"100px"}}><h1 className='font-bold text-xl py-10'>Adgate offer</h1></div>
        </div>
    </div>
    </>
}

export default Middle;