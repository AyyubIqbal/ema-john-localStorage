import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import NotFound from './components/NotFound/NotFound';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/orders'>
            <OrderReview></OrderReview>
          </Route>
          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;