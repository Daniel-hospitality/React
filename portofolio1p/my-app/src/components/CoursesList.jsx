import React from "react";




//////H5 refactoring van func naar Arrow FunC en props destructing/////////
// function CoursesList(props) 
// return props.courses.map(function(course) {//////////////////////////
// const CoursesList = ({courses}) => {
const CoursesList = (props) => {
  
  return props.courses.map(course => {  
    return (
      <div key={course.id}>
        <span>
          <a href={course.url}>
            <h4>{course.title}</h4>
          </a>
        </span>
        <span>
          By <strong>{course.author}</strong>
        </span>

        <span>| Video Hours: {course.video_rec} </span>
        <span>| Rating: {course.rating}</span>
        <br />
        <br />
      </div>
    );
  });
}

export default CoursesList;
