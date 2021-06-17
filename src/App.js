import "./App.scss";
import { Header } from "./Header";
import { Home } from "./Home";
// import { Fund } from "./Fund";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path="/fund">
          <Fund />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
