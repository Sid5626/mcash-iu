import React from 'react-dom';
import gift from '../img/print.webp';

const Header=()=>{
    return (<>
    <div className='border-2'>
        <nav className='flex flex-wrap'>
            <ul className='flex-auto flex'>
                <li className="md:hidden">
                <svg class="h-8 w-8 text-grey-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
</svg>
                </li>
                <li><h1 className='text-xl px-5'>Home</h1></li>
            </ul>
            <ul className='flex-intial flex justify-end hidden sm:flex'>
                <li className='flex-intial   px-4 my-2'>Home</li>
                <li className='flex-intial   px-4 my-2'>About</li>
                <li className='flex-intial   px-4 my-2'>Contact Us</li>
                <li className='flex-intial   px-4 my-2'>Offers</li>
                </ul>
                <svg className="m-2 h-8 w-8 text-grey-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
</svg>

        </nav>
        <div className='relative'>
            <div className='h-1/5 m-5 grid grid-cols-2 items-center bg-gradient-to-l from-orange-300' style={{height:200,borderRadius:25}}>
                <div className='text-center p-4 m-4'><h1 className='text-md font-bold'>Daily Rewards</h1>
                <h2 className='m-4'>Log in daily to claim free coins</h2>
                <button className=''>CLAIM PRIZE</button></div>
                <div className="text-center md:w-4/5,mx-5" >    
                <img className="image m-5 md:w-{100%}" src={gift} alt="user" 
                style={{height:"150px",width:"80%"}}></img>           
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default Header;