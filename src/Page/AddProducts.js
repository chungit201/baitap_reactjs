import React, { useState } from 'react'
import { Container, Form ,Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
const AddProducts = () => {
  const [products,setProducts] = useState([])
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = async (product) => {
    const url = "http://localhost:3000/products";
    fetch(url, {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        setProducts([...products, data]);
      })
  }
  return (
    <div>
      <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" {...register('title')} placeholder="Enter title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" {...register('img')} placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" {...register('price')} placeholder="Enter price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" {...register('desc')} placeholder="Enter desc" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
    </div>
  )
}

export default AddProducts
