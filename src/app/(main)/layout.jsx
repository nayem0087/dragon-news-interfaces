import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { montserrat } from '../layout';
import BreakingNews from '@/components/shared/BreakingNews';

const MainLayout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
            <Header />
            <BreakingNews/>
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;