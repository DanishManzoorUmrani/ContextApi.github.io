import React from 'react'
import ChildA from './ChildA'
import useData from './hooks/useDats'
export default function App() {
  let  Son=useData();
  console.log(Son);
  return (
    <div>
      <h1>{Son}</h1>
      <ChildA />
    </div>
  )
}
