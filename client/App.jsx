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
      allReviews: [],
      currentSort: [],
      pros: [],
      cons: [],
      number: Math.floor(Math.random() * 30) + 62,
      index: 0,
    }
    this.showMoreReviews = this.showMoreReviews.bind(this);
    this.changeRendered = this.changeRendered.bind(this);
    this.sortByUpVotes = this.sortByUpVotes.bind(this);
    this.sortByStars = this.sortByStars.bind(this);
  }

  //// use this for a onClick of 'Show More!' reviews ////
  showMoreReviews(reviews) {
    let startIndex = this.state.index;
    let tenMore = this.state.allReviews.slice(startIndex, startIndex + 10)
    this.setState({
      currentSort: tenMore,
      index: startIndex + 10
    });
  };

  changeRendered(input) {
    // if (!this.state.reviews.length) {
    //   this.setState({
    //     reviews: this.state.allReviews
    //   });
    // };
    if (input.length === this.state.allReviews.length) {
      this.setState({
        allReviews: input,
      });
    }
    this.setState({
      currentSort: input,
      index: 10
    });
  };

  sortByStars(endpoint) {
    axios.get(`api/reviews/stars/${endpoint}`)
    .then(res => {
      if (res.data.length < this.state.allReviews.length) {
        this.setState({
          currentSort: res.data,
          index: 0
        });
        // this.showMoreReviews();
      } else {
        this.setState({
          allReviews: res.data,
          currentSort: res.data,
          index: 10
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
        index: 10,
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
          <Histogram sortByStars={this.sortByStars} number={this.state.number} />
          <ProsConsList prosCons={this.state.pros} />
          <ProsConsList prosCons={this.state.cons} />
        </div>
        <SortBy reviews={this.state.allReviews} changeRendered={this.changeRendered} sortByStars={this.sortByStars} sortByUpVotes={this.sortByUpVotes} number={this.state.number} />
        <ReviewsList reviews={this.state.currentSort} />
        <button onClick={ () => {this.showMoreReviews(this.state.currentSort)} }>Show More!</button>
      </div>
    )
  }
}


export default App;