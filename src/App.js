import React from 'react';

import './i18n/i18n';

import Loading from 'components/Loading';
import Home from './Home';

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Home />
    </React.Suspense>
  );
}

export default App;
