import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement,increment,incrementByAmount,incrementAsync,selectCount } from './counterSlice'
export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')
  return (
    <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

/*old code */
/*
  const initialState = { storedValue: 0 };
  const counterReducer = (state = initialState, action) => {
    if (action.type === 'counter/increment') {
      return {
        ...state,
        storedValue: state.storedValue + 1
      }
    }
    else if (action.type === 'counter/decrement') {
      return {
        ...state,
        storedValue: state.storedValue - 1
      }
    }
    else { return state; }
  }
  const myStore = configureStore({ reducer: counterReducer });
  const increment = () => { myStore.dispatch({ type: 'counter/increment'}); console.log(myStore.getState().storedValue); }
  const decrement = () => { myStore.dispatch({ type: 'counter/decrement'}); console.log(myStore.getState().storedValue); }
  return (<>{myStore.getState().storedValue}<button onClick={increment}>Inc</button>&nbsp;<button onClick={decrement}>Dec</button></>
  );
*/
/*ends*/