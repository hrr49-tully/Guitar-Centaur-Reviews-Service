import React from 'react';

const ConsEntry = (props) => (
  console.log(props),
  <div>
    {props.con.description}   {props.con.count}
  </div>
)


export default ConsEntry;