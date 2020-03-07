import React from "react";
import { Route } from "react-router-dom";
import routes from './../PageList';
import Layout from "../layouts/Layout";
import BlogPage from "../pages/Blog/BlogPage";
import HomePage from "../pages/Home/HomePage";

const Routes = (props) => {
	
	return (
		<Layout routes={routes}>
			{
				routes.map((item, index) => 
					<Route key={index} exact path={item.path} render={(props) => <item.component routes={routes} />} />
				)
			}
		</Layout>		
	);

};

export default Routes;