import React from 'react';
import ProsConsEntry from './ProsConsEntry.jsx';
import styles from './css/ReviewSnapshot.css';

const ConsList = (props) => {
  let prosCons = props.prosCons;
  let proOrCon;
  props.cons ? proOrCon = 'Cons' : proOrCon = 'Pros';
  return (
    <section className={styles.snp_box} >
      <div className={styles.snp_boxTitle} >{proOrCon}</div>
      <div className={styles.snp_textBlock} >
        {prosCons.map(proCon =>
          <ProsConsEntry sort={props.sortByProCon} pc={proCon} key={proCon.conID} proOrCon={proOrCon} />
        )}
      </div>
    </section>
  )
};


export default ConsList;