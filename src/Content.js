import React from "react";

function Content() {
  const handleNameChange = () => {
    const names = ["bob", "kevin", "dev"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  const handleClick = () => {
    console.log('You clicked it');
  }
  const handleClick2 = (names) => {
    console.log(`${names} was clicked`);
  }
  const handleClick3 = (e) => {
    console.log(e.target);
  }
  return (
    <main>
      <p>Hello </p>
      <button onClick={handleClick}>Click it</button>
      <button onClick={()=> handleClick2('Ajay')}>Click it</button>
      <button onDoubleClick={(e)=> handleClick3(e)}>Double Click it</button>
    </main>
  );
}

export default Content;
