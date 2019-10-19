import React from 'react';
import './App.css';
import UserNameClass from './components/ClassComponent'
import UserNamePure from './components/PureComponent'
import UserNameFC from './components/FanctionalComponent'

const App: React.FC = () => {
  return (
    <div className="App">
      <UserNameClass name={"Class"} />
      <UserNamePure name={"Pure"} />
      <UserNameFC name={"Fanctional"} />
    </div>
  );
}

export default App;
