import React, { Component } from 'react';
import University from './University';
import { connect } from 'react-redux';
import { getUniversitiesList } from '../actions/asynActions';
 
class UniversityListing extends Component {
  
  componentDidMount() {
    this.props.getUniversitiesList(this.props.description,this.props.location);
  }
  render() {
    
       let displayLoading;
    if (this.props.loading) {
      displayLoading = <div class="row"> <div class="atbd_listing_meta" style={{margin: "auto"}}><span class="atbd_meta atbd_listing_price">Loading...</span></div></div>
    }
    
    
    
      return (
      <div data-elementor-type="wp-page" data-elementor-id="1997" class="elementor elementor-1997" data-elementor-settings="[]">
         <div class="elementor-inner">
            <div class="elementor-section-wrap">
               <section class="elementor-section elementor-top-section elementor-element elementor-element-c518ef8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c518ef8" data-element_type="section">
                  <div class="elementor-container elementor-column-gap-default">
                     <div class="elementor-row">
                        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8f9aa0e" data-id="8f9aa0e" data-element_type="column">
                           <div class="elementor-column-wrap elementor-element-populated">
                              <div class="elementor-widget-wrap">
                                 <div class="elementor-element elementor-element-4920980 elementor-widget elementor-widget-listings" data-id="4920980" data-element_type="widget" data-widget_type="listings.default">
                                    <div class="elementor-widget-container">
                                       <div id="listing-grid">
                                          <div id="directorist" class="atbd_wrapper ads-advaced--wrapper">

                                             <div class="all_listings_top_wrapper">
                                                <div class="row">
                                                   <div class="col-lg-12 col-md-12">
                                                     
                                                     {displayLoading}
                                                      <div class="row" >
                                                        
                                                        
                                                    {this.props.universities && this.props.universities.map((x, i) => 
                                                      <University key={i} university={x} />
                                                    )}

                                                     </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>

                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         </div>
      </div>
      
      
      
    );  
    
  }
  
  
}


const mapDispatchToProps = {
  getUniversitiesList
}

const mapStateToProps = (state) => {
  return {
    universities: state.data,
    location: state.location,
    description: state.description,
    loading: state.loading
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UniversityListing);