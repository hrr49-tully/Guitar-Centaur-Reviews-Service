import React from 'react';
import ConsEntry from 'ConsEntry.jsx';

const ConsList = (props) => {
  let cons = props.cons;
  return (
    <div>
      {props.cons.map(cons => {
        <ConsEntry con={con} key={con.conID}/>
      })}
    </div>
  )
};


export default ConsList;