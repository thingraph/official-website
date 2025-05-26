import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Home from './Home';
import HomeEn from './Home_en';



let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/home-en" component={HomeEn} />
        </div>
      </Router>
    );
  }
}

export default App;