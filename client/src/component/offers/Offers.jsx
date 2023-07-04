import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Offers.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMenu } from '../../action/menuAction';
import Loading from '../ESL/Loading';
import Error from '../ESL/Error';
import OfferMain from '../Offermain/OfferMain';


function Offers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenu());
    console.log('getmenu dispatch');
  }, []);

  const foodState = useSelector((state) => state.getAllMenuReducer);
  const { foodItem, loading, error } = foodState;

  return (
    <div className="container-style">
      <Row className='head'>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : (
          foodItem.map((foodItem) => {
            if (!foodItem.offer) {
              return null; // Skip rendering if the offer is not available
            }

            return (
              <Col xs={12} sm={6} md={4} lg={3} className='d-flex justify-content-center' key={foodItem._id}>
                <div>
                  <OfferMain foodItem={foodItem} />
                </div>
              </Col>
            );
          })
        )}
      </Row>
    </div>
  );
}

export default Offers;
