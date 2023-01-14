import React, {useState} from "react";

function Content() {
  const [name, setName] = useState('Ajay');
  const [count, setCount] = useState(0);
  const handleNameChange = () => {
    const names = ["bob", "kevin", "dev"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };
  const handleClick = () => {
    setCount(count + 1);
    console.log(count)
  }
  const handleClick2 = (names) => {
    console.log(`${names} was clicked`);
  }
  const handleClick3 = (e) => {
    console.log(e.target);
  }
  return (
    <main>
      <p>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click it</button>
      <button onDoubleClick={(e)=> handleClick3(e)}>Double Click it</button>
    </main>
  );
}

export default Content;
