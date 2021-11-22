import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './components/Shared/Login/Login/Login';
import Registation from './components/Shared/Login/Registation/Registation';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AllProducts from './pages/AllProducts/AllProducts';
import SingleProduct from './pages/Home/SingleProduct/SingleProduct';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './components/Shared/Cart/Cart';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/Shared/Login/PrivateRoute/PrivateRoute';
import Success from './pages/Success/Success';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/success" component={Success} />
            <Route exact path="/register" component={Registation} />
            <Route exact path="/allproducts" component={AllProducts} />
            <Route exact path="/products/:productID" component={SingleProduct} />

            <PrivateRoute path='/placeorder'>
              <PlaceOrder />
            </PrivateRoute>

            <PrivateRoute path='/dashboard'>
              <Dashboard />
            </PrivateRoute>

            <PrivateRoute path='/cart'>
              <Cart />
            </PrivateRoute>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
