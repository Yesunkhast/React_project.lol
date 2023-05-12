import logo from './logo.svg';
import CloseButton from 'react-bootstrap/CloseButton';
// import Button from 'react-bootstrap/Button';
import './App.css';
import { Container, Form, InputGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Table, Col, Row } from 'react-bootstrap';
// import CloseButton from 'react-bootstrap/CloseButton';

function App() {

  const [name, setName] = useState("");
  const [school, setShcool] = useState("");
  const [huis, setHuis] = useState("");
  const [code, setCode] = useState("");
  const [mail, setMail] = useState("");
  const [arr, setArr] = useState([{
    lastName: "Есөнхаст",
    school: "МХТС",
    huis:  "Эр",
    code: "B222270047",
    mail: "Email@mail.com"
  },]);

  const  deleteItem =(id ) =>{
    setArr(arr.filter(item => item.code !== id));

  }

  return (
  <div>

        <Container className='m-4  align-items-center justify-content-center'>

      {/* <h5>{arr.map((value, index) => <p key={index}>
            {value.school} {value.lastName} {value.huis} 
         </p>)}</h5> */}

         <Form noValidate className='p-4'>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Нэр</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Нэр"
            onChange={(value) =>{
              // if(value.target.value == "")
              // setName("value.target.value")
              // else
              setName(value.target.value)
              // setName("")
            } }
          />
        </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Сургууль</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Сургууль"
            onChange={(value) =>{
            setShcool(value.target.value)
            } }
          />
          {/* <CloseButton onClick={setArr("")}/> */}
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Оюутны код</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Код"
            onChange={(value) =>{
            setCode(value.target.value)
            } }
          />
          {/* <CloseButton onClick={setArr("")}/> */}
        </Form.Group>


      <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Хүйс</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Хүйс"
            onChange={(value) =>{
            setHuis(value.target.value)
            } }
          />
        </Form.Group>


      <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Имейл</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Имейл"
            onChange={(value) =>{
            setMail(value.target.value)
            } }
          />
        </Form.Group>

        {/* <FormComponent value ="name"  /> */}

      <Button className='mx-auto m-4' onClick={() => {
      setArr([ ...arr, {
        lastName: name,
        school: school,
        huis:  huis,
        code: code,
        mail: mail,
      }]);
      // setArr("")
    } }>Add insert</Button>
    {/* <Button className='d-block' onClick={() => {setName("")}}>Clear</Button> */}
    </Form>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Нэр</th>
          <th>Сургууль</th>
          <th>Хүйс</th>
          <th>Код</th>
          <th>Имейл</th>
        </tr>
      </thead>
      <tbody>
        {
          arr.map((e , i) => {
            return(
              <tr>
              <td>{i+1}</td>
              <td>{e.lastName}</td>
              <td>{e.school}</td>
              <td>{e.huis}</td>
              <td>{e.code}</td>
              <td>{e.mail}</td>
              <CloseButton aria-label="Hide" onClick={() => deleteItem(e.code)}/>
            </tr>
            )
          })
        }
      </tbody>
    </Table>
    </Container>

  </div>
  );
}

export default App;
 