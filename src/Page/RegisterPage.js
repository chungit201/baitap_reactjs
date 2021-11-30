import React from 'react'
import { useForm } from 'react-hook-form';
import { Form,Button, Container } from 'react-bootstrap';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
const RegisterPage = () => {

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (user) =>{
    const url = "http://localhost:3000/signup";
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json())
      .then(data => {
        if (data) {
          const {user} = data;
          const {tokens} = data
          alert("Đăng kí thành công")
        }

      })
  }
  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" {...register('email')} placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" {...register('password')} placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
      
        </Form>
      </Container>
    </div>
  )
}

export default RegisterPage
