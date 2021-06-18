import "./App.scss";
import { Header } from "./Header";
// import { Home } from "./Home";
// import { Fund } from "./Fund";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Hero } from './Hero';
import { Roadmap } from './Roadmap';
import { Tokenomics } from './Tokenomics';
import { Community } from './Community';
import { Features } from './Features';
import { Fund } from './Fund';

function App() {
  return (
    <>
      <div className='start'>
        <Header />
        <Hero />
      </div>
      <Features />
      <Tokenomics />
      <Roadmap />
      <Fund />
      <Community />
    </>
    // <Router>
    //   <Header />
    //   <Switch>
    //     {/* <Route path="/fund">
    //       <Fund />
    //     </Route> */}
    //     <Route path="/">
    //       <Home />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
