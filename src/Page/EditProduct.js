
import React, { useState, useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
const EditProduct = () => {
    const { id } = useParams();
    console.log(id);
    const [products, setProducts] = useState([])
    const {
        register,
        handleSubmit,
    } = useForm();
    useEffect(() => {
        const url = `http://localhost:3000/products/${id}`;
        fetch(url, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])
    const onSubmit = (product) => {
        console.log(product);
        const url = `http://localhost:3000/products/${id}`;
        fetch(url, {
            method: 'PUT', // Method itself
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(response => response.json())
            .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
            .catch(err => console.log(err))
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

export default EditProduct
