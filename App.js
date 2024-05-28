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

const resObj = {
  "info": {
      "id": "651010",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Mission Road",
      "areaName": "Baxi Bazar",
      "costForTwo": "₹350 for two",
      "cuisines": [
          "Pizzas"
      ],
      "avgRating": 4.3,
      "parentId": "721",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2024-05-29 00:00:00",
          "opened": true
      },
      "badges": {
          "imageBadges": [
              {
                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
                  "description": "Delivery!"
              }
          ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {
                  "badgeObject": [
                      {
                          "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Pizza.png"
                          }
                      }
                  ]
              },
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
      },
      "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-mission-road-baxi-bazar-cuttack-651010",
      "type": "WEBLINK"
  }
};


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

// const styleCard = {
//   backgroundColor :"#FEEFAD",
// }

const ReasturantCard = (props) => {
  // console.log(props);
  const {resData} = props;
  // console.log(resData.info.name);
if(!resData){
  return null;
}
  return (
    <div className="res-card" >
      <img 
        className="res-logo"
        alt ="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2418209798927d733a50f5d2ebcc2aee"
      />
      <h3>{resData.info.name}</h3>
      <h5>{resData.info.cuisines}</h5>
      <h5>{resData.info.sla.deliveryTime} mintutes</h5>
      <h5>{resData.info.costForTwo}</h5>
      <h5>{resData.info.avgRating} stars</h5>
    </div>
  )
}

const Body =() => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-conatiner">
        <ReasturantCard resData = {resObj}/>
        <ReasturantCard  />
        
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