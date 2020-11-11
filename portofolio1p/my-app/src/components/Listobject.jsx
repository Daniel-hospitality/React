import React from 'react';

const courses = [
  {
    id: 1,
    title: "React Daniel",
    author: "Daniel",
    video_rec: 80,
    rating: 8,
    url: "http://telegraaf.nl"

  },
  {
    id: 2,
    title: "React Daniel2",
    author: "Daniel2",
    video_rec: 40,
    rating: 5,
    url: "href"
    
  },
  {
    id: 3,
    title: "React Daniel3",
    author: "Daniel3",
    video_rec: 49,
    rating: 9,
    url: "href"
    
  }
];

function List() {
  return (
    <div>
      <h1>List Of Courses stap 1 list by Arreys</h1>
      <hr />
      {
        courses.map(function(course) {
          return (
           <div key={course.id}>
            {/* {course.title} */}
            <span>
              <a href={course.url}><h4>{course.title}</h4></a>
            </span>
            <span>
              By <strong>{course.author}</strong>
            </span>

            <span>| Video Hours: {course.video_rec} </span>
            <span>| Rating: {course.rating}</span>
            <br/><br/>
           </div>
          )
        })
      }
      
    </div>
  );
}

export default List;
