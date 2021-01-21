import React, { Component } from 'react';
 
class Footer extends Component {
  render() {
      return (
      <footer className="footer-three footer-light">
         <div className="footer-bottom">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="footer-bottom--content">
                        <a className="footer-logo" href="https://fasttracktogoodjobs.com">
                              
                                <img style={{width: "20%"}} className="logo-white" src="https://fasttracktogoodjobs.com/assets/c_announce_only-7e058373d9ff40bf4c7c58514805095aaec75ad85999d62ee938ca5a53191941.jpg" alt="logo-white" /><span style={{marginLeft:"10px", color:"black", fontWeight: "bold", fontSize: "1.3em"}}>Fast Track Academy</span></a>						
                        <div className="copyr-content">
                           <p>©2021 Fast Track Academy</p>
                          <a href="https://clearbit.com">Logos provided by Clearbit</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      
      
      
    );  
    
  }
  
  
}

export default Footer;