import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate}  from 'react-router-dom';
import { auth } from '../../firebase/firebaseconfg';
import { logout } from '../../features/cars/UseSlice';
function Header() {
  const [bstatus, setBstatus] = useState(false)
const dispatch = useDispatch()
const navigate=useNavigate()
  const logoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout())
        navigate('/login')
      })
      .catch((error) => alert(error.message))
  }
  return (
    <Container>
 <Link to="/" >  <img src="/images/logo.svg" alt="" /></Link>
 


      <Menu>
      <li> <Link to="/">Model 3</Link> </li>
          <li> <Link to="/">Model S</Link> </li>
          <li> <Link to="/">Model X</Link> </li>
          <li> <Link to="/">Model y</Link> </li>
          <li> <Link to="/">Solar Panel</Link> </li>
          <li> <Link to="/">Solar Roof</Link> </li>
{/* <a href="#">Solar Panel</a> 
<a href="#">Splar Roof</a>  */}
      </Menu>

      <RightMenu>
<a href="">Shop</a>
<Link to="/Login">Account</Link>
  <CustomMenu onClick={() => {setBstatus(true)}}/>
      </RightMenu>
      <BurgerNav show={bstatus}>
        <Closewrapper>
        <CustomClose onClick={()=>{setBstatus(false)}}/>
        </Closewrapper>
          <li> <Link to="/">Model 3</Link> </li>
          <li> <Link to="/">Model S</Link> </li>
          <li> <Link to="/">Model X</Link> </li>
          <li> <Link to="/">Model y</Link> </li>
          <li> <Link to="/">Solar Panel</Link> </li>
          <li> <Link to="/">Solar Roof</Link> </li>
        <li> <Link to="/"> Existing Inventory</Link> </li>
        <li> <Link to="/"> Used Inventory</Link> </li>
        <li> <Link to="/"> Trade-in</Link> </li>
        <li>  <Link to="/">Cybertruck</Link> </li>
        <li>  <Link to="/">Roadster</Link> </li>
        <li> <Link to="" onClick={logoutOfApp} >LogOut</Link> </li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
z-index: 1;
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0 ;
left: 0;
right: 0;
`
const Menu = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
   list-style: none;
   gap: 20px;
@media (max-width: 760px) {
  display: none;
}
    `


const RightMenu = styled.div`
display: flex;
align-items: center;

a{
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 13px;
}


`

const CustomMenu = styled(MenuIcon)`
cursor: pointer;

`

const BurgerNav =styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: white;
width: 300px;
z-index: 16;
list-style: none;
padding:20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)' :' translateX(100%)'};
transition: transform 0.2s ease-in;
li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0,0,0, .2);
  a
{
  font-weight: 600;

}  
}

`
const CustomClose = styled(CloseIcon)`
cursor: pointer;

`
const Closewrapper = styled.div`
display: flex;
justify-content: flex-end;

`