import React, { useState,useEffect  } from 'react';
import { matchPath,withRouter } from 'react-router-dom';
import request from './../../__mocks__/request';
const BlogPage = (props) => {

  const [blogDescription, setBlogDescription] = useState(null);
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
    request(page_details.name.toLowerCase()).then(result => {
        setBlogDescription(result.data.data[0].description);
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    getBlogDescription();
    if(blogDescription != null){
      console.log(blogDescription);
    }
  },[]);

  return (
    <div className="row">
    <div className="col-md-8 blog-main">
      <div className="blog-post">
        
        {
          (blogDescription == null) ?
          <>
          Loading.....
          </>
          :
          <>
            <div dangerouslySetInnerHTML={ { __html: blogDescription } }></div>
          </>
        }
      </div>
      </div>
      </div>
  )
};

export default withRouter(BlogPage);
