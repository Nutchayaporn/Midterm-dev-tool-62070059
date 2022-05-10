import React from "react";
import fetch from "cross-fetch";
import { Link } from "react-router-dom";

import {InputGroup, FormControl, Row, Col , Container} from 'react-bootstrap';

export default function App() {
  var getData = async () => {
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
  };

  return (
 <div>



<Container>
  <Row className="m-5" >
    
    <Col xs={6}>  
    <img
        src="https://vaccineforthais.ais.th/Images/MicrosoftTeams-image.png"
        style={{ width: 500 }}
      /></Col>
    
  </Row>

  <Row> 
  <Col xs={12} className="m-3">
        
  บริการลงทะเบียนรับวัคซีนโควิด-19 โดย เอไอเอส <br></br>
จัดสรรโดย กรมการแพทย์ กระทรวงสาธารณสุข และกระทรวงคมนาคม <br></br>
ระบุหมายเลขโทรศัพท์<br></br>
เพื่อล็อกอินลงทะเบียนรับวัคซีน<br></br>
        
        </Col>
  </Row>

  <Row> 
  <Col xs={6}>
        <InputGroup  className="mb-3" >
    <FormControl
    
      placeholder="0XX-XXX-XXXX"
      aria-label="0XX-XXX-XXXX"
      aria-describedby="basic-addon2"
    />
  </InputGroup></Col>
  </Row>

  <Row className="m-3">
 
  <Link
        to="/form"
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
        รับรหัส OTP ทาง SMS
      </Link>

      </Row>
      <Row  className="m-3">

    
      ข้อควรรู้ก่อนลงทะเบียนรับวัคซีน<br></br>
กลุ่มอายุ 12-17 ปี<br></br>
• รับวัคซีนเข็ม 3: ฉีด 2 เข็ม ครบ 120 วัน<br></br>

กลุ่มอายุ 18 ปี ขึ้นไป<br></br>
• รับวัคซีนเข็ม 3: ฉีด 2 เข็ม ครบ 90 วัน<br></br>
• รับวัคซีนเข็ม 4: ฉีด 3 เข็ม ครบ 120 วัน<br></br>

สถานที่: สถานีกลางบางซื่อ<br></br>
รอรับ SMS แจ้งผลลงทะเบียนภายใน 2 ชม.<br></br>
1 หมายเลข (ค่ายใดก็ได้) / 5 บัตรประชาชน บัตรชมพู หรือพาสปอร์ต<br></br>  

</Row>
</Container>
     
     

    </div>
  );
}
