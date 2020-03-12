import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./router/Routes";
import { Provider } from 'react-redux';

const App = ({store}) => {

    return (
    	<Provider store={store}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</Provider>
	);
};

export default App;