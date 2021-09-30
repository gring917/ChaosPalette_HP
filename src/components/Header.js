import React from 'react';
import Logo from ".././img/Header_logo.jpg";

class Header extends React.Component{
  render() {
    return(
     <div className='header'>
       <img src={Logo} alt="Logo" />
     </div>
    );
  }
}

export default Header;
