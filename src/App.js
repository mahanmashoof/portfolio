import React, {Component} from 'react';
import './App.scss';
import Nav from './components/Nav.js';
import MechanicalEngineering from './routes/MechanicalEngineering.js';
import GEHealthcare from './routes/subroutes/MechGE.js';
import SwedishSpace from './routes/subroutes/MechSSC.js';
import Orgentec from './routes/subroutes/MechOrgentec.js';
import Safegate from './routes/subroutes/MechSafegate.js';
import TCTech from './routes/subroutes/MechTCTech.js';
import Prevas from './routes/subroutes/MechPrevas.js';
import Cadcrowd from './routes/subroutes/MechCadcrowd.js';
import Tacton from './routes/subroutes/MechTacton.js';
import Projects from './routes/Projects.js';
import ProjShelf from './routes/subroutes/ProjShelf.js';
import ProjRecSta from './routes/subroutes/ProjRecSta.js';
import ProjSink from './routes/subroutes/ProjSink.js';
import ProjBg from './routes/subroutes/ProjBg.js';
import ProjCrib from './routes/subroutes/ProjCrib.js';
import ProjLaundry from './routes/subroutes/ProjLaundry.js';
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
          <Route path="/mecheng" exact component={MechanicalEngineering}/>
          <Route path="/mecheng/ge" component={GEHealthcare}/>
          <Route path="/mecheng/ssc" component={SwedishSpace}/>
          <Route path="/mecheng/orgentec" component={Orgentec}/>
          <Route path="/mecheng/safegate" component={Safegate}/>
          <Route path="/mecheng/tctech" component={TCTech}/>
          <Route path="/mecheng/prevas" component={Prevas}/>
          <Route path="/mecheng/cadcrowd" component={Cadcrowd}/>
          <Route path="/mecheng/tacton" component={Tacton}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/projects/shelf" component={ProjShelf}/>
          <Route path="/projects/trash&recycling" component={ProjRecSta}/>
          <Route path="/projects/sink" component={ProjSink}/>
          <Route path="/projects/backgammon" component={ProjBg}/>
          <Route path="/projects/crib" component={ProjCrib}/>
          <Route path="/projects/laundry" component={ProjLaundry}/>
        </Switch>
        <Footer />
      </div>
    </Router>);
  }
}

export default App;
