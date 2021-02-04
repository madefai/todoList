import React, { useState } from 'react';
import { Button, Form, Nav, Navbar, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {
	const [ form, setForm ] = useState({});
	const history = useHistory();
	const onChange = (evt) => {
		console.log([ evt.target.name ]);
		setForm({ ...form, [evt.target.name]: evt.target.value });
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		console.log(form);
		axios
			.post(`http://localhost/todoList/server/public/api/addUser`, {
				name: form.name,
				email: form.email,
				password: form.password
			})
			.then((response) => {
				console.log('ajouter avec succee');
				history.push('/');
			})
			.catch((error) => {
				if (error) {
					console.log('Sorry.....Error');
				}
			});
	};
	return (
		<Row className="justify-content-md-center ">
			<Col xs={3} style={{ marginTop: '200px' }}>
				<Form>
					<Form.Group>
						<Form.Label>Nom</Form.Label>
						<Form.Control name="name" type="text" value={form.name} onChange={onChange} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Adresse e-mail</Form.Label>
						<Form.Control name="email" type="email" value={form.email} onChange={onChange} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Mote de passe</Form.Label>
						<Form.Control name="password" type="password" value={form.password} onChange={onChange} />
					</Form.Group>
					<Button className="btnFormSend" variant="primary" type="submit" onClick={onSubmit}>
						Soumettre
					</Button>
				</Form>
			</Col>
		</Row>
	);
};

export default Register;
