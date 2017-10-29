import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/header';
import Home from './home';
import EventDetail from './events/event/event-detail';
import School from './school';

const App = () => (
  <Router>
    <div>
      <Header />
      <br/>
      <Route exact path="/" component={Home} />
      <Route path="/events/:eventId" component={EventDetail} />
      <Route path="/school/:schoolId" component={School} />
    </div>
  </Router>
)
export default App;