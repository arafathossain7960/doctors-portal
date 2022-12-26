import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPage/Footer/Footer';
import Navigation from '../SharedPage/Navigation/Navigation';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;