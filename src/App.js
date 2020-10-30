
import './App.css';
import MyNavBar from "./components/MyNavBar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Admin from "./components/Admin";

function App() {
  return (
    <div className="App">
      <MyNavBar/>
      <div>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/home' component={Home}/>
                <Route path='/admin' component={Admin}/>
            </Switch>

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
