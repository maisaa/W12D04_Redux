import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

//context providers
import store from './reducer';
import Provider from 'react-redux';
// import RegisterProvider from './context/register';
// import LoginProvider from './context/login';
// import NewArticleProvider from './context/newArticle';
// import DashboardProvider from './context/dashboard';

ReactDOM.render(

	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>
	,
	// <Router>
	// 	<LoginProvider>
	// 		<RegisterProvider>
	// 			<NewArticleProvider>
	// 				<DashboardProvider>
	// 					<App />
	// 				</DashboardProvider>
	// 			</NewArticleProvider>
	// 		</RegisterProvider>
	// 	</LoginProvider>
	// </Router>,
	document.getElementById('root'),
);
