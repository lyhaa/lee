import React from 'react';
// import './App.css';
import 'weui'
import Header from './component/Header'
import Search from './component/Search'
import Panel from './component/Panel'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Panel></Panel>
    </div>
  );
}

export default App;
