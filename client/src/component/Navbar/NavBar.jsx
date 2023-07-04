import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Image, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faUser, faShoppingCart, faHouse, faPercent, faMagnifyingGlass, faCartShopping, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/Image/logo.png';
import './NavBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../action/userAction';


function NavBar() {
  const [isNavbarActive, setIsNavbarActive] = useState(true);
  // cartState from store

  const cartState = useSelector(state => state.CartReducer)
  const { cartItems } = cartState

  // login Reducer

  const userState = useSelector(state => state.loginUserReducer)
  const { currentUser } = userState

  const dispach = useDispatch()


  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth || document.documentElement.clientWidth;
      setIsNavbarActive(screenWidth > 767);

    };

    handleResize(); // Check initial screen size

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isNavbarActive ? (
        <div>
          <Navbar bg="light" expand="md" className="shadow-sm fixed-top ">
            <Container>
              <Nav.Link href="/home">
                <Image src={logo} alt="Logo" className="logo-image" />
              </Nav.Link>              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto centered-nav nav-text">
                  <Nav.Link href="/search">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faSearch} />
                    Search
                  </Nav.Link>
                  <Nav.Link href="/offers">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faGift} />
                    Offers
                  </Nav.Link>
                  <Nav.Link href="/cart">
                    <FontAwesomeIcon className="icon cart" icon={faShoppingCart} />
                    Cart <span className='cartno'>{cartItems.length}</span>
                  </Nav.Link>
                </Nav>
                <Nav className="nav-text">

                  {currentUser ? (<Dropdown className='drop'>
                    <Dropdown.Toggle id="dropdown-basic">
                    <img className='logo' src="https://cdn-icons-png.flaticon.com/128/10589/10589264.png" alt="" />  {currentUser.name}        </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="/cart">Oders</Dropdown.Item>
                      <Dropdown.Item onClick={()=>(dispach(logoutUser()))}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>) : (
                    <Nav.Link href="/">
                      {' '}
                      <FontAwesomeIcon className="icon" icon={faUser} />
                      Sign In
                   
                    </Nav.Link>
                  )}

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
   


        </div>
      ) : null}


      {isNavbarActive ? null : (
        <div className="second-nav">
          <Navbar bg="light" className="shadow-sm fixed-top ">
            <Container>
              <Navbar.Brand href="/home">
                <Image src={logo} alt="Logo" className="logo-image" />
              </Navbar.Brand>
              <Nav.Link href="/offers">
                <FontAwesomeIcon className="icon" icon={faPercent} />
                Offers
              </Nav.Link>
            </Container>
          </Navbar>

          <div className="second-icons">

            <Nav.Link href="/home">
              <FontAwesomeIcon className="icon" icon={faHouse} />
            </Nav.Link>
            <Nav.Link href="/search">
              <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
            </Nav.Link>
            <Nav.Link href="/cart">
              
              <FontAwesomeIcon className="icon" icon={faCartShopping} />
              <span className='scartno'>{cartItems.length}</span>

            </Nav.Link>

{currentUser?(<FontAwesomeIcon onClick={()=>(dispach(logoutUser()))} icon={faRightFromBracket} /> ):( <Nav.Link href="/">

<FontAwesomeIcon className="icon" icon={faUser} />
</Nav.Link>
)}
           
          </div>

        </div>

      )}




    </div>
  );
}

export default NavBar;
