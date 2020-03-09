import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./router/Routes";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import BlogReducer from './stores/reducers/BlogReducer';

const store = createStore(BlogReducer);

console.log(store);

const App = () => {

    return (
    	<Provider store={store}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</Provider>
	);
};

export default App;