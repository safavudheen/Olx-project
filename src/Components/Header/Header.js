import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import {AuthContext, FirebaseContext} from '../../store/Context'
import {useHistory} from "react-router-dom"
import Login from '../Login/Login';
import { Container ,Row,Col } from 'react-bootstrap';
function Header() {
  const history =useHistory()
 

  const{user} = useContext(AuthContext)
  const{firebase}=useContext(FirebaseContext)
  return (
   
    <div className="headerParentDiv">
       <Container>
      <Row>
        <Col>
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
        
          <Row>
          <Col sm='12'>
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          </Col>
          </Row>
            
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
         
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span >{user ? `Welcome ${user.displayName}` :
          <p onClick={()=>{history.push("/login")}}>Login</p> }</span>
          <br />
        </div>
         {user && <span  onClick={()=>{
           firebase.auth().signOut();
          history.push('./login')}} 
           >Logout</span>}

        <div className="sellMenu" onClick={()=>{history.push("/create")}}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
      </Col>
      </Row>
    </Container>
    </div>
    
  );
}

export default Header;
