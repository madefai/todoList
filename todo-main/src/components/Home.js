import React, { useState,useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import Taches from "./Taches";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [form, setForm] = useState({});
  const [idUser, setIdUser] = useState("");
  const history = useHistory();

  useEffect(() => {
    if(!localStorage.getItem("usertoken")){
      history.push('/');
    }
    axios
    .get('http://localhost/todoList/server/public/api/me', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('usertoken')
      }
    })
    .then((response) => {
      console.log('response gtg', response.data.id);
      setIdUser(response.data.id);
      
    })
    .catch((error) => {
      if (error) {
        console.log('Sorry.....Error');
      }
    });
  }, []);

  const onChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(form);
    axios
			.post(`http://localhost/todoList/server/public/api/addTache`, { title: form.title, desc: form.desc,idUser: idUser })
			.then((response) => {
			
				
        window.location.reload(true);
			})
			.catch((error) => {
				if (error) {
					console.log('Sorry.....Error');
				}
			});
  };
  console.log('response gtg111', idUser);
  return (
    <>
      <Taches idUser={idUser}/>
      <Row className="justify-content-md-center ">
        <Form>
          <Form.Row style={{ alignItems: "center" }}>
            <Col style={{ marginTop: "20px" }}>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  value={form.title}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
            <Col style={{ marginTop: "20px" }}>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="desc"
                  type="text"
                  value={form.desc}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
            <Col style={{ marginTop: "20px" }}>
              <Button
                className="btnFormSend"
                variant="primary"
                type="submit"
                onClick={onSubmit}
              >
                Ajouter la tache
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Row>
    </>
  );
};

export default Home;
