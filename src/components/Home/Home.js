import React from 'react';
import { Link } from 'react-router-dom';
import mainBook from '../../Assets/main-book.png';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import "./Home.css"

const Home = () => {

  const [reviews, setReviews] = useReviews();

  return (
    <div>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="book-detail">
              <h3 className='deal-text'>Deal Of The Day</h3>
              <h1 className='off-text'>Upto 50% Off</h1>
              <p className='book-brief'>As research in music therapy evolves, textbooks that offer an overview of the field and guidance in planning and conducting research are of increasing importance. In a sector that is challenged by economic stringency, there is a growing need for music therapists to show “value for money,” by evaluating, and being able to defend, the impact of what they do. Commissioners demand evidence-based practice, which opens up the opportunity for quality research and development in this area.</p>
              <Link to="/" className='shop-now-btn'> Shop Now </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-box">
              <img src={mainBook} alt="" className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>

      <div className="review-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className='customer-review-text'>Customer Reviews ({reviews.slice(0,3).length})</h3>
              <div className="review-box">
                {
                  reviews.slice(0,3).map(review => <Review review={review} key={review.id}></Review>)
                }
              </div>
              <div className='text-center'>
                <Link to="/reviews" className="see-all-riviews-btn"> See All Reviews </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;