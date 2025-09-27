import React from 'react';
import Vector from '../assets/vector1.png'

const Bannner = () => {
    return (
        <div className='flex justify-between gap-[20px] mt-10'>
            <div className='flex max-w-[708px] bg-gradient-to-r from-[#5741e8] to-purple-600 rounded-md'>
            <img className='w-40 h-30' src={Vector} alt="" />
            <div className='items-center text-center justify-center mt-7.5'>
                <h1 className='whitespace-nowrap text-sm  text-white'>In-Progress</h1>
                <h2 className='text-white text-2xl font-bold'>0</h2>
            </div>
            <img className='scale-x-[-1] w-40 h-30' src={Vector} alt="" />
        </div> 


        <div className='flex bg-gradient-to-r from-[#4bed7c] to-green-600 rounded-md'>
            <img className='w-40 h-30' src={Vector} alt="" />
            <div className='items-center text-center justify-center mt-7.5'> 
                <h1 className='whitespace-nowrap text-sm  text-white'>Resolved</h1>
                <h2 className='text-white text-2xl font-bold'>0</h2>
            </div>
            <img className='scale-x-[-1] w-40 h-30' src={Vector} alt="" />
        </div>
        </div>
    );
};

export default Bannner;