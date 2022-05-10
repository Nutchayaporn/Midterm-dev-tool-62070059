import React from "react";
import fetch from "cross-fetch";
import { Link } from "react-router-dom";

import {InputGroup, FormControl, Row, Col , Container, Form, Button } from 'react-bootstrap';

export default function App() {

    React.useEffect(() => {
        try {
         const res = await fetch("http://localhost:4000/user");
         if (res.status >= 400) {
           throw new Error("Bad response from server");
         }
         const user = await res.json();
         console.log(user);
       } catch (err) {
         console.error(err);
       }
     }, []);


  return (
 <div>

<Form className="m-5">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>ชื่อ</Form.Label>
    <Form.Control type="text" placeholder="ชื่อ" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>นามสกุล</Form.Label>
    <Form.Control type="text" placeholder="นามสกุล" />
  </Form.Group>

  <Form.Select aria-label="Default select example">
  <option>เพศ</option>
  <option value="ชาย">ชาย</option>
  <option value="หญิง">หญิง</option>
  <option value="ไม่ระบุ">ไม่ระบุ</option>
</Form.Select>


<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>บัตรประจำตัว</Form.Label>
    <Form.Control type="text" placeholder="บัตรประจำตัว" />
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Line ID</Form.Label>
    <Form.Control type="text" placeholder="Line ID" />
  </Form.Group>



  <Link className="m-5"
        to="/"
        style={{
            borderRadius: "40px",
          marginTop: 50,
          cursor: "pointer",
          textDecoration: "none",
          fontSize: "15px",
          padding: "15px",
          color: "#000",
          backgroundColor: "#b1d334",
          width: 300
        }}
        
      >
        ลงทะเบียน
      </Link>

      

 
</Form>


     
     

    </div>
  );
}
