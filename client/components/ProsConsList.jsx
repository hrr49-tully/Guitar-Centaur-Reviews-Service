import React from 'react';
import ProsConsEntry from './ProsConsEntry.jsx';
import styles from './css/ReviewSnapshot.css';

const ConsList = (props) => {
  let prosCons = props.prosCons;
  return (
    <section className={styles.snp_box} >
      <div className={styles.snp_boxTitle} >Cons</div>
      <div className={styles.snp_textBlock} >
        {prosCons.map(proCon =>
          <ProsConsEntry pc={proCon} key={proCon.conID}/>
        )}
      </div>
    </section>
  )
};


export default ConsList;