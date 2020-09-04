import React, { useState } from 'react';
import MovieCard from './MovieCard';
import {Form,Col,Row} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
const MovieList = (props) => {
    const [search,setSearch]=useState('')
    const[star,setStar]=useState(0)
    const hendelSearch=(e)=>{
        e.preventDefault()
        setSearch(e.target.value)
    }
    const ratingChanged = (newRating) => {
        setStar(newRating)
      };
    return ( <div  >
       <br></br>
        <Row style={{paddingLeft:"6cm"}}>
        <Col > 
       <Form.Control size="lg" type="text" placeholder="Search" onInput={hendelSearch}  />
        </Col>
        <Col>
        <ReactStars
        onChange={ratingChanged}
          count={5}
          size={24}
          color="white"
          activeColor="#ffd700"/>
        </Col>
        </Row>
        <br></br>
        <br></br>
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
        {props.movie.filter(el=>el.title.toUpperCase().includes(search.toUpperCase())).filter(el=>el.rate>=star).map(el=><MovieCard titre={el.title} image={el.image} rate={el.rate}></MovieCard>)}
        </div> 
        </div> )
}
 
export default MovieList;