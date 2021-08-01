import React from 'react';
import {useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import {PostContext} from '../../store/PostContext'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './View.css';
function View() {
  const [userDetails,setUserDetails] = useState()
  const {postDetails}=useContext(PostContext)
  const {firebase} =useContext(FirebaseContext)
  useEffect(()=>{
    const {userId} = postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc =>{setUserDetails(doc.data())})
    })
   },[])
  return(
    <Container> 
     <Row> 
     <Col>
    <div className="viewParentDiv">
     
    <Row> 
      <Col xs='12' md="5" lg="7">
      <div className="imageShowDiv">
        <img className="realimg"
          src={postDetails.url}
          alt=""
        />
      </div>
      </Col>
      <Col></Col>
      <Col lg='4'>
      <div className="rightSection">
          <Row>
         <Col xs="12">
        <div className="productDetails">
          <p>&#x20B9;
            {postDetails.price} </p>
          <span>{postDetails.price}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.name}</span>
        </div>
        </Col>
        </Row>
          <Row>
        <Col sm="12">
        {userDetails &&<div className="contactDetails">
          <p>Seller Details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
        </Col>
        </Row>
      </div>
      </Col>

      </Row>
      
    </div>
    </Col>
    </Row>
     </Container>
  );
}
export default View; 
