import React from 'react';

export default function ItemCard(props) {
  const { item, toggleCompleted } = props;
  const { text, completed, importance } = item;

  return (
    <div className="item-card">
      {`Text: ${text}. Completed: ${completed}. Importance: ${importance}`}
      <button onClick={() => toggleCompleted(item)}>toggleCompleted</button>
    </div>
  )
}