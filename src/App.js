import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";

// redux stuff
import { createStore } from 'redux'
import  reducer  from './reducers/reducer'

// react-redux - Provider - wraps app, connect - used in components
import { Provider } from 'react-redux'


// store.getState() da dobijemo objekat state

//initial store
const initialStore = {
  cart: cartItems,
  total: 1000,
  amount: 0
}


const store = createStore(reducer, initialStore);
//store.dispatch({type: 'DECREASE'})
// store.dispatch({ type: DECREASE })


function App() {
  // cart setup

  return (
    <Provider store = {store}>
      <Navbar/>
      <CartContainer  />
    </Provider>
  );
}

export default App;
