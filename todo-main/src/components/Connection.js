import React, { useState } from 'react';
import { Button, Form, Nav, Navbar, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Connection = () => {
	const [ form, setForm ] = useState({});
	const history = useHistory();

	const onChange = (evt) => {
		setForm({ ...form, [evt.target.name]: evt.target.value });
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		console.log(form);
		axios
			.post(`http://localhost/todoList/server/public/api/login`, { email: form.email, password: form.password })
			.then((response) => {
				console.log('result', response.data.access_token);
				history.push('/taches');
				localStorage.setItem('usertoken', response.data.access_token);
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

export default Connection;
