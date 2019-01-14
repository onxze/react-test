import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
//import Footer from './components/Footer/Footer';



class App extends Component {
  render() {

    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Navigation />
        <Main />
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;
