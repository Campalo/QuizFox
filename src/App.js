import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import MyTheme from './Theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import AboutUs from './pages/AboutUs';
import Quiz from './pages/Quiz';
import NoPage from './pages/NoPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={MyTheme}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/categories" component={Category} />
              {/* add 2 dynamique parameters inside the path so that the Quiz component can get them */}
              <Route path="/quiz/:category/:difficulty" component={Quiz} />
              <Route path="/about-us" component={AboutUs} />
              <Route component={NoPage} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
