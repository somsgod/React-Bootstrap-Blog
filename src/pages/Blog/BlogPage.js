import React, { useState,useEffect  } from 'react';
import { matchPath,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as blog from '../../store/reducers/blog';

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
    props.fetchDescription(page_details.name.toLowerCase());
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
    blogDescription: state.blog.blogDescription,
  };
}

export default connect(mapStateToProps,blog.actions)(withRouter(BlogPage));