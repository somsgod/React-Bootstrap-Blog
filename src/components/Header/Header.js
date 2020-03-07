import React from 'react';

const Header = props => {
    return (
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 ">
            <a className="blog-header-logo text-dark" href="#">React Blog</a>
          </div>
        </div>
      </header>
    );
};

export default Header;