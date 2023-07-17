import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";


const EditarUsario = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div>
             <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Editar tipo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Control>
                 
                </Form.Control>
                <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
              </Form>
            </Modal.Body>
        
              
           
          </Modal>
        </div>
    );
};

export default EditarUsario;