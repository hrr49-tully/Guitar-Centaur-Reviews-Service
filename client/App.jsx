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
    faker.locale = 'en_US';
    for (let i = 0; i < 10; i++) {
      let randomReview = {
        id: i,
        title: faker.lorem.sentence(),
      }
      console.log(randomReview,);
    };
    return (
      <div>
        <h1>WE GOTTA WEBPAGE FAM</h1>
      </div>
    )
  }
}


export default App;