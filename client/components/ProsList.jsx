import React from 'react';
import ProsEntry from './ProsEntry.jsx';

const ProsList = (props) => {
  let pros = props.pros;
  return (
    <div>
      {props.pros.map(pro =>
        <ProsEntry pro={pro} key={pro.proID}/>
      )}
    </div>
  )
};


export default ProsList;