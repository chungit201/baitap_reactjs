import React from 'react';
import { useForm } from 'react-hook-form';
import { Form,Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const LoginPage = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (user) => {
    const url = "http://localhost:3000/signin";
    fetch(url, {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json())
      .then(data => {
        if (data) {
          console.log(data);
          const {user} = data;
          const {accessToken} = data
          localStorage.setItem('user', JSON.stringify(user));
          sessionStorage.setItem('token', JSON.stringify(accessToken));
          window.location.href = '/admin';
        }

      })
  }
  return (
    <div>
      <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" {...register('email')} placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" {...register('password')} placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
          <Form.Text className="text-muted">
            <Link to="/register">Signup</Link>
          </Form.Text>
        </Form.Group>
     
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
    </div>
  )
}

export default LoginPage
