import { createContext, useContext, useState } from 'react';

//context api
//it sorts of defind your state outside of the top level component
const CounterContext = createContext()

function Contextapi() {
    const [count, setCount] = useState(0);
  
    return (
      <>

      <CounterContext.Provider  value={{  //we have to give 2 {}
        count:count,
        setCount:setCount
      }}>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             HELLO
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Wishing a good day
            </p>
            <Button/>
            <CountComponent />
          </div>
        </div>
        </CounterContext.Provider>
      </>
    );
  }
  
  function Button() {
    return (
      <div className="flex justify-between">
        <Increase/>
        <Decrease/>
      </div>
    );
  }
  
  function Increase() {

    const{count,setCount}=useContext(CounterContext)// wee have define theem globally so whoever want to use it they can easily access to it without the use of prop drilling

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
  
  function Decrease() {

    const{count,setCount}=useContext(CounterContext)

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
  
  function CountComponent() {

    const {count}=useContext(CounterContext)
    return <div className="mt-4 text-2xl font-bold">{count}</div>;
  }
  
  export default Contextapi;  