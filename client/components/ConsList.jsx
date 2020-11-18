import React from 'react';
import ConsEntry from './ConsEntry.jsx';

const ConsList = (props) => {
  let cons = props.cons;
  return (
    <div>
      {props.cons.map(con =>
        <ConsEntry con={con} key={con.conID}/>
      )}
    </div>
  )
};


export default ConsList;