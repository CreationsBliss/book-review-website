import React from 'react';
import { Card } from 'react-bootstrap';
import './SingleReview.css'

const SingleReview = (props) => {

  const {name, picture, comment, rating} = props.review;

  return (
    <div className='single-card'>
      <Card>
        <Card.Body className='single-card-details'>
          <img src={picture} alt="customer pic" className='client-pic' />
          <Card.Subtitle className="mb-2 client-name">{name}</Card.Subtitle>
          <Card.Text className='client-comment'>
            {comment}
          </Card.Text>
          <Card.Text className='client-rating-text'> Rating: <span className='client-rating'>  {rating} </span></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleReview;