import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import axios from 'axios';

const MyAlert = (props) => {
	const { show, onHide, handleClose, listItemId } = props;
	const onSubmit = () => {
		axios
			.delete(`http://localhost/todoList/server/public/api/deleteTache/${listItemId}`, {
				headers: { 'Content-Type': 'application/json' }
			})
			.then((res) => {
				console.log(res);
				window.location.reload(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	console.log('listItemId', listItemId);
	return (
		<Alert
			show={show}
			variant="danger"
			onClose={handleClose}
			dismissible
			style={{
				position: 'fixed',
				top: '70px',
				left: '2%',
				width: ' 96%',
				zIndex: 9999
			}}
		>
			<Alert.Heading>Delete Item</Alert.Heading>
			<p>Êtes-vous sûr de bien vouloir supprimer cet élément?</p>
			<hr />
			<div className="d-flex justify-content-end">
				<Button variant="danger" onClick={onSubmit}>
					Supprimer
				</Button>
			</div>
		</Alert>
	);
};

export default MyAlert;
