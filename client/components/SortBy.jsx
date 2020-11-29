import React from 'react';
import styles from './css/SortByStyles.css';

const SortBy = (props) => {
  const [sortedNewest, setSortedNewest] = React.useState(false);
  const [sortedOldest, setSortedOldest] = React.useState(false);
  const options = ['Most Recent', 'Oldest', 'Most Helpful', 'Highest Rated', 'Lowest Rated'];
  const reviews = props.reviews;

  const sortByCategory = () => {

  }
  const convertMonthToNum = (month) => {
    let result = month === 'Jan' ? 1 :
    month === 'Feb' ? 2 :
    month === 'Mar' ? 3 :
    month === 'Apr' ? 4 :
    month === 'May' ? 5 :
    month === 'Jun' ? 6 :
    month === 'Jul' ? 7 :
    month === 'Aug' ? 8 :
    month === 'Sep' ? 9 :
    month === 'Oct' ? 10 :
    month === 'Nov' ? 11 :
    month === 'Dec' ? 12 : null;
    return result;
  }

  const sortByNewest = () => {
    if (sortedNewest) {
      props.changeRendered(sortedNewest);
      return;
    }
    let reviewIds = [];
    let allReviews = [];
    let sortDates = {};
    reviews.forEach(review => {
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
      allReviews.push(reviews[reviewIds[i] - 1]);
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

  const changeRendered = (selectedOption) => {
    selectedOption === options[0] ? sortByNewest(reviews) :
    selectedOption === options[1] ? sortByOldest(sortedNewest) :
    selectedOption === options[2] ? props.sortByUpVotes() :
    selectedOption === options[3] ? props.sortByStars('desc') :
    selectedOption === options[4] ? props.sortByStars('asc') :
    null;
  }

  reviews.length && reviews[0].id === 1 ? sortByNewest() : null;

  return (
    <div className={styles.sortBySection}>
      <span>Reviewed by {props.number} customers</span>
      <select className={styles.sortByMenu} onChange={(event) => {
        changeRendered(event.target.value);
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

