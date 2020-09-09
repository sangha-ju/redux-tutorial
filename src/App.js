import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import SampleContainer from './containers/SampleContainer';

const App = () => {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <TodosContainer />
      <hr />
      <SampleContainer />
    </div>
  );
}

export default App;
