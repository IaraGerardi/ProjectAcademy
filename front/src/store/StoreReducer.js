
 const types={
    authLogin:'auth - Login',
    authLogout:'auth - Logout'
 }

/*  obtengo usuario del localstorage */
   let userStorage=localStorage.getItem('usuario');
 
 

 const obtengoUser=()=>{
  
  if(userStorage !== null){
    return true
  }else{
    return false
  }
 
 }    
 
 const initialStore = {
    logged: obtengoUser(),
};


const storeReducer=(state, action)=> {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        logged:true
        };
    case types.authLogout:
      return {
        ...state,
        logged:false};
    default:
      return state; // retorno el estado previo si ningu type concide
  }

}
export default storeReducer;
export {initialStore,types};























/* 
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
 */

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