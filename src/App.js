import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
