import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import NoMatch from "./pages/NoMatch";
import TopNav from "./components/TopNav";
import { Container } from 'reactstrap';

function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={() => <Auth action="login" />}  />
            <Route exact path="/signup" component={() => <Auth action="signup" />}  />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
