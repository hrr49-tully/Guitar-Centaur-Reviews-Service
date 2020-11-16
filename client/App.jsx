import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker/locale/en_US';
import axios from 'axios';
import ReviewsList from './components/ReviewsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      pros: [],
      cons: []
    }
  }

  componentDidMount() {
    axios.get('guitar/reviews')
      .then(res => {
        this.setState(state => ({
          reviews: res.data
        }))
      })
  }

  render() {
    return (
      <div>
        <h1>Guitar Reviews</h1>
        <ReviewsList />
      </div>
    )
  }
}


export default App;