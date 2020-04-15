import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav.js';
import WebDevelopment from './routes/WebDevelopment.js';
import MechanicalEngineering from './routes/MechanicalEngineering.js';
import Projects from './routes/Projects.js';
import Home from './routes/Home.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SlideDrawer from './components/SlideDrawer.js';
import Footer from './components/Footer.js';

class App extends Component {

  state = {
    slideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {slideDrawerOpen: !prevState.slideDrawerOpen};
    });
  };

  render() {
    let slideDrawer;
    if (this.state.slideDrawerOpen) {
      slideDrawer = <SlideDrawer drawerClickHandler={this.drawerToggleClickHandler}/>;
    }
    return (<Router>
      <div className="App">
        <Nav drawerClickHandler={this.drawerToggleClickHandler} />
        {slideDrawer}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/webdev" component={WebDevelopment}/>
          <Route path="/mecheng" component={MechanicalEngineering}/>
          <Route path="/projects" component={Projects}/>
        </Switch>
        <Footer />
      </div>
    </Router>);
  }
}

export default App;
