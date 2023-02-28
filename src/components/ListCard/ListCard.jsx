import React from 'react';
import './ListCard.scss';
import { v4 as uuidv4 } from 'uuid';

function ListCard(props) {

  function generateListItems() {
    const listItems = [];
    props.list.forEach(listItem => {
      listItems.push(<p key={uuidv4()}>{listItem}</p>);
    });
    return listItems;
  }

  return (
    <div className='ListCard'>
      <h6 className='ListCard-title'>{props.title}</h6>
      {generateListItems()}
    </div>
  )
};

export default ListCard;
