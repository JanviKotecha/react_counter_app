import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';



const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);


const App = () => (
  <Provider store={store}>
    <counter/>
  </Provider>
);

render(<App />, document.getElementById('root'));