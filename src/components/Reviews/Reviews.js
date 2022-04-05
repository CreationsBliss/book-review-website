import React from 'react';
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css'

const Reviews = () => {

  const [reviews, setReviews] = useReviews();

  return (
    <div>
      <div className="reviews-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className='customer-say-text'>What Our Customers Say!</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="single-review-container">
                {
                  reviews.map(review => <SingleReview key={review.id} review={review}></SingleReview>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;