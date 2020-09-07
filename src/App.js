import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import fakeData from './data/fakeData.json';
import Course from './components/Course/Course';
import Cart from './components/Cart/Cart';

function App() {
  const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
shuffle(fakeData);

const first15 = fakeData.slice(0,15);
const [courses, setCourses] = useState(first15);

const [cart, setCart] = useState([]);
const enrollHandler = (course) => {
  const newCart = [...cart, course];
  setCart(newCart);
}

  return (
    <div>
      <Header cart={cart}></Header>
      
      <div className="main">
        <div className="course-section">
          {
            courses.map(course => <Course course={course} enrollHandler={enrollHandler}> </Course> )
          }
        </div>

        <div className="cart-section">
            <Cart cart={cart}></Cart>
        </div>
      </div>


    </div>
  );
}

export default App;
