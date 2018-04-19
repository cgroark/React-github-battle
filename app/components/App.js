var React = require('react');
var Popular = require('./Popular');
var Home = require('./Home');
var Battle = require('./Battle');
var Restuls = require('./Results')
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require ('./Nav')
var Switch = ReactRouter.Switch;

class App extends React.Component {
	render(){
		return (
			<Router>
				<div className = 'container'>
					<Nav />
					<Switch>
						<Route path='/popular' component={Popular} />
						<Route exact path='/' component={Home} />
						<Route exact path='/battle' component={Battle} />
						<Route path ='/battle/routes' componetn={Results}
						<Route render={function() {
							return <p>Not Found</p>
						}} />
					</Switch>
				</div>
			</Router>
		)
	}
}


module.exports = App;