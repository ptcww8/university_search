import React, { Component } from 'react';
import { getUniversitiesList } from '../actions/asynActions';
import { setDescription, setLocation } from "../actions/searchActions";
import { connect } from 'react-redux';
import { GET_COUNTRY_LIST } from "../actions/actionTypes";
 
class Header extends Component {
  
    state = {
      location: "",
      description: "",
    }
  
  
   onFilter = e => {
      this.props.setDescription(this.state.description)
      this.props.setLocation(this.state.location)
      this.props.getUniversitiesList(this.state.description, this.state.location)
    }
   
   handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.props.setDescription(this.state.description)
      this.props.setLocation(this.state.location)
      this.props.getUniversitiesList(this.state.description, this.state.location)
    }
  }
  
  
  
  
  
  
  render() {
    return (
      <div>
      <section className="header-breadcrumb bgimage overlay overlay--dark">
         <div className="bg_image_holder"><img src="https://demo.directorist.com/theme/direo/wp-content/uploads/2019/10/breadcrumb1.jpg" alt="Listing Grid View" /></div>

         <div className="breadcrumb-wrapper content_above">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 text-center">
                     <h2 className="page-title m-bottom-30">Search For University</h2>
                     <div className="row">
                        <div className="col-lg-10 offset-lg-1 quick-search">
                           
                              <div className="atbd_seach_fields_wrapper" style={{backgroundColor:"lightgreen"}}>
                                 <div className="atbdp-search-form">
                                    <div className="single_search_field search_query">
                                       <input className="form-control search_fields" type="text" name="q" defaultValue={this.props.description} onKeyDown={this.handleKeyDown} onChange={e => this.setState({ description: e.target.value })} autocomplete="off" placeholder="Type a word in the university name" />
                                    </div>
                                    <div className="single_search_field search_category">
                                      
                                       <select  name="in_cat" className="search_fields form-control" id="at_biz_dir-category" defaultValue={this.props.location} onKeyDown={this.handleKeyDown} onChange={e => this.setState({ location: e.target.value })}>
                                         <option value="">Choose a country from the list</option>
                                         {GET_COUNTRY_LIST.map((country) => 
                                              
                                              <option value={country} >{country}</option>
                                         )}
                                       </select>
                                    </div>
                                    <div className="atbd_submit_btn">
                                       <button type="submit" className="btn_search" onClick={this.onFilter}> Search </button>
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
      
      
      
    );
  }
}


const mapDispatchToProps = {
  getUniversitiesList,
  setDescription,
  setLocation 
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    description: state.description
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);