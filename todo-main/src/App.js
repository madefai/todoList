import Container from 'react-bootstrap/Container';
import Taches from './components/Taches';
import Header from './components/Header';
import Connection from './components/Connection';
import Register from './components/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
function App() {
	return (
		<Router>
			<Switch>
				<Container fluid>
					<div
						style={{
							zIndex: '1',
							position: 'fixed',
							top: '0%',
							width: '100%'
						}}
					>
						<Header />
					</div>
					<Route exact path="/">
						<Connection />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/connection">
						<Connection />
					</Route>
					<Route path="/taches">
						<Home />
					</Route>
				</Container>
			</Switch>
		</Router>
	);
}

export default App;
