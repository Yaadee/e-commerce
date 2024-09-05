import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products';
import { Link } from 'react-router-dom';
import {Row, Col, ListGroup,Card} from 'react-bootstrap';
const ProductScreen = () => {
  const { id : productId } = useParams();
  const product = products.find((p) => p._id === productId);
  

  return (
    <>
    </>
  )
}

export default ProductScreen
