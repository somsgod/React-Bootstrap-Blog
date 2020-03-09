
const initialState = {
  blogDescription: null
};


function BlogReducer(state = initialState, action) {
	switch(action.type) {
		case 'LOADING_DESCRIPTION':
	      return {
	        blogDescription: null
	      };
	    case 'SET_DESCRIPTION':
	      return {
	        blogDescription: action.payload
	      };
	    default:
	      return state;
  	}
}

export default BlogReducer;