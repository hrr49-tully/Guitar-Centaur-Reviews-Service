import React from 'react';
import styles from './css/SortByStyles.css';

const SortBy = (props) => {
  const [sortOption, setSortOption] = React.useState('Most Recent');
  const switchSort = (input) => {
    setShowOptions(input);
  };
  const options = ['Most Recent', 'Most Helpful', 'Highest Rated', 'Lowest Rated', 'Oldest'];

  const convertMonthToNum = (input) => {
    let result = input === 'Jan' ? 1 :
    input === 'Feb' ? 2 :
    input === 'Mar' ? 3 :
    input === 'Apr' ? 4 :
    input === 'May' ? 5 :
    input === 'Jun' ? 6 :
    input === 'Jul' ? 7 :
    input === 'Aug' ? 8 :
    input === 'Sep' ? 9 :
    input === 'Oct' ? 10 :
    input === 'Nov' ? 11 :
    input === 'Dec' ? 12 : null;
    return result;
  }

  const sortByOldest = (input) => {
    let reviewIds = [];
    let allReviews = [];
    let sortDates = {};
    props.allReviews.forEach(review => {
      const currentDay = review.dateSubmitted.split(/[ ,]+/)[1];
      const currentMonth = convertMonthToNum(review.dateSubmitted.split(/[ ,]+/)[0]);
      const currentYear = review.dateSubmitted.split(/[ ,]+/)[2];
      if (sortDates) {
        if (sortDates[currentYear]) {
          if (sortDates[currentYear][currentMonth]) {
            console.log(sortDates);
            sortDates[currentYear][currentMonth][currentDay] = review.id;
          } else {
            let day = {};
            day[currentDay] = review.id;
            sortDates[currentYear][currentMonth] = day;
          }} else {
          let day = {};
          let month = {};
          day[currentDay] = review.id;
          month[currentMonth] = day;
          sortDates[currentYear] = month;
        }}
      }
    )
    for (var key in sortDates) {
      for (var key2 in sortDates[key]) {
        for (var key3 in sortDates[key][key2]) {
          reviewIds.push(sortDates[key][key2][key3])
        }
      }
    }

    const start = reviewIds.length - 1;
    for (let i = start; i > -1; i--) {
      allReviews.push(props.allReviews[reviewIds[i] - 1]);
    }
    console.log(allReviews)
    props.changeRendered(allReviews);
  }

  if (props.allReviews.length && props.allReviews[0].id === 1) {
    sortByOldest(props.allReviews);
  }
    // if (input === options[0]) {

    // };
    // if (input === options[1]) {

    // };
    // if (input === options[2]) {

    // };
    // if (input === options[3]) {

    // };
    // if (input === options[4]) {

    // };
  // const changeRendered = (input) => {
  //   let allReviews = props.allReviews;
  //   let reviews = [];

  // }

  return (
    <div className={styles.sortBySection}>
      <span>Reviewed by {props.allReviews.length} customers</span>
      <select className={styles.sortByMenu} onChange={(event) => {
        setSortOption(event.target.value);
        changeRendered(props.renderedReviews);
      }}>
        <optgroup label="Sort Reviews By:">
          <option>Most Recent</option>
          <option>Highest Rated</option>
          <option>Lowest Rated</option>
          <option>Most Helpful</option>
          <option>Oldest</option>
        </optgroup>
      </select>
    </div>
  );
};

export default SortBy;

