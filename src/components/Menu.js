import React, { Component } from 'react';
 
class Menu extends Component {
  render() {
    return (
      <div className="menu-area menu1 menu--light menu--transparent fixed-top headroom menu-area-sticky">
         <div className="top-menu-area">
            <div className="container-fluid" >
               <div className="row">
                  <div className="col-lg-12">
                     <div className="menu-fullwidth">
                        <div className="logo-wrapper order-lg-0 order-sm-1">
                           <div className="logo logo-top">
                              <a className="navbar-brand order-sm-1 order-1" href="https://fasttracktogoodjobs.com">
                              
                                <img style={{width: "20%"}} className="logo-white" src="https://fasttracktogoodjobs.com/assets/c_announce_only-7e058373d9ff40bf4c7c58514805095aaec75ad85999d62ee938ca5a53191941.jpg" alt="logo-white" /><span style={{marginLeft:"10px", color:"white", fontWeight: "bold", fontSize: "1.3em"}}>Fast Track Academy</span></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
      
      
    );
  }
}


export default Menu;