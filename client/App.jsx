import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ReviewSummary from './components/ReviewSummary.jsx';
import ProsList from './components/ProsList.jsx';
import ConsList from './components/ConsList.jsx';
import ReviewHistogram from './components/ReviewHistogram.jsx';
import SortBy from './components/SortBy.jsx';
import ReviewsList from './components/ReviewsList.jsx';

import styles from './components/css/ReviewsStyles.css';
import pcStyles from './components/css//ReviewSnapshot.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedReviews: [],
      reviews: [],
      allReviews: [],
      currentSort: [],
      pros: [],
      cons: []
    }
    this.showMoreReviews = this.showMoreReviews.bind(this);
    this.changeRendered = this.changeRendered.bind(this);
    this.sortByStars = this.sortByStars.bind(this);
  }

  //// use this for a onClick of 'Show More!' reviews ////
  showMoreReviews(reviews) {
    let startIndex = this.state.renderedReviews.length;
    let tenMore = this.state.allReviews.slice(startIndex, startIndex + 10)
    let totalReviews = this.state.renderedReviews.concat(tenMore);
    this.setState({
      renderedReviews: totalReviews,
    });
  };

  changeRendered(input) {
    this.setState({
      reviews: this.state.allReviews,
      allReviews: input,
      currentSort: input
    });
  };

  sortByStars(endpoint) {
    if (arguments[1]) {
      axios.get(`api/reviews/stars/${endpoint}`)
      .then(res => {
        this.setState({
          currentSort: res.data
        });
      })
      .catch(err => {
        console.error(`get ${endpoint} stars failed: `, err);
      });
    }
  }

  getData(filepath, stateValue) {
    let url = {};
    url.filepath = filepath;
    axios.get(filepath)
    .then(res => {
      var newState = {};
      newState[stateValue] = res.data;
      this.setState(newState);
      if (arguments[2]) {
        arguments[2](res.data);
      };
    })
    .catch(err => {
      console.error('get request failed: ', err);
    });
  }

  componentDidMount() {
    this.getData('/api/reviews/reviews', 'allReviews', this.showMoreReviews);
    this.getData('/api/reviews/pros', 'pros');
    this.getData('/api/reviews/cons', 'cons');
  }

  render() {
    return (
      <div className={styles.body}>
        <h1>Review Snapshot</h1>
        <ReviewSummary />
        <div className={pcStyles.snp_section} >
          <ReviewHistogram />
          <ProsList pros={this.state.pros} />
          <ConsList cons={this.state.cons} />
        </div>
        <SortBy renderedReviews={this.state.renderedReviews} allReviews={this.state.allReviews} changeRendered={this.changeRendered} sortByStars={this.sortByStars}/>
        <ReviewsList reviews={this.state.currentSort} />
        <button onClick={ () => {this.showMoreReviews(this.state.allReviews)} }>Show More!</button>
      </div>
    )
  }
}


export default App;