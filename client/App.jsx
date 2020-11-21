import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ReviewsList from './components/ReviewsList.jsx';
import ProsList from './components/ProsList.jsx';
import ConsList from './components/ConsList.jsx';
import ReviewHistogram from './components/ReviewHistogram.jsx';

import styles from './components/css/ReviewsStyles.css';
import pcStyles from './components/css//ReviewSnapshot.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedReviews: [],
      allReviews: [],
      pros: [],
      cons: []
    }
    this.showMoreReviews = this.showMoreReviews.bind(this);
  }

  //// use this for a onClick of 'Show More!' reviews ////
  showMoreReviews(reviews) {
    let startIndex = this.state.renderedReviews.length;
    let tenMore = this.state.allReviews.slice(startIndex, startIndex + 10)
    let totalReviews = this.state.renderedReviews.concat(tenMore);
    this.setState(state => ({
      renderedReviews: totalReviews,
    }))
  };

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
      }
    })
    .catch(err => {
      console.error('reviews get request failed: ', err);
    });
  }

  componentDidMount() {
    this.getData('/api/reviews', 'allReviews', this.showMoreReviews);
    this.getData('/api/pros', 'pros');
    this.getData('/api/cons', 'cons');
  }

  render() {
    return (
      <div className={styles.body}>
        <h1>Guitar Reviews</h1>
        <div className={pcStyles.snp_section} >
          <ReviewHistogram />
          <ProsList pros={this.state.pros} />
          <ConsList cons={this.state.cons} />
        </div>
        <br/><br/>
        <ReviewsList reviews={this.state.renderedReviews}/>
        <button onClick={() => {this.showMoreReviews(this.state.allReviews)}}>Show More!</button>
      </div>
    )
  }
}


export default App;