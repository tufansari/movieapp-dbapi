import React,{useEffect, useState} from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


// MOVIE-DB api url and search...
const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=8431fa6e9b80058b33e1da966ad11a7e";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=8431fa6e9b80058b33e1da966ad11a7e&query";

function App() {
  
  const[movies, setMovies]=useState([]);
  const [search, setSearch]=useState("");
  
  useEffect(()=>{
  fetch(API_URL)
  .then((res)=> res.json())
  .then(data=>{
    console.log(data);
    setMovies(data.results);
  }) 
  },[])

  const searchMovie = async(e) => {
    e.preventDefault();
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=8431fa6e9b80058b33e1da966ad11a7e&query=${search}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);

    }
    catch(e){
      console.log(e);

    }
    
  }
  const changeHandler=(e)=>{
    setSearch(e.target.value);
  }
  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">Trending</Navbar.Brand>
        <Navbar.Brand href="https://react-responsive-portfolio.vercel.app/">Contact Me</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll'></Navbar.Toggle>
          <Navbar.Collapse id='navbarScroll'>
            <Nav 
            className="me-auto my-2 my-lg-3" 
            style={{maxHeight:"100px"}} 
            navbarScroll>
            </Nav>
            <Form className='d-flex' onSubmit={searchMovie}>
              <FormControl 
              type='search' 
              placeholder='Movie Search' 
              className='me-2' 
              aria-label='search' 
              name="search"
              value={search} onChange={changeHandler}>
              </FormControl>
              <Button variant='success' type='submit'> Search</Button>
            </Form>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      {movies.length > 0 ?(
        <div className='container'>
        <div className='grid'>
        {movies.map((movieDB)=>
        <MovieBox key={movieDB.id} {...movieDB}/>)}
        </div>
    </div>
      ):(
        <h2>Sorry, No Movies Found. </h2>
      )}
    </div>
        
    </>

  );
}

export default App;
