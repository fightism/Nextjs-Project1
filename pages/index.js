import Button from "react-bootstrap/Button";
import { RiSwordLine } from "react-icons/ri";

import { useState } from "react";
import Row from "react-bootstrap/Row";
import TableMember from "../component/project1/TableMember";
import FormToggle from "../component/project1/FormToggle";
import { Container } from "react-bootstrap";
import Head from "next/head";
export default function Home() {
  
const[visible,setVisible]= useState(false)

const handle =()=>{
  setVisible(visible?false:true)
}



  return (
 
 

  

     
    <Container className=" justify-content-md-center " style={{minWidth:"550px"}}>

        <title>Adventurer Management</title>


       <Row className="mt-3 mb-3">

  <h1 className="topicfont " style={{textAlign:"center"}} >Adventurer Management</h1>
    </Row>  
      <br></br>
     <row>
      <div >
      <Button variant="warning" onClick={handle}>
        Add Adventurer <RiSwordLine size={25} />
      </Button></div>
      </row>
    
      <br></br>
      <row className="col-10">
      {visible?<FormToggle></FormToggle>:<></>}
      </row>
       <row className="col-10">
      <TableMember></TableMember>
      </row>
      </Container>
     

  )
}
