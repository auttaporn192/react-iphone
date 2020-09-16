import React from 'react';
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import ProductDetail from './pages/ProductDetail/ProductDetail'

import "bootstrap/dist/css/bootstrap.min.css"
import {Route , Switch , Redirect , BrowserRouter} from 'react-router-dom'
import './App.css';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'
import Login from './pages/Login/login'
export const  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
function App() {
  return (
    <Provider store={store}>
     <BrowserRouter>
    <Header />
    <Switch>
         <Route exact path={'/'} render={() => {
                        return <Redirect to={'/products'}/>
                    }}/>
        <Route exact path={'/products'} component={Home} />
        <Route exact path={'/products/:id'} component={ProductDetail} />
        <Route exact path={'/cart'} component={ShoppingCart} />
        <Route exact path={'/login'} component={Login} />
    </Switch>
     </BrowserRouter>
    </Provider>
  );
}

export default App;
