import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker/locale/en_US';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  render() {
    return (
      <div>
        <h1>Guitar Reviews</h1>
      </div>
    )
  }
}


export default App;