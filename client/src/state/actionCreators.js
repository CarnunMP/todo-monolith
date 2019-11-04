import * as types from './actionTypes';
// import axios from 'axios';

// Test counter
// export function incrementCount() {
//   return { type: types.INCREMENT };
// }
// export function decrementCount() {
//   return { type: types.DECREMENT };
// }
// ---

export function toggleCompleted(item) {
  const toggledItem = {
    ...item,
    completed: !item.completed,
  }

  return { 
    type: types.TOGGLE_COMPLETED,
    payload: toggledItem,
  }
}
