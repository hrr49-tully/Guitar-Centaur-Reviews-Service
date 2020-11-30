import React from 'react';
import style from './css/Histogram.css';

const HistogramBar = (props) => {
  const [count, increment] = React.useState(0);
  const number = Math.round(props.bar * (.01 * props.number));
  const width = (number/props.number) * 100;

  return (
    <div className={style.hover} onClick={() => {props.sortByStars(props.id)}}>
      <div className={style.popup}>Show reviews with {props.id} stars
        <br/>
        <br/>
        <svg viewBox="-9 -10 52 52" focusable="false" role="presentation">
          <g>
            <polyline className={style.popupCaret} points="23.7,31.5 8.3,16 23.7,0.5" />
          </g>
        </svg>
      </div>
        <span className={style.numberOfStars}>{props.id} Stars</span>
        <div  className={style.bar} style={{width : `${width}%`}} />
        <div className={style.starCount}>{number}</div>
    </div>
  )

}


export default HistogramBar;