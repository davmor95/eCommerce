
import './App.css';
import MyNavBar from "./components/MyNavBar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Login2 from "./components/Login2";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <MyNavBar/>
      <div>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login2}/>
                <Route path='/home' component={Home}/>
                <Route path='/admin' component={Admin}/>
                <Route path='/logout' component={Logout}/>
            </Switch>

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
