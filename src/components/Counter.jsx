import { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 }
    case 'decrement': return { count: state.count - 1 }
    case 'reset': return { count: 0 }
    default: return state
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div className="section">
      <h2>Contador (useReducer)</h2>
      <p className="count-display">{state.count}</p>
      <div className="btn-row">
        <button onClick={() => dispatch({ type: 'decrement' })}>−</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      </div>
    </div>
  )
}

export default Counter
