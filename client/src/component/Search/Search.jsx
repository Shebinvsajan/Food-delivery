import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Search.css';
import { useDispatch, useSelector } from 'react-redux';
import CardBox from '../Cardbox/CardBox';
import { getMenu } from '../../action/menuAction';
import Loading from '../ESL/Loading';
import Error from '../ESL/Error';

function Search() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const foodState = useSelector((state) => state.getAllMenuReducer);
  const { foodItem, loading, error } = foodState;

  useEffect(() => {
    dispatch(getMenu());
  }, []);

  const filterFoodItems = (text) => {
    return foodItem.filter((item) => {
      return item.foodname.toLowerCase().includes(text.toLowerCase());
    });
  };

  const filteredFoodItems = filterFoodItems(searchText);

  useEffect(() => {
    console.log(foodItem); // Check if the foodItem data is available
  }, [foodItem]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <div className="container-style">
      <SearchBar handleSearch={handleSearch} />
      <Row className="head">
        {filteredFoodItems.map((foodItem) => (
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center" key={foodItem._id}>
            <div>
              <CardBox foodItem={foodItem} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

function SearchBar({ handleSearch }) {
  const searchHandle = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="nav-margin">
      <Container className="mt-5">
        <Row>
          <Col xs={8} sm={8} md={8} lg={8}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={searchHandle}
                
              />
            </Form>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2}>
            <Button  onClick={() => handleSearch(searchText)}>Search</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
