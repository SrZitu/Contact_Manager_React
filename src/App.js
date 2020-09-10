import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contacts from "./component/Contacts";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./component/AddContact";
import { Provider } from "./Context";
import About from "./component/About";
import Test from "./component/Test";
import EditContact from "./component/EditContact";
function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact}></Route>
              <Route
                exact
                path="/contact/edit/:id"
                component={EditContact}
              ></Route>
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
