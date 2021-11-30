import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { set } from 'react-hook-form';
import Products from './Products';
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        await fetch('http://localhost:3000/products', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => response.json())
          .then(data => {
            setProducts(data);
          })
      } catch (err) {

      }
    }
    getProducts();

  }, []);
  console.log(products);
  return (
    <div>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {products && (products.map((item, index = 1) => (
              <tr>
                <td>{item.title}</td>
                <td><img src={item.img} width="60px"/></td>
                <td>{item.price}</td>
                <td>{item.desc}</td>
                <td>fafa</td>
              </tr>
            )))}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default ProductsPage
