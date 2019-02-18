import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'


 const UL = styled.ul `
 body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #dfe6e9;
}

ul {
  margin: 0;
  padding: 1em;
  font-size: 1.2em;
  align-items:center;
  
}
ul li {
  list-style: none;
  justify-content: center;
  align-items: center;
  align-content: center;
}
ul li a {
  padding: 2em;
  color: white;
  text-decoration: none;
  -webkit-transition: background-color .5s;
  -o-transition: background-color .5s;
  transition: background-color .5s, color .5s;
}
.lis:hover {
  background-color: #fff;
  color: #000;
}
ul li a .contact {
  border: 1px solid white;
}

.nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: linear-gradient(to bottom right, #141e30, #243b55);
  color: white;
}
.nav .slam-left {
  margin-right: auto;
}

@media all and (max-width: 500px) {
  ul {
    padding: 0;
  }
  ul li {
    width: 100%;
  }
  .items{
    display: block;
    text-align: center;
    align-items: center;
    align-content: center;
  }
  li{
    align-items: center;
    align-content: center;
  }

  .nav {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .nav .slam-left {
    margin-right: 0;
  }
}
`

export class Navbar extends React.Component {
	render() {
		return (
			<UL>
				<ul className="nav">
					<li className="slam-left"><Link to="/"><img src="https://seeklogo.com/images/L/left-and-right-side-of-the-brain-logo-67B4F429CE-seeklogo.com.png" alt="logo" width='50'/></Link></li>
					<li ><Link className="items lis" to="/login">Login</Link></li>
					<li ><Link className="items lis" to="/signup">Singup</Link></li>
					<li ><Link className="items lis" to="/aboutus">About Us</Link></li>
				</ul>
			</UL>
			
		);
	}
}