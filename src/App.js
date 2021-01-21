import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import UniversityListing from './components/UniversityListing';

class App  extends Component {

    render(){

      return (
          <div>
            <Menu />
            <Header />
            <UniversityListing />
            <Footer />



          </div>
        );
      
      
      
    }

}

export default App;
