import React from "react";
import ReactDom from "react-dom";

// layout components
// 1. Header
//   *img logo
//   *nav-items
// 2. body
//   * search
//   *  Reaturant conatainer
//      - ResCard
//        # img
//        # res name 
//        # cusines
//        # delivery time
//        # star rating
// 3 . Footer
//    * copyright
//    * links
//    * address
//    * contact       


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
};
const ReasturantCard = () => {
  return (
    <div className="res-card">
      <h3>Starbucks</h3>
    </div>
  )
}

const Body =() => {
  return (
    <div className="body">
      <div className="serach">Search</div>
      <div className="res-conatiner">
        <ReasturantCard />
      </div>
    </div>
  )
}


const AppLayout = () => {
    return (
        <div className="app">
           <Header/>
           <Body />
           {/* footer */}
        </div>
    )
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<AppLayout />);