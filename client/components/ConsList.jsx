import React from 'react';
import ConsEntry from './ConsEntry.jsx';
import styles from './css/ReviewSnapshot.css';

const ConsList = (props) => {
  let cons = props.cons;
  return (
    <section className={styles.snp_box} >
      <div className={styles.snp_boxTitle} >Cons</div>
      <div className={styles.snp_textBlock} >
        {props.cons.map(con =>
          <ConsEntry con={con} key={con.conID}/>
        )}
      </div>
    </section>
  )
};


export default ConsList;