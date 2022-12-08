import { configureStore } from '@reduxjs/toolkit';

function App() {
  const initialState = { value: 0 };
  const counterReducer = (state = initialState, action) => {
    if (action.type === 'counter/increment') {
      return {
        ...state,
        value: state.value + 1
      }
    }
    else if (action.type === 'counter/decrement') {
      return {
        ...state,
        value: state.value - 1
      }
    }
    return state
  }
  const store = configureStore({ reducer: counterReducer });

  const increment = () => {
    store.dispatch({ type: 'counter/increment'});
    console.log(store.getState().value);
  }

  const decrement = () => {
    store.dispatch({ type: 'counter/decrement'});
    console.log(store.getState().value);
  }

  return (
    <>
    <button onClick={increment}>Inc</button>&nbsp;
    <button onClick={decrement}>Dec</button></>
  );
}

export default App;
