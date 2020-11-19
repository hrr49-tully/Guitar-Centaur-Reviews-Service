const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const App = require('../client/App.jsx').default;
const ReviewEntry = require('../client/components/ReviewEntry.jsx').default;
const ReviewList = require('../client/components/ReviewsList.jsx').default;
const React = require('react');
enzyme.configure({ adapter: new Adapter() });


let review = {
  id: 100,
  title: 'Berkshire Hampshire Sleek Granite Shirt',
  contents: 'Action items identity rustic car ',
  stars: 4,
  user: 'Gerhard Bradtke',
  experience: 'Experienced',
  dateSubmitted: 'Oct 31,1910',
  location: 'Port Corine, Mississippi',
  upVotes: 48,
  downVotes: 24,
  pros: 'Good Feel,Solid Electronics,Good Tone,Fun To Play',
  cons: 'Flat Sound',
  wouldRecommend: 1
};

it('renders App component without crashing', () => {
  enzyme.shallow(<App />);
});

it('renders the ReviewList component', () => {
  enzyme.shallow(<ReviewList reviews={[review]} />);
});

it('renders the ReviewEntry component', () => {
  enzyme.shallow(<ReviewEntry review={review} />);
});

it('renders the name of reviewer in ReviewEntry component', () => {
  const wrapper = enzyme.shallow(<ReviewEntry review={review} />);
  const user = 'Gerhard Bradtke';
  expect(wrapper.contains(user)).toEqual(true);
});

it('renders Guitar Reviews header in App component', () => {
  const wrapper = enzyme.shallow(<App />);
  const welcome = <h1>Guitar Reviews</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
