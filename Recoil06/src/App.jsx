/*Recoil is a state management library for React that provides a way to manage the state of an application in a more flexible and scalable manner. It allows you to create and manage shared state that can be accessed and modified from anywhere in your component tree. Here are some key features of Recoil:

Atoms: These are units of state. You can think of an atom as a piece of state that can be read from and written to from any component. When an atom is updated, all components that are subscribed to that atom are re-rendered.

Selectors: These are pure functions that allow you to compute derived state. They can read the state of atoms and other selectors and transform or filter the data.

Efficient Re-renders: Recoil ensures that only the components that depend on the changed state are re-rendered, making it efficient for large applications.

Concurrency and Asynchronous Data: Recoil supports asynchronous data queries and can handle concurrent requests seamlessly, making it easier to work with async data fetching.*/
//import { createContext, useContext, useState } from 'react';

import { RecoilRoot, atom, useSetRecoilState, useRecoilValue } from 'recoil';

function App() {

    return (
      <>

      <RecoilRoot>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              COUNTER APLLICATION
            </h5>
           
            <Button/>
            <CountComponent />
          </div>
        </div>
        </RecoilRoot>
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
    
    const setCount = useSetRecoilState(countState)
    
    return (
      <button
        className="px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:outline-none"
        onClick={() => {
          setCount((count)=>count + 1);
        }}
      >
        Increase Counter
      </button>
    );
  }
  
  function Decrease() {

    const setCount = useSetRecoilState(countState)

    return (
      <button
        className="px-3 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 focus:outline-none"
        onClick={() => {
          setCount((count)=>count- 1);
        }}
      >
        Decrease Counter
      </button>
    );
  }
  
  function CountComponent() {
   const count = useRecoilValue(countState) //just the value will re-render
    
    return <div className="mt-4 text-2xl font-bold">{count}</div>;
  }
    
  export default App;
  

// let us declare the atom ..
//atom = state

  const countState = atom({
    key:"countState",
    default:0,
  })