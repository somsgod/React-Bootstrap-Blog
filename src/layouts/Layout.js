import React from "react";
import { Header,Footer,HeaderNav,Page } from '../components';

const Layout  = (props) => {
  const routes = props.routes;
  
  return (
    <>
      <div className="container">
        <Header />
        <HeaderNav routes={routes} />
      </div>
      <Page>{props.children}</Page>
      <Footer>
        <p>Bootstrap Blog built on React</p>
      </Footer>
    </>
  );
};


export default Layout;