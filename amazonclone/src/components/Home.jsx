// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import databases from '../Database/test';
import Cards from './HomeElements/Cards';
import RowsOfcard from './HomeElements/RowsOfCards';
import Foot from './master/Foot';
import Product from './master/Product';
function Home(props) {
  // const [prd,setPrd]=useState(-1);
  const getProduct = (id) => {
    props.getProduct(id)
  }
let saree= databases.restaurants.filter((osx, i) => {
    return (databases.restaurants[i].cuisine_type==='saree')
   })
   let sweets= databases.restaurants.filter((osx, i) => {
    return (databases.restaurants[i].cuisine_type!=='saree')
   })
  if (props.prd === -1) {
    return (
      <>
        <div className="nav2 clr3 row w100 flexAIC flexSB" style={{ marginTop: "0.5%" }}>
          <div className="row clr3 flexAIC flexSA w50" style={{marginLeft:"1%"}}>
          <i class="fa fa-bars m1" aria-hidden="true" style={{fontSize:"23px"}}></i> 
            <div className="span" style={{fontWeight:"600"}}> ALL</div>

            <button className="btn btn-trans fclBlack">NAMKEEN</button>
            <button className="btn btn-trans fclBlack">CHOCOLATE</button>
            <button className="btn btn-trans fclBlack">MITHAI</button>
            <button className="btn btn-trans fclBlack">CELECRATION BOXES</button>
            <button className="btn btn-trans fclBlack">GIFTING</button>
            <button className="btn btn-trans fclBlack">
              <Link to='/About' className="row flexAIC" style={{ width: "100%" }}>ABOUT</Link></button>
            <button className="btn btn-trans fclBlack">
              <Link to='/Contact_us'>CONTACT US</Link>
            </button>
          </div>
          <div className="row">
            <img src="app.jpg" alt="" />
          </div>
        </div>

        <div className="nav2 clr2 row w100 flexAIC" >
          <marquee behavior="" direction="">
            <span className="" style={{ width: "800px" }}>Upto 30% Off On This Weekend Shop Exclusively.......! </span>
          </marquee>
        </div>

        <div className="w100 col btn-trans ">
          <img style={{ width: "100%" }} src="banner2.jpg" alt="" />
        <div className="w100 cardss">
          <div className="row flexSE">
          <div className="col card  m1 bgWhite" onClick={()=>getProduct(1)}>
            <h2 className='m1'>#Amazon se liya</h2>
                                   <img className='' style={{width:"18vw",height:"16vw"}} src={databases.restaurants[1].photograph} alt="" /><h3 className='m3' style={{textAlign:"center"}}>{databases.restaurants[1].name}</h3>
                                </div>
                                <div className="col card  m1 bgWhite" onClick={()=>getProduct(2)}>
                                  <h2 className='m1'>Pre-book offers </h2>
                                   <img className='' style={{width:"18vw",height:"16vw"}} src={databases.restaurants[2].photograph} alt="" /><h3 className='m3' style={{textAlign:"center"}}>{databases.restaurants[2].name}</h3>
                                </div>
                                <div className="col card  m1 bgWhite" onClick={()=>getProduct(3)}>
                                <h2 className='m1'>Lets Upgrade</h2>
                                   <img className='' style={{width:"18vw",height:"16vw"}} src={databases.restaurants[3].photograph} alt="" /><h3 className='m3' style={{textAlign:"center"}}>{databases.restaurants[3].name}</h3>
                                </div>
                                <div className="col card  m1 bgWhite" onClick={()=>getProduct(4)}>
                                  <h2 className='m1'>#Upto 70% Off</h2>
                                   <img className='' style={{width:"18vw",height:"16vw"}} src={databases.restaurants[4].photograph} alt="" /><h3 className='m3' style={{textAlign:"center"}}>{databases.restaurants[4].name}</h3>
                                </div>
          </div>
          
        </div>
          {/* <h1 className='m3' style={{ color: "white", textAlign: "Center", marginBottom: "1%", fontFamily: "Ballet" }}>Home Sweet Home</h1>
          <p className='' style={{ color: "white", textAlign: "Center", marginBottom: "1%", fontSize: "18px" }}>From indulgent mithai, chocolatey sweets and sugar doused treats, we have something to put everyone in a good mood!</p> */}
         <div className="w100">
          <div className="row w100 flexJCC" style={{ marginBottom: "5%" }}>
            <hr style={{ border: "1px solid white", width: "20%", textAlign: "center" }} /></div>
            <RowsOfcard arr={saree} len="8"  getProduct={getProduct} heading="Get 750 diamonds, min ₹300 purchase | Ethnic wear from local shops"/>
            <RowsOfcard arr={sweets} len="5"  getProduct={getProduct} heading="Frequently repurchased in Pet Supplies"/>
          <Cards getProduct={getProduct} />
      
        </div>
        </div>
        <Foot />
      </>
    );
  }
  else {
    return (
      <>
        <Product currentId={props.prd} incrDecr={props.incrDecr} addToCart={props.addToCart} />
      </>
    );
  }
}

export default Home;