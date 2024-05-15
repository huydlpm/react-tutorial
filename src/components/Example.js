import { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click here</button>
    </>
  );
}

export default Example;
