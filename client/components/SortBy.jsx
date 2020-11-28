import React from 'react';
import styles from './css/SortByStyles.css';

const SortBy = () => {
  const [sortOption, setSortOption] = React.useState('Most Recent');
  const switchSort = (input) => {
    setShowOptions(input);
  };
  const options = ['Most Recent', 'Most Helpful', 'Highest Rated', 'Lowest Rated', 'Oldest'];

  return (
    <div>
      <div>Reviewed by {props.reviews.length} customers</div>
      <select className={styles.sortByMenu}>
        <optgroup label="Sort Reviews By:">
          <option>Most Recent</option>
          <option>Most Helpful</option>
          <option>Highest Rated</option>
          <option>Lowest Rated</option>
          <option>Oldest</option>
        </optgroup>
      </select>
    </div>
  );
};


export default SortBy;