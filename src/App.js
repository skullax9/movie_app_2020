import React from 'react';
import img1 from './images/kimchi.jpg';
import img2 from './images/dongatsu.jpg';
import img3 from './images/sushi.jpg';
import img4 from './images/bibimbap.jpg';
import img5 from './images/ddeok.jpg';

function Food({name,picture,message}) {
  return (
  <div><h2>I love {name}</h2>
  <img src = {picture} alt={message}/>
  </div>)
}

const foodILike = [
  {
    id: 1,
    name: '김치찌개',
    image: img1,
    message: '김치찌개 사진'
  },
  {
    id: 2,
    name: '돈가츠',
    image: img2,
    message: '돈가츠 사진'
  },
  {
    id: 3,
    name: '스시',
    image: img3,
    message: '스시 사진'
  },
  {
    id: 4,
    name: '비빔밥',
    image: img4,
    message: '비빔밥 사진'
  },
  {
    id: 5,
    name: '떡볶이',
    image: img5,
    message: '떡볶이 사진'
  },
];

function renderFood(dish) {
  return <Food id={dish.id} name={dish.name} picture={dish.image} alt={dish.message}/>
}

function App() {
  return (
    <div>
      <h1>{foodILike.map(renderFood)}</h1>
    </div>
    );
}

export default App;
