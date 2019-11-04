import React from 'react';
import './App.css';
import {
  combineReducers,
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './state/reducers';

// import Counter from './components/Counter';
import ListItems from './components/list/ListItems';

const rootReducer = combineReducers({
  // count: reducers.countReducer,
  items: reducers.itemsReducer,
});

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Counter /> */}
        <ListItems />
      </div>
    </Provider>
  );
}

export default App;
