import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const Header = () => {
	const [ connection, setConnection ] = useState(false);
	const history = useHistory();
	const onConnection = (evt) => {
		evt.preventDefault();
		setConnection(!connection);
		console.log(connection);
	};
	const logout = () => {
		localStorage.removeItem('usertoken');
		history.push('/');
	};
	return (
		<Navbar bg="primary" variant="dark">
			<Navbar.Brand>Todo List</Navbar.Brand>

			<Nav className="mr-auto">
				<Nav.Link className="active" as={Link} to="/">
					Home
				</Nav.Link>
				<Nav.Link as={Link} to="/taches">
					Taches
				</Nav.Link>
			</Nav>

			<Nav>
				<Nav.Link as={Link} to="/register">
					Register
				</Nav.Link>
				<Nav.Link onClick={logout}>Deconnexion</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default Header;
