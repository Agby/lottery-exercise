import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LotteryIndexPage from './pages/LotteryIndexPage';
import LotteryResultPage from './pages/LotteryResultPage';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={LotteryIndexPage} />
          <Route path="/result" component={LotteryResultPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
