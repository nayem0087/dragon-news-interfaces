import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { montserrat } from '../layout';

const MainLayout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
            <Header />
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;