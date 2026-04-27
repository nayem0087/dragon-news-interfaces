import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex items-center justify-center flex-col'>
            <h2 className='font-bold text-4xl pb-4 text-purple-600'>This page is not found!</h2>
            <p className='font-semibold text-xl text-gray-500 mb-6'>Please try again letter.</p>
            <Link href={'/'}>
                <button className='btn bg-purple-500 text-white'>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;