import React, { useState,useEffect  } from 'react';
import { matchPath,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import request from './../../__mocks__/request';
const BlogPage = (props) => {

  let page_details = {};

	const getPageDetails = () => {
		props.routes.map(prop => {
	      if (
	        matchPath(props.location.pathname, {
	          path: prop.path,
	          exact: true,
	          strict: false
	        })
	      ) {
	        page_details = prop;
	      }
	    });
	   	return page_details;
	};
  getPageDetails();

  
  const getBlogDescription = () => {
    props.dispatch({ type: 'LOADING_DESCRIPTION'});
    request(page_details.name.toLowerCase()).then(result => {
        props.dispatch({ type: 'SET_DESCRIPTION' , payload: result.data.data[0].description});
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    getBlogDescription();
  },[]);

  return (
    <div className="row">
    <div className="col-md-8 blog-main">
      <div className="blog-post">
        
        {
          (props.blogDescription == null) ?
          <>
          Loading.....
          </>
          :
          <>
            <div dangerouslySetInnerHTML={ { __html: props.blogDescription } }></div>
          </>
        }
      </div>
      </div>
      </div>
  )
};

function mapStateToProps(state) {
  return {
    blogDescription: state.blogDescription,
  };
}

export default connect(mapStateToProps)(withRouter(BlogPage));