import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import * as blog from '../../store/reducers/blog';

const HomePage = (props) => {

	const getHomeBlogDescription = () => {
		props.fetchHomeDescription("");
	}
  
	useEffect(() => {
		getHomeBlogDescription();
	},[]);
  return (
    <>
      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">Welcom to React Boostrap Blog</h1>
          <p className="lead my-3">This porject is built on react as frontend and css framework bootstrap with their sample blog html</p>
        </div>
      </div>
	   <div className="row">
		<div className="col-md-8 blog-main">
		  <div className="blog-post">
			
			{
			  (props.homePageBlog == "") ?
				<></>
			  :
			  (props.homePageBlog == null) ?
			  <>
			  Loading.....
			  </>
			  :
			  <>
				<div dangerouslySetInnerHTML={ { __html: props.homePageBlog } }></div>
			  </>
			}
		  </div>
		  </div>
		</div>
    </>
  )
};

function mapStateToProps(state) {
  return {
    homePageBlog: state.blog.homePageBlog,
  };
}

export default connect(mapStateToProps,blog.actions)(HomePage);
