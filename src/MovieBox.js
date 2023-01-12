import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import React from 'react'

// images link from moviedb => getting started .. than Images.
const API_IMG="https://image.tmdb.org/t/p/w500/";

// Responses from MovieDB, as follows.
const MovieBox =({title, poster_path, vote_average, release_date, overview}) => {
    
    const [show,setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
    return (
        <div className='card text-center bg-secondary mb-2'>
            <div className='card-body'>
                <img className='card-img-top' src={API_IMG+poster_path} />
                <div className='card-body'>
                    <button type='button' className='btn btn-warning' onClick={handleShow}>View Details</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className='card-img-top' style={{width:'14rem'}} src={API_IMG+poster_path}></img>
                            <h3>{title}</h3>
                            <h4>ImDb: {vote_average}</h4>
                            <h5> Release Date: {release_date}</h5>
                            <br></br>
                            <h6>Overview</h6>
                            <p>{overview}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>Close</Button>
                        </Modal.Footer>

                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default MovieBox;
