import React, { useState, useEffect } from "react";
import { Button, ListGroup, Row, Badge } from "react-bootstrap";
import MyModal from "./Modal";
import MyAlert from "./Alert";

import axios from 'axios';

const Taches = (props) => {
  
  const [todos, setTodos] = useState([]);
  const [onToggleModal, setOnToggleModal] = useState(false);
  const [onToggleAlert, setOnToggleAlert] = useState(false);
  const [listItemId, setListItemId] = useState("");
  
  
  const showModal = (id) => {
    
    setOnToggleModal(!onToggleModal);
    setListItemId(id);
    console.log("id",id);
  };
  const showAlert = (id) => {
    setOnToggleAlert(!onToggleAlert);
    setListItemId(id);
  };
  
  useEffect(() => {
   
    axios
		.get(`http://localhost/todoList/server/public/api/getTaches`, {
			headers: { 'Content-Type': 'application/json' }
		}).then(res=>{
     
      setTodos(res.data)
      
      
    })
    .catch(err=>{
      console.log(err);
  
    })

    
      
  }, []);
  
 
  return (
    
    <>
      <Row
        className="justify-content-md-center "
        style={{ marginTop: "100px" }}
      >
        {todos.map((item) => (
          <ListGroup style={{ margin: "0 70px" }}>
            <ListGroup.Item style={{ display: "flex" }}>
              <div style={{ width: "700px" }}>
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                  {item.title}
                </span>{" "}
                <span style={{ marginRight: "20px" }}>{item.desc}</span>
              </div>
              <div>
                <Badge
                  variant={item.statut == "true"  ? "success" : "danger"}
                  style={{ marginRight: "20px", width:"100px" }}
                >
               
                </Badge>
              
                <Button
                  className="btn btn-primary"
                  style={{ marginRight: "20px" }}
                  onClick={()=>showModal(item.id)}
                  
                >
                  Modifier
                </Button>
                <Button className="btn btn-danger" onClick={()=>showAlert(item.id)}>
                  Supprimer
                </Button>
              
              </div>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </Row>
      {onToggleModal && (
      <MyModal
        handleClose={showModal}
        show={onToggleModal}
        title="Update To Do "
        listItemId={listItemId}
      />
      )}
      <MyAlert handleClose={showAlert} show={onToggleAlert} listItemId={listItemId}/>
    </>
  );
};

export default Taches;
