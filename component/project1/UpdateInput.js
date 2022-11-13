import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BiRefresh } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AgeError from "./AgeError";
import { UPDATE_MEMBER } from "../../redux/crudReducer";
import { useDispatch } from "react-redux";

export default function UpdateInput(props) {
  const { Pkey,Pfirst,Plast,Pjob,Prank,Page,Pstatus } = props;
  const dispatch = useDispatch();



  function submitData(event) {
    event.preventDefault();

    let fname = event.target.firstName.value;
    let lname = event.target.lastName.value;
    let fullname = fname + " " + lname;
    let job = event.target.job.value;
    let rank = event.target.rank.value;
    let totalAge = event.target.age.value;
  
    let status = event.target.status.value;



    const data = {
      key: Pkey,
      fname,
      lname,
      fullname,
      job,
      rank,
      totalAge,
      status,
    };
    event.target.firstName.value = "";
    event.target.lastName.value = "";
    event.target.job.value = "";
    event.target.rank.value = "";
    event.target.status.value = "";


    if (totalAge > 13) {
      setShowError(false)
      return dispatch(UPDATE_MEMBER(data));
    }
    else{
      setShowError(true)
    }


  }



  const[showError,setShowError]= useState(false)


  const [age, setAge] = useState(Page);
  const [ffname, setffname] = useState(Pfirst);
  const [llname, setllname] = useState(Plast);
  const [jjob, setjjob] = useState(Pjob); 
  const [rrank, setrrank] = useState(Prank);
  const [sstatus, setsstatus] = useState(Pstatus);  


  let error = null

  if(showError){
 error = <AgeError/>}

 let result = sstatus
switch (result){
case "Alive":
  result = "Alive"
  break
case "Dead":
  result = "Dead"
  break
  case "Missing":
    result = "Missing"
  break
}

  return (
    <div>
      <Form onSubmit={submitData}>
        <Row>
          <Col sm={4}>
            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="mb-3"
            >
              <Form.Control type="text" name="firstName" value={ffname} onChange={(e)=> setffname(e.target.value)} required />
            </FloatingLabel>
          </Col>
          <Col sm={4}>
            <FloatingLabel
              controlId="floatingInput"
              label="Last Name"
              className="mb-3"
            >
              <Form.Control type="text" name="lastName" value={llname} onChange={(e)=> setllname(e.target.value)}required />
            </FloatingLabel>
          </Col>
          <Col sm={4}>
            <FloatingLabel
              controlId="floatingInput"
              label="Age"
              className="mb-3"
            >
              <Form.Control type="number" name="age"
              value={age} onChange={(e)=> setAge(e.target.value)}  required />
            </FloatingLabel>
          </Col>






          
        </Row>
        <Row>
          <Col sm={4}>
            <Form.Select
              aria-label="Default select example"
              name="job"
              className="mb-3"
              required
              value={jjob}
              onChange={(e)=> setjjob(e.target.value)} >
            
              <option value="">Select Job Classes</option>
              <option value="Novice">Novice</option>
              <option value="Knight">Knight</option>
              <option value="Hunter">Hunter</option>
              <option value="Magician">Magician</option>
              <option value="Assasin">Assasin</option>
              <option value="Priest">Priest</option>
            </Form.Select>
          </Col>
          <Col sm={4}>
            <Form.Select
              aria-label="Default select example"
              name="rank"
              className="mb-3"
              required
              value={rrank}
              onChange={(e)=> setrrank(e.target.value)} >

              <option value="">Select Rank</option>
              <option value="S">Rank S</option>
              <option value="A">Rank A</option>
              <option value="B">Rank B</option>
              <option value="C">Rank C</option>
              <option value="D">Rank D</option>
              <option value="E">Rank E</option>
            </Form.Select>
          </Col>
  
        <Col sm={4}>
            <Form.Select
              name="status"
              className="mb-3"
              value={sstatus}
              onChange={(e)=> setsstatus(e.target.value)}
              required>
              <option value="">Select Status</option>
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="Missing">Missing</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <div  className="d-grid gap-2 col-sm-4 mx-auto mt-3 mb-6 ">
        <button type="submit" className="btn btn-primary btn-sm">
            Update <BiRefresh size={20} />
          </button>
          </div>
        </Row>
      </Form>
      <br></br>
      {error}


    </div>
  );
}
