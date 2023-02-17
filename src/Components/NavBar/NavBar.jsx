import React, { useEffect, useState } from "react";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getApiUpcomming } from "../../data";
import { getMovieDetailTop } from "../../data";
import { getApiRated } from "../../data";
import "./NavBar.scss";
import lupa from "../../img/lupa.png";
import logo from '../../img/logo-movies.png'

const NavBar = () => {
  const [data, setData] = useState([]);
  const [dataRated, setDataRated] = useState([]);
  const [dataTop, setDataTop] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);


  const { isAuthenticated, user } = useAuth0();


  
     
    
  const newArray = data.concat(dataRated, dataTop);
  const filterMovies = newArray.filter((movie) =>
    movie.title.toLowerCase().includes(input.toLocaleLowerCase())
  );

 

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      getApiRated(setData);
      getApiUpcomming(setDataRated);
      getMovieDetailTop(setDataTop);
      setLoading(false);
    }, 3000);
  }, []);

  const imgMovie = (url) => {
    let img;
    return (img = `https://image.tmdb.org/t/p/original${url}`);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Navbar collapseOnSelect expand="lg"    >
      <Container>
        <Navbar.Brand href="/"> <img src={logo} style={{width:'50px'}} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex" style={{justifyContent:'center',alignItems:'center'}}>
          <div>
                    <Nav.Link >
              <Button
                style={{ backgroundColor: "#005792", height: "35px" }}
                onClick={() => setLgShow(true)}
              >
                Search Movie <img src={lupa} alt="" style={{ width: "20px" }} />
              </Button>
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                className="text-center"
              >
                <Modal.Header closeButton></Modal.Header>
                <div>
                  <form onSubmit={handleSumbit}>
                    <div  style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                      <div>
                                        <input type="text" placeholder="add movie" className=" text-center" onChange={handleChange} value={input} />
                      </div>
                      <div style={{margin:'10px'}} >
                                          <input className="btn btn-dark" type="submit" />

                    </div>
                    </div>
                   
                  </form>
                </div>
                <Modal.Body>
                  {input.length === 0  ?
                      <span>no hay peliculas</span>  :
                     filterMovies.map((item) => (
                        <Link to={`/detalle/${item.id}`}>
                          <img
                            style={{ width: "100px",margin:'10px' }}
                            src={imgMovie(item.poster_path)}
                          ></img>
                        </Link>
                      ))}
                </Modal.Body>
              </Modal>
            </Nav.Link>
                </div>
        
            <div>
              <Nav.Link>
                {isAuthenticated? <LogoutButton/>:
                
                <LoginButton/>
                }
            </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
