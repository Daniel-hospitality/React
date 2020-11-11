import React from 'react';


function Function1() {
  function getGreetingMessage() {
    return 'Hello Wolrd from Function1';
  }
 

  return (
    <div>
      <h1>{getGreetingMessage()}</h1>
      
    </div>
  );
}

export default Function1;
