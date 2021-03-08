//Setup for Different Imports/Components
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import PageNotFound from "./components/PageNotFound";
import HomePage from "./components/HomePage";
import Restaurants from "./components/Restaurants";
import Info from "./components/Info";

function App() {
  return (
    <div>
      {/* Makes on "Page" Appear at a Time */}
      <Switch>
        {/* Routes for Different "Page" Appearances */}
        <Route exact path="/" component={HomePage} />
        <Route path="/api" component={Restaurants} />
        <Route path="/api/:information" component={Info} />
        {/* Catch All for Invalid URL's */}
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
