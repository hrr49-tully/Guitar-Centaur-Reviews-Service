import React from 'react';
import styles from './css/SortByStyles.css';

const SortBy = (props) => {
  const [sortOption, setSortOption] = React.useState('Most Recent');
  const [sortedNewest, setSortedNewest] = React.useState(false);
  const [sortedOldest, setSortedOldest] = React.useState(false);
  const switchSort = (input) => {
    setShowOptions(input);
  };
  const options = ['Most Recent', 'Oldest', 'Most Helpful', 'Highest Rated', 'Lowest Rated'];

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

  const sortByNewest = (input) => {
    if (sortedNewest) {
      props.changeRendered(sortedNewest);
      return;
    }
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
    props.changeRendered(allReviews);
    !sortedNewest.length ? setSortedNewest(allReviews) : null;
  }

  const sortByOldest = (reviews) => {
    if (sortedOldest) {
      props.changeRendered(sortedOldest);
      return;
    }
    let reversed = [];
    for (let i = reviews.length - 1; i > -1; i--) {
      reversed.push(reviews[i]);
    }
    props.changeRendered(reversed);
  }

  const changeRendered = (input) => {
    input === options[0] ? sortByNewest(props.allReviews) :
    input === options[1] ? sortByOldest(sortedNewest) :
    null;
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
  props.allReviews.length && props.allReviews[0].id === 1 ? sortByNewest(props.allReviews) : null;

  return (
    <div className={styles.sortBySection}>
      <span>Reviewed by {props.allReviews.length} customers</span>
      <select className={styles.sortByMenu} onChange={(event) => {
        changeRendered(event.target.value);
        setSortOption(event.target.value);
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

