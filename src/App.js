import React from 'react';

function Food({fav}) {
  return <h1>I LOVE {fav}</h1>;
}

const foodlike = [
  {
    name: '김치',
  },
  {
    name: '만두',
  },
  {
    name: '피자',
  },
];

function App() {
 // return <div className="App"/>
  return (
    <div>
      <h1>Hello</h1>
    </div>
    );
}

export default App;
