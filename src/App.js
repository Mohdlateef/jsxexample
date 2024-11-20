import logo from './logo.svg';
import './App.css';
import Test1 from './test1';
import Incriment from './incriment';
import { useState } from 'react';
function App() {
  let [count,setcount]=useState(0)
  // console.log(setcount,8)
  return (
    <div className="App">
  {/* <Test1>
    <h1>hey how are you </h1>
    <h2>i am good what about you</h2>
    <h3>i am also fine what are you doing now</h3>
  </Test1> */}
  <Incriment setcount={setcount} count={count}></Incriment>
    </div>
  );
}

export default App;
