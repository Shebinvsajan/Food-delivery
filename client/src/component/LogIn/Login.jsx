import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../LogIn/Login.css"
import logo from '../../assets/Image/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../action/userAction';
import Loading from '../ESL/Loading';
import Error from '../ESL/Error';




function Login() {

  const dispatch = useDispatch();
  const loginReducer = useSelector(state => state.loginUserReducer)
  const { error, loading } = loginReducer


  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
    window.location.href = '/home';
    }

    return () => {
      second
    }
  }, [])


  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("")

  function login() {

    const user = { email, password }
    dispatch(loginUser(user))
   

  }




  return (
    <div className=' nav-margin'>
     
      <Container className="my-5 gradient-form">
      {loading && <Loading />}
              {error && <Error Error="INVALID DATA" />}
        <Row>
          <Col col="6" className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img
                  src={logo}
                  style={{ width: '185px' }}
                  alt="logo"
                />
              </div>
              <Form.Group className="mb-4" controlId="form1">

           
                <Form.Label  >Email address</Form.Label>
                <Form.Control value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="form2">
                <Form.Label  >Password</Form.Label>
                <Form.Control value={password} onChange={(e) => { setpassword(e.target.value) }} type="password" />
              </Form.Group>
              <div className="text-center pt-1 mb-5 pb-1">
                <Button onClick={login} className="mb-4 w-100 gradient-custom-2">Sign in</Button>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                  <Button href='/register' variant="outline-danger" className="mx-2">
                    Sign Up
                  </Button>
                
              </div>
            </div>
          </Col>
          <Col col="6" className="mb-5">
            <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a company</h4>
                <p class="small mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
