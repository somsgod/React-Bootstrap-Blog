import React from 'react';
import NavSingleItem from './components/NavSingleItem';

const HeaderNav = (props) => {
    const navItems = props.routes;
    return (
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between" style={{borderBottom: '1px solid #e5e5e5', paddingBottom: 0, marginBottom:10}}>
                {
                    navItems.map((item, index) => 
                        <NavSingleItem item={item} key={index} />
                    )
                }
            </nav>
        </div>
    );
};

export default HeaderNav;