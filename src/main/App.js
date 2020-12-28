import "./App.css";
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Main from "./Main";
<<<<<<< HEAD
=======


>>>>>>> cf8d675fc1e3a2b4a13e89b10331f490c558f959
import CheckPoint from "../CheckPoint/CheckPoint";
import Myfridge from "../Myfridge/Myfridge";
import Signup from "../Sign_up/Signup";
import AddItem from "../AddItem/AddItem";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  render() {
    return (
      <div id="main">
        <Switch>
          <Route exact path="/" render={() => <Main />} />
          <Route exact path="/cart" render={() => <AddItem />} />
          <Route exact path="/users" render={() => <CheckPoint />} />
          <Route exact path="/myfridge" render={() => <Myfridge />} />
          <Route exact path="/signup" render={() => <Signup />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
