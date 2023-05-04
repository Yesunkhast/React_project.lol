import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
import './App.css';
import { Container, Form, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';


function App() {

  const [name, setName] = useState("");
  const [arr, setArr] = useState([]);

  // const testFun = ( a )=>{

  // }
  return (
  <div>
        <Container className='m-4  align-items-center justify-content-center'>
      {/* <h1>{arr.map((value, index) => <p key={index}>
            {value} 
         </p>)}</h1> */}
        <InputGroup hasValidation>
      <InputGroup.Text>#</InputGroup.Text>
      <Form.Control type="text" required isInvalid 
      onChange={(value) =>{
        setName(value.target.value)
      } }
      // value={name}
      />
      {/* <Form.Control.Feedback type="invalid">
        Test name.
      </Form.Control.Feedback> */}
    </InputGroup>

    <Button className='mx-auto m-4' onClick={() => {
      setArr([ ...arr, name]);
      setName("")
    } }>Add insert</Button>


<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
        
        </tr>
      </thead>
      <tbody>

        {
          arr.map((e, i) => {
          return( <tr>
             <td>{i + 1 }</td>
             <td>{e}</td>
            </tr>)
          }
          )
        }
       
   
      </tbody>
    </Table>
    </Container>

  </div>
  );
}

export default App;
