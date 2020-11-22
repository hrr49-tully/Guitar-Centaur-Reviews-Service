import React from 'react';
import ProsEntry from './ProsEntry.jsx';
import styles from './css/ReviewSnapshot.css';

const ProsList = (props) => {
  let pros = props.pros;
  return (
    <section className={styles.snp_box} >
      <div className={styles.snp_boxTitle} >Pros</div>
      <div className={styles.snp_textBlock} >
      {props.pros.map(pro =>
        <ProsEntry pro={pro} key={pro.proID}/>
      )}
      </div>
    </section>
  )
};


export default ProsList;