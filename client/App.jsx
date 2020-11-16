import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker/locale/en_US';
import axios from 'axios';
import ReviewsList from './components/ReviewsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedReviews: [],
      allReviews: [],
      pros: [],
      cons: []
    }
  }

  //// use this for a onClick of 'Show More!' reviews ////
  showMoreReviews(reviews) {
    let startIndex = this.state.renderedReviews.length;
    let tenMore = this.state.allReviews.slice(startIndex, startIndex + 10)
    let totalReviews = this.state.renderedReviews.concat(tenMore);
    this.setState(state => ({
      renderedReviews: totalReviews,
    }))
  }

  componentDidMount() {
    axios.get('guitar/reviews')
      .then(res => {
        this.setState(state => ({
          renderedReviews: res.data.slice(0, 10),
          allReviews: res.data
        }))
      })
      .catch(err => {
        console.log('reviews get request failed: ', err);
      })
  }

  render() {
    return (
      <div>
        <h1>Guitar Reviews</h1>
        <ReviewsList reviews={this.state.renderedReviews}/>
        <button onClick={() => {this.showMoreReviews(this.state.allReviews)}}>Show More!</button>
      </div>
    )
  }
}


export default App;