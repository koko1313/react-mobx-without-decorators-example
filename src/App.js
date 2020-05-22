import React from 'react';
import { Provider } from 'mobx-react';
import EmployeesStore from './stores/EmployeesStore';
import Collection from './components/Collection';

function App() {
  return (
    <Provider employees={EmployeesStore}>
      <Collection />
    </Provider>
  );
}

export default App;
