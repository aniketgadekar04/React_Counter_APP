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
        <button
          onClick={decHandler}
          className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          -
        </button>
        <div className="font-bold gap-12 text-4xl">{count}</div>
        <button onClick={incHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>
      </div>
      <button className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg"  onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
