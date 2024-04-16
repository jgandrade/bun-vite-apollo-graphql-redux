import React from 'react';
import { Provider } from 'react-redux';
import RouteWrapper from './routes/RouteWrapper';
import userStore from './stores/userStore';
import '../App.css';

function App(): React.ReactNode {
  return (
    <Provider store={userStore}>
      <RouteWrapper>
        <div>Nav here...</div>
      </RouteWrapper>
    </Provider>
  );
}

export default App;
