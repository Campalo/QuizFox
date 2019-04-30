import React, { Component } from "react";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import MyTheme from "./Theme";
//import Navbar from "./components/Navbar";
import QuestionsAPI from "./components/QuestionsAPI";
import Footer from "./components/globalComponents/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar2 from "./components/globalComponents/Navbar2";

class App extends Component {
  constructor() {
    super();
    this.state = {
      question: []
    };
  }

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=1")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          question: json.results[0]
        });
      });
  }

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={MyTheme}>
          <div className="App">
            <Navbar2 />
            {/* <Navbar /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/quiz/result" component={QuizResult} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/404" component={NoPage} />
            </Switch>
            <QuestionsAPI question={this.state.question} /> */}
            <Footer />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }


export default App;
