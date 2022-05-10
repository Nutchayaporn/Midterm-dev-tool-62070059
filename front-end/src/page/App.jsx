import React from "react";
import fetch from "cross-fetch";
import { Link } from "react-router-dom";

// import { Button , Image, Col ,Row} from 'react-bootstrap';

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


    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src="https://www.ais.th/vaccinesforthais/images/vaccine28-04-2022.png"
        style={{ width: 500 }}
      />
      <Link
        to="/otp"
        style={{
            borderRadius: "40px",
          marginTop: 50,
          cursor: "pointer",
          textDecoration: "none",
          fontSize: "15px",
          padding: "15px",
          color: "#000",
          backgroundColor: "#b1d334",
         
        }}
      >
        ลงทะเบียนจองคิว-Register
      </Link>
    </div>
  );
}
