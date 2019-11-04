import * as types from './actionTypes';
// import axios from 'axios';

export function incrementCount() {
  return { type: types.INCREMENT };
}

export function decrementCount() {
  return { type: types.DECREMENT };
}
