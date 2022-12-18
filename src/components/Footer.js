import React from 'react-dom';
import {FcFaq as Faq} from "react-icons/fc";
import {GrGroup as User} from "react-icons/gr";
import {MdQuiz as Quiz} from "react-icons/md";
import {GrGamepad as Game} from "react-icons/gr";
import {FaWallet as Wallet} from "react-icons/fa";
const Footer=()=>{
    return (<>
    <div className='relative p-2' style={{top:"0px",bottom:"0px",backgroundColor:"purple"}}>
        <ul className='flex justify-around'>
            <li className='flex-auto px-4  items-center sm:py-2'><Faq size="35px"></Faq></li>
            <li className='flex-auto px-4  items-center sm:py-2'><User size="35px"></User></li>
            <li className='flex-auto px-4  items-center sm:py-2'><Game size="35px"></Game></li>
            <li className='flex-auto px-4  items-center sm:py-2'><Quiz size="35px"></Quiz></li>
            <li className='flex-auto px-4 items-center sm:py-2'><Wallet size="35px"></Wallet></li>
        </ul>
    </div>
    </>)
}

export default Footer;