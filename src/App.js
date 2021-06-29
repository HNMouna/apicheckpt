import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import ListUsers from "./Components/ListUsers";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        {" "}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/listUsers" component={ListUsers} />
       
      </Switch>
    </div>
  );
}

export default App;
