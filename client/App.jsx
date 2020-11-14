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
        <h1>WE GOTTA WEBPAGE FAM</h1>
      </div>
    )
  }
}


export default App;