import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import CountryDetail from "./Components/CountryDetail/CountryDetail";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/country/:countryName">
            <CountryDetail />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
