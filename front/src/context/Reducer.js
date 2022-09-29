 import React, { useReducer } from 'react'
 



 const initialState = {
    logged: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return {logged: true};
    case 'logout':
      return {logged: false};
    default:
      throw new Error();
  }
}

export const ProbandoReducer=()=> {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.logged)
  return (
    <>
    state: {state.logged}
     
      <button onClick={() => dispatch({type: 'login'})}>Login</button>
      <button onClick={() => dispatch({type: 'logout'})}>Logout</button>
    </>
  );
} 


/* const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
} */