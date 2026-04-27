import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='text-center my-8 space-y-4'>
            <Image src={logo} height={200} width={300} alt={logo} className='mx-auto' />
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;