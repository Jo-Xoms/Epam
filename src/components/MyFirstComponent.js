import React from 'react';

function MyFirstComponent() {
  const handleClick = () => {
    alert('My first alert!');
  };

  return (
    <div>
      <p>Hello, React!</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default MyFirstComponent;