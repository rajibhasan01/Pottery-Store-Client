import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './components/Shared/Login/Login/Login';
import Registation from './components/Shared/Login/Registation/Registation';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Registation} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
