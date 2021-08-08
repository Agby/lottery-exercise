import React, { Suspense } from 'react';
import LotteryIndexPage from './pages/LotteryIndexPage';

function App() {
  return (
    <Suspense fallback={<>loading</>}>
      <div className="App">
        <header className="App-header">
          <LotteryIndexPage />
        </header>
      </div>
    </Suspense>
  );
}

export default App;
