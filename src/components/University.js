import React, { Component } from 'react';
 
class University extends Component {
   
  render() {
    return (
<div className="atbdp_column">
  <div className="atbd_single_listing atbd_listing_card ">
     <article
        className="atbd_single_listing_wrapper directorist-featured-listings">
        <figure className="atbd_listing_thumbnail_area">
           <div className="atbd_listing_image">
              <a href={this.props.university.web_pages[0]} rel="noreferrer" target="_blank">
                 <div className='atbd-thumbnail-card card-cover' style={{height: "250px", backgroundColor: "lightyellow"}}>
                    <div className='atbd-thumbnail-card-front-wrap'><img src={'https://logo.clearbit.com/'+(this.props.university.domains[0])+"?size=250"} alt={this.props.university.name} className='atbd-thumbnail-card-front-img'/></div>
                 </div>
              </a>
              <div className="atbd_author">
                 <img src="https://demo.directorist.com/theme/direo/wp-content/uploads/2020/06/auth5-150x150.jpg"
                    alt="Author" />
              </div>
           </div>

           <div className="atbdp_add_to_fav_listings"><a rel="noreferrer" target="_blank" className="atbdp_mark_as_fav " id="atbdp-fav_2855" data-listing_id="2855" href={this.props.university.web_pages[0]}><span className="atbd_fav_icon"></span><span className="atbd_fav_tooltip"></span></a></div>
        </figure>
        <div className="atbd_listing_info">
           <div className="atbd_content_upper">
              <h4 className="atbd_listing_title" style={{textAlign: "center"}}>
                 <a href={this.props.university.web_pages[0]} rel="noreferrer" target="_blank">{this.props.university.name}</a>
              </h4>
            <div class="atbd_listing_meta">
              <span class="atbd_upper_badge" style={{margin: "auto"}}>
                <span class="atbd_badge atbd_badge_close">{this.props.university.country}</span>		</span>

            </div>
           </div>
        </div>
     </article>
  </div>
</div>
                                                         
      
      
      
    );
  }
}


export default University;