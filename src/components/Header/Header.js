import React, { useState,useEffect  } from 'react';
import * as blog from '../../store/reducers/blog';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Header = props => {
	
	const changeBlog = (e) => {
		props.fetchHomeDescription(e.currentTarget.value)
	}
	
    return (
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4">
            <a className="blog-header-logo text-dark" href="#">React Blog</a>
          </div>
		  {(props.homePageBlog != null) ?
		  <div className="">
			<div className="form-group">
				<select className="form-control" onChange={changeBlog} style={{float:'right'}}>
				  <option value="">Select</option>
				  <option value="technology">Technology</option>
				  <option value="world">World</option>
				</select>
			 </div>
		  </div>
		  :
		  <></>
		  }
        </div>
      </header>
    );
};

function mapStateToProps(state) {
console.log(state);
  return {
    homePageBlog: state.blog.homePageBlog,
  };
}

export default connect(mapStateToProps,blog.actions)(withRouter(Header));