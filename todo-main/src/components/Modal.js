import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { format } from 'url';

const MyModal = (props) => {
	const { title, show, handleClose, content, listItemId } = props;
	const [ form, setForm ] = useState({ title: '', desc: '', statut: 'false' });
	// const [ statuts, setStatuts ] = useState('false');

	useEffect(() => {
		axios
			.get(`http://localhost/todoList/server/public/api/getTache/${listItemId}`, {
				headers: { 'Content-Type': 'application/json' }
			})
			.then((res) => {
				setForm(res.data[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const onChange = (evt) => {
		console.log([ evt.target.name ]);
		setForm({ ...form, [evt.target.name]: evt.target.value });
	};
	// const changeStatut = () => {
	// 	setStatuts('true');
	// };
	const onSubmit = (evt) => {
		evt.preventDefault();
		console.log(form);
		console.log('tyt', form.title);
		axios
			.put(`http://localhost/todoList/server/public/api/updateTache/${listItemId}`, {
				title: form.title,
				desc: form.desc,
				statut: form.statut
			})
			.then((response) => {
				window.location.reload(true);
			})
			.catch((error) => {
				if (error) {
					console.log('Sorry.....Error');
				}
			});
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group>
						<Form.Label>Title</Form.Label>
						<Form.Control name="title" type="text" value={form.title} onChange={onChange} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control
							name="desc"
							type="text"
							value={form.desc}
							as="textarea"
							rows={3}
							onChange={onChange}
						/>
						<div class="form-check">
							<input
								className="form-check-input"
								name="statut"
								type="checkbox"
								value="true"
								id="flexCheckDefault"
								onChange={onChange}
							/>
							<label className="form-check-label" for="flexCheckDefault">
								Tache complete
							</label>
						</div>
					</Form.Group>
					<Button variant="secondary" onClick={handleClose}>
						Fermer
					</Button>
					<Button variant="primary" type="submit" onClick={onSubmit}>
						Sauvegarder les modifications
					</Button>
				</Form>
			</Modal.Body>
			<Modal.Footer />
		</Modal>
	);
};

export default MyModal;
