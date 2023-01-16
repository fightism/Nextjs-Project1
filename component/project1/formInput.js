import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { MdAddCircleOutline } from "react-icons/md";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AgeError from "./AgeError";
import { ADD_MEMBER } from "../../redux/crudReducer";
import { useDispatch } from "react-redux";
import { generateDiceBearBottts } from "./RandomPic";
import Image from "next/image";

export default function FormInput() {
  const dispatch = useDispatch();
  const randomAva =    <Image

  src={generateDiceBearBottts(Math.random())}
  alt="Hello"
  width={100}
  height={100}
/>

  function submitData(event) {
    event.preventDefault();
    const avar = randomAva
    const fname = event.target.firstName.value;
    const lname = event.target.lastName.value;
    const fullname = fname + " " + lname;
    const job = event.target.job.value;
    const rank = event.target.rank.value;
    const totalAge = event.target.age.value;
    const status = event.target.status.value;



    const data = {
      key: uuidv4(),
      avar,
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
    event.target.age.value = "";
    event.target.job.value = "";
    event.target.rank.value = "";
    event.target.status.value = "";
    setStartDate("")

    if (totalAge > 13) {
      setShowError(false)
      return dispatch(ADD_MEMBER(data));
    }
    else{
      setShowError(true)
    }


  }
  const[showError,setShowError]= useState(false)
  const [startDate, setStartDate] = useState(new Date());
  // const [age, setAge] = useState(25);


  let error = null

  if(showError){
 error = <AgeError/>}

  return (
    <div>
      <Form onSubmit={submitData}>
        <Row >
          <Col md={4}  >
            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="mb-3 color-green"
            >
              <Form.Control type="text" name="firstName" required />
            </FloatingLabel>
          </Col>
          <Col md={4} >
            <FloatingLabel
              controlId="floatingInput"
              label="Last Name"
              className="mb-3"
            >
              <Form.Control type="text" name="lastName" required />
            </FloatingLabel>
          </Col>

          <Col md={4} >
            <FloatingLabel
              controlId="floatingInput"
              label="Age"
              className="mb-3"
            >
              <Form.Control type="number" name="age" required />
            </FloatingLabel>
          </Col>
          

          
        </Row>
        <Row>
          <Col md={4}>
            <Form.Select
              aria-label="Default select example"
              name="job"
              className="mb-3"
              required
            >
              <option value="">Select Job Classes</option>
              <option value="Novice">Novice</option>
              <option value="Knight">Knight</option>
              <option value="Hunter">Hunter</option>
              <option value="Magician">Magician</option>
              <option value="Assasin">Assasin</option>
              <option value="Priest">Priest</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Select
              aria-label="Default select example"
              name="rank"
              className="mb-3"
              required
            >
              <option value="">Select Rank</option>
              <option value="S">Rank S</option>
              <option value="A">Rank A</option>
              <option value="B">Rank B</option>
              <option value="C">Rank C</option>
              <option value="D">Rank D</option>
              <option value="E">Rank E</option>
            </Form.Select>
          </Col>
       
  

      
      
          <Col md={4}>
            <Form.Select
              name="status"
              className="mb-3"
              required>
              <option value="">Select Status</option>
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="Missing">Missing</option>
            </Form.Select>
          </Col></Row>

        <Row>
          <div className="d-grid gap-2 col-sm-4 mx-auto mt-3 mb-6 ">
            <Button type="submit" className="btn btn-success ">
              Add <MdAddCircleOutline size={15} />
            </Button>
          </div>
        </Row>
      </Form>
      <br></br>
      {error}
    </div>
  );
}
