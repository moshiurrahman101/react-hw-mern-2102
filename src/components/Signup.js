import React, { useState } from 'react';
import {Form, Button, Container, Row, Col, Spinner, Alert} from 'react-bootstrap';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fromError, setFromError] = useState({});

    const onChangeHandelerEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangeHandelerPassword = (e) => {
        setPassword(e.target.value);
    }

    const onClickHandeler = (e)=>{
        e.preventDefault();
        
        if(email == ''){
            setFromError({
                errorType:'danger',
                data:'Email must be given!'
            });
            if (password == '') {
                setFromError({
                    errorType:'danger',
                    data:'Email & Password must be given!'
                });
            }
        } 
        else if(password == ''){
            setFromError({
                errorType:'danger',
                data:'Password must be given!'
            });
        }
        else if(password.length < 8){
            setFromError({
                errorType:'danger',
                data:'Password must be minimum 8 charecter!'
            });
        }
        else{
            setFromError({
                errorType:'success',
                data:'You account succecfully created!'
            })
            setEmail('');
            setPassword('');
        }
    }
    
  return(
    <Container>
                <Form>
                    <h1>Signup From </h1>
                    {
                        fromError ?
                        <Alert variant={fromError.errorType}>{fromError.data}</Alert>
                        : ""
                    }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={onChangeHandelerEmail}  value={email}/>
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={onChangeHandelerPassword} value={password}/>
                    </Form.Group>
                    <Button onClick={onClickHandeler} variant="primary" type="submit">
                    Submit 
                    {
                    fromError.errorType == 'danger' ? 
                    <Spinner animation="border" variant="light" size="sm"/>
                    :''
                    }
                    </Button>
                </Form>
    </Container>
  );
}

export default Signup;
