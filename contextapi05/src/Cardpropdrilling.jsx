import { useState } from 'react';


function Cardpropdrilling() {
    
    const [count, setCount] = useState(0);
  
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Welcome
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Wishing a good day
            </p>
            <Button count={count} setCount={setCount} />
            <CounterComponent count={count} />
          </div>
        </div>
      </>
    );
  }
  
  function Button({ count, setCount }) {
    return (
      <div className="flex justify-between">
        <Increase count={count} setCount={setCount} />
        <Decrease count={count} setCount={setCount} />
      </div>
    );
  }
  
  function Increase({ count, setCount }) {
    return (
      <button
        className="px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:outline-none"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    );
  }
  
  function Decrease({ count, setCount }) {
    return (
      <button
        className="px-3 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 focus:outline-none"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    );
  }
  
  function CounterComponent({ count }) {
    return <div className="mt-4 text-2xl font-bold">{count}</div>;
  }
  
  export default Cardpropdrilling;
  




