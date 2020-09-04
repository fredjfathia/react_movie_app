import React,{useState} from "react";
 import {Button,Modal} from "react-bootstrap"

function Addmovie(props) {
    const [show, setShow] = useState(false);
    const handleClose = (title,image,rate) =>{setShow(false);
    props.ajoutmovie(title,image,rate) }
    const handleShow = () => setShow(true);
    const [title,setTitle]=useState('');
    const [image,setImage]=useState('');
    const [rate,setRate]=useState(0);
    
    return (
      <>
      <br></br>
        <Button variant="primary" onClick={handleShow}>
         Add Movie
        </Button>
 
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div style={{display:"flex",flexDirection: "column"}}>
          <input type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} /><br></br>
          <input type="text" placeholder="Image"onChange={(e)=>setImage(e.target.value)} /><br></br>
          <input type="number" placeholder="Rate" onChange={(e)=>setRate(e.target.value)} />
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>handleClose(title,image,rate)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default Addmovie;