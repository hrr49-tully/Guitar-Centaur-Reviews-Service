import React from 'react';

const ProsEntry = (props) => (
  console.log(props),
  <div>
    {props.pro.description}   {props.pro.count}
  </div>
)


export default ProsEntry;