import React from 'react';
import thumbs from './css/thumbs.js';
import styles from './css/ReviewsStyles.css';

const Recommended = (props) => {
  const [upVotes, increaseUpVotes] = React.useState(props.review.upVotes);
  const [downVotes, increaseDownVotes] = React.useState(props.review.downVotes);
  const [voted, clickedVote] = React.useState(false);

  const buttonClicked = (input, input2) => {
    document.getElementById(input).classList.add(styles.thumbsButtonClicked, styles.thumbsButtonClickedNumber);
    document.getElementById(input2).classList.remove(styles.thumbsButton);
    document.getElementById(input2).classList.add(styles.thumbsOppositeClicked);
  }
  const id = props.review.id;
    return (
    <div className={styles.rv_thumbs}>
      <button id={id} className={styles.thumbsButton} onClick={ () => {
        if (!voted) {
        increaseUpVotes(upVotes + 1);
        buttonClicked(id, `${id}.5`) ;
        };
        clickedVote(true);
        }}>
        <span>
          <svg className={styles.vectorThumb} version="1.1" x="0px" y="0px" viewBox="0 0 216 146" xml:space="preserve" focusable="false" aria-hidden="true">
            <g>
              <path className={styles.vectorThumbFill} fill="#707070" d={thumbs.thumb}/>
              <path className={styles.vectorThumbFill} fill="#707070" d={thumbs.cuff}/>
            </g>
          </svg>
        </span>
        <span className={styles.thumbsNumber}>
          {upVotes}
        </span>
      </button>
      <button id={`${id}.5`} className={`${styles.thumbsButton} ${styles.thumbsButtonRight}`} onClick={ () => {
        if (!voted) {
        increaseDownVotes(downVotes + 1);
        buttonClicked(`${id}.5`, id);
        };
        clickedVote(true);
        }}>
        <span>
          <svg className={`${styles.vectorThumb} ${styles.vectorThumbDown}` } version="1.1" x="0px" y="0px" viewBox="0 0 216 146" xml:space="preserve" focusable="false" aria-hidden="true">
            <g>
              <path className={styles.vectorThumbFill} fill="#707070" d={thumbs.thumb} />
              <path className={styles.vectorThumbFill} fill="#707070" d={thumbs.cuff} />
            </g>
          </svg>
        </span>
        <span className={styles.thumbsNumber}>
          {downVotes}
        </span>
      </button>
    </div>
  );
};


export default Recommended;
