import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ReviewSummary from './components/ReviewSummary.jsx';
import ProsConsList from './components/ProsConsList.jsx';
import Histogram from './components/Histogram.jsx';
import SortBy from './components/SortBy.jsx';
import ReviewsList from './components/ReviewsList.jsx';

import styles from './components/css/ReviewsStyles.css';
import pcStyles from './components/css//ReviewSnapshot.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderedReviews: [],
      // reviews: [],
      allReviews: [],
      currentSort: [],
      pros: [],
      cons: [],
      number: Math.floor(Math.random() * 30) + 62,
    }
    this.showMoreReviews = this.showMoreReviews.bind(this);
    this.changeRendered = this.changeRendered.bind(this);
    this.sortByUpVotes = this.sortByUpVotes.bind(this);
    this.sortByStars = this.sortByStars.bind(this);
  }

  //// use this for a onClick of 'Show More!' reviews ////
  showMoreReviews(reviews) {
    let startIndex = this.state.renderedReviews.length;
    let tenMore = this.state.allReviews.slice(startIndex, startIndex + 10)
    let totalReviews = this.state.renderedReviews.concat(tenMore);
    this.setState({
      currentSort: totalReviews,
      renderedReviews: totalReviews,
    });
  };

  changeRendered(input) {
    let allReviews = this.state.allReviews;
    // if (!this.state.reviews.length) {
    //   this.setState({
    //     reviews: this.state.allReviews
    //   });
    // };
    if (input.length === this.state.allReviews.length) {
      this.setState({
        allReviews: input
      });
    }
    this.setState({
      renderedReviews: input.slice(0, 10),
      currentSort: input.slice(0, 10)
    });
  };

  sortByStars(endpoint) {
    axios.get(`api/reviews/stars/${endpoint}`)
    .then(res => {
      if (res.data.length === 100) {
        this.setState({
          allReviews: res.data,
          currentSort: res.data,
          renderedReviews: []
        });
        this.showMoreReviews();
      } else {
        this.setState({
          currentSort: res.data
        });
      };
    })
    .catch(err => {
      console.error(`get ${endpoint} stars failed: `, err);
    });
  };

  sortByUpVotes() {
    axios.get('api/reviews/sort/upVotes')
    .then(res => {
      this.setState({
        allReviews: res.data,
        currentSort: res.data,
        renderedReviews: []
      });
      this.showMoreReviews();
    })
    .catch(err => {
      console.error('sort by upVotes failed: ', err);
    });
  };


  getData(filepath, stateValue) {
    let url = {};
    url.filepath = filepath;
    axios.get(filepath)
    .then(res => {
      var newState = {};
      newState[stateValue] = res.data;
      this.setState(newState);
    })
    .catch(err => {
      console.error('get request failed: ', err);
    });
  }

  componentDidMount() {
    this.getData('/api/reviews/reviews', 'allReviews');
    this.getData('/api/reviews/pros', 'pros');
    this.getData('/api/reviews/cons', 'cons');
  }

  render() {
    return (
      <div className={styles.body}>
        <h1>Review Snapshot</h1>
        <ReviewSummary />
        <div className={pcStyles.snp_section} >
          <Histogram sortByStars={this.sortByStars} />
          <ProsConsList prosCons={this.state.pros} />
          <ProsConsList prosCons={this.state.cons} />
        </div>
        <SortBy renderedReviews={this.state.renderedReviews} reviews={this.state.allReviews} changeRendered={this.changeRendered} sortByStars={this.sortByStars} sortByUpVotes={this.sortByUpVotes} number={this.state.number} />
        <ReviewsList reviews={this.state.currentSort} />
        <button onClick={ () => {this.showMoreReviews(this.state.allReviews)} }>Show More!</button>
      </div>
    )
  }
}


export default App;