import React from 'react';

const Page = ({ children }) => {
  return (
          <main role="main" className="container">
            {children}
          </main>
        );
};

export default Page;
