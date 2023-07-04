import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from '../../action/userAction';
import Loading from '../ESL/Loading';
import Error from '../ESL/Error';
import Success from '../ESL/Success';

function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const dispatch = useDispatch();

  const registerReducer = useSelector(state => state.registerUserReducer)


  const { error, loading, success } = registerReducer

  function handleRegister() {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password
      };
      console.log(user);
      setPasswordMatch(true);
      dispatch(registerUser(user));
      alert('login successfull')
      window.location.href = '/';

    } else {
      setPasswordMatch(false);
    }
  }

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100">
      <Card className='text-black' style={{ borderRadius: '25px' }}>
        <Card.Body>
          <Row>
            <Col md='10' lg='6' className='d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up </p>
              {loading && <Loading />}
              {error && <Error Error="Email already Register" />}
              {success && <Success success='User Register Successfully' />}
              <div className="d-flex flex-row align-items-center w-50 mb-4">
                <Form.Text className="me-3">
                  <i className="fas fa-user fa-lg"></i>
                </Form.Text>
                <Form.Control required type='text' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Your Name' className='w-100' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4  w-50">
                <Form.Text className="me-3">
                  <i className="fas fa-envelope fa-lg"></i>
                </Form.Text>
                <Form.Control required type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Your Email' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4  w-50">
                <Form.Text className="me-3">
                  <i className="fas fa-lock fa-lg"></i>
                </Form.Text>
                <Form.Control required value={password} onChange={(e) => { setPassword(e.target.value) }} type='password' placeholder='Password' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4  w-50">
                <Form.Text className="me-3">
                  <i className="fas fa-key fa-lg"></i>
                </Form.Text>
                <Form.Control type='cpassword' required value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} placeholder='Confirm password' />
              </div>
              {!passwordMatch && (
                <p className="text-danger">Password does not match</p>
              )}

              <Button onClick={handleRegister} className='mb-4' size='lg'>Register</Button>

              <a style={{ color: 'black' }} href="/">Click here to Login</a>

            </Col>

            <Col md='10' lg='6' className='d-flex align-items-center'>
              <Card.Img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid="true" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Register;
