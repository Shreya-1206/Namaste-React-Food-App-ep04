import React from "react";
import ReactDom from "react-dom";

const Header=()  => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src= "https://th.bing.com/th/id/OIP.klm69DJb5MssBNAU6X480QAAAA?rs=1&pid=ImgDetMain"/>
      </div>
      <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
      </div>
    </div> 
  )
}


const AppLayout = () => {
    return (
        <div className="app">
           <Header/>
           {/* body 
           footer */}
        </div>
    )
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<AppLayout />);