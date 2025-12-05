import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function decHandler() {
    setCount(count - 1);
  }

  function incHandler() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col bg-[#344151] gap-10">
      <div className="text-[#0398d4] font-medium text-2xl ">
        Increment && Decrement
      </div>
      <div className="bg-[#fff] flex justify-center gap-12 text-[#344151] py-3 text-[25px] rounded-sm">
        <button onClick={decHandler}>+</button>
        <div>{count}</div>
        <button onClick={incHandler}>-</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
