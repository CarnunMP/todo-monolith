import React from "react";
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

function Counter(props) {
  const { count, incrementCount, decrementCount } = props;

  return (
    <div className="counter">
      <p>{`Count: ${count}`}</p>
      <button type="button" onClick={incrementCount}>Increment</button>
      <button type="button" onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators,
)(Counter);
