import React, {useState, Component } from 'react';
import Function1 from './components/Function1';
import HW from './components/HelloWorld';
import List from './components/Listobject'
  

import CoursesList from './components/CoursesList';

// import React, { Component } from "react";
// import "./styles.css";
import { Transition } from "react-transition-group";




const courses = [
  {
    id: 1,
    title: "React Daniel Arie",
    author: "Daniel",
    video_rec: 80,
    rating: 8,
    url: "http://telegraaf.nl"

  },
  {
    id: 2,
    title: "React Daniel2 Lotus",
    author: "Kees2",
    video_rec: 40,
    rating: 5,
    url: "href"
    
  },
  {
    id: 3,
    title: "React Daniel3 Bloem",
    author: "Jan3",
    video_rec: 49,
    rating: 9,
    url: "href"
    
  }
];
/////Van function naar Arrow Function///////
// function App() {
  const App = () => {
      const [searchText, setSearchText] = useState('');


    const handleSearchInputChange = event => {
      setSearchText(event.target.value);
      // console.log(event);
      // console.log(event.target.value);
    }

    const filteredCourses = courses.filter(course => {
      return course.title.includes(searchText) || course.author.includes(searchText);
    } );
    // const handleSearchInputKeyPress =event => {
    //   if (event.key === 'Enter') {
    //     console.log ('Enter Key pressed! Search Value: ' + event.target.value);
    //   }
    // }
  return (
    <div>
      <HW />
      <Function1 />
      <List />
      
      <h1>List Of Courses</h1>
      <h4>Multiple Components, introductie import export and props</h4>
      <hr />
      <label htmlFor="searchInput">Search: </label>
      {/* <input id="searchInput" type="text" onChange={handleSearchInputChange} /> */}
      {/* <input id="searchInput" type="text" onChange={handleSearchInputChange} onKeyPress={handleSearchInputKeyPress} /> */}
      <input id="SearchInput" type="text" Change={handleSearchInputChange} />

      <CoursesList courses={filteredCourses} /> 
      
    </div>

    
  );
}



export default App;
