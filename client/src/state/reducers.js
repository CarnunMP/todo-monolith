import * as types from './actionTypes';

// Test counter
// const initialCount = 0;
// export function countReducer(count = initialCount, action) {
//   switch (action.type) {
//     case types.INCREMENT:
//       return count + 1;
//     case types.DECREMENT:
//       return count - 1;
//     default:
//       return count;
//   }
// }
// ---

const initialItems = [
  { id: 1, text: "clean room", completed: false, importance: 1 },
  { id: 2, text: "finish todo app", completed: false, importance: 2 },
  { id: 3, text: "do duolingo", completed: false, importance: 0 },
  { id: 4, text: "write email", completed: false, importance: 3 }
];
export function itemsReducer(items = initialItems, action) {
  switch (action.type) {
    case types.TOGGLE_COMPLETED:
      return [...items.filter(item => item.id !== action.payload.id), action.payload];
    default:
      return items;
  }
}
