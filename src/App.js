// import logo from './logo.svg';
import './App.css';
import { Container, Form ,  Table, Col , Row , CloseButton, Button, Dropdown, DropdownButton} from 'react-bootstrap';
import { useState } from 'react';
import { getByText } from '@testing-library/react';

// import CloseButton from 'react-bootstrap/CloseButton';


function App() {

  const [name, setName] = useState("");
  const [school, setShcool] = useState("");
  const [huis, setHuis] = useState("");
  const [code, setCode] = useState("");
  const [number, setNumber] = useState("");
  const [mail, setMail] = useState("");
  const [arr, setArr] = useState([{
    lastName: "Есөнхаст",
    school: "МХТС",
    huis:  "Эрэгтэй",
    code: "B222270047",
    number: "99999999",
    mail: "Email@gmail.com"
  },]);

  // ustgah func
  const  deleteItem =( id , number) => {
    setArr(arr.filter( item => item.code !== id ));
  };

  // emial shalgah
  const checkAt = (e) => {
      const arr = Array.from(e);
      if(arr.indexOf("@") !== -1)
      setMail(arr);
      else alert("Email биш байна!!!");
  };

  // dugar num eseh
  const checkNumber = (number) => {
    const num = parseInt(number);
    if(Number.isInteger(num))
    setNumber(num);
    else alert("Дугаар биш байна!!!");
  };

  return (
    <div>
    <Form>
    <Row>
      <Col xs={7}>
        <Form.Control placeholder="Овог Нэр" className='name'
        onChange={value => {
          setName(value.target.value);
        }}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <Form.Control placeholder="Email" className='email'
        onChange={value => {
          checkAt(value.target.value)
        }}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <Form.Control placeholder="Сургууль" className='school'  
        onChange={value => {
          setShcool(value.target.value);
        }}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <Form.Control placeholder="Код" className='code'  
        onChange={value => {
          setCode(value.target.value);
        }}
        />
      </Col>
      </Row>

      <Row>
      <Col>
        <Form.Control placeholder="Дугаар" className='number'  
        onChange={value => {
          checkNumber(value.target.value);
        }}
        />
      </Col>
    </Row>


    <Form.Select aria-label="Default select example" onChange={ (val) => {setHuis(val.target.value)}}>
      <option value={"Эрэгтэй"}>Эрэгтэй</option>
      <option value={"Эмэгтэй"}>Эмэгтэй</option>
    </Form.Select>

  </Form>

  <Button className='mx-auto m-4' onClick={() => {
      setArr([ ...arr, {
        lastName: name,
        school: school,
        huis: huis,
        code: code,
        number: number,
        mail: mail,
      }]);
    } }>Add insert</Button>

<Table striped bordered hover>
<thead>
  <tr>
    <th>#</th>
    <th>Нэр</th>
    <th>Сургууль</th>
    <th>Хүйс</th>
    <th>Код</th>
    <th>Дугаар</th>
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
        <td>{e.number}</td>
        <td>{e.mail}</td>
        <CloseButton aria-label="Hide" onClick={() => deleteItem(e.code, e.number)}/>
      </tr>
      )
    })
  }
</tbody>
</Table>
</div>
)
};

export default App;
 