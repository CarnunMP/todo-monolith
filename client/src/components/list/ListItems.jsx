import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../state/actionCreators';

import ItemCard from './ItemCard'

function ListItems(props) {
  const { items, toggleCompleted } = props;
  const orderedItems = items.sort((itemA, itemB) => itemA.importance - itemB.importance);

  return (
    <div className='list-items'>
      {orderedItems.map(item => (
        <ItemCard item={item} toggleCompleted={toggleCompleted} key={item.id} />
      ))}
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(ListItems);