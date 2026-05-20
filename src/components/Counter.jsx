import { useReducer, useEffect, useCallback, useMemo, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import useLogger from '../hooks/useLogger'

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 }
    case 'decrement': return { count: state.count - 1 }
    case 'reset':     return { count: 0 }
    default:          return state
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  const { dark, setDark } = useTheme()
  const inputRef = useRef(null)
  const renders = useLogger(state.count)

  useEffect(() => {
    document.title = `Contador: ${state.count}`
  }, [state.count])

  const handleIncrement = useCallback(() => {
    dispatch({ type: 'increment' })
  }, [])

  const handleDecrement = useCallback(() => {
    dispatch({ type: 'decrement' })
  }, [])

  const handleReset = useCallback(() => {
    dispatch({ type: 'reset' })
    inputRef.current?.focus()
  }, [])

  const mensaje = useMemo(() => {
    if (state.count > 0) return '¡Positivo!'
    if (state.count < 0) return 'Negativo'
    return 'En cero'
  }, [state.count])

  return (
    <div className="card">
      <div className="top-bar">
        <h1>Contador React Hooks</h1>
        <button className="btn-theme" onClick={() => setDark(d => !d)}>
          {dark ? '☀️' : '🌙'}
        </button>
      </div>

      <p className="renders">Renders: {renders}</p>

      <p className="count">{state.count}</p>
      <p className="mensaje">{mensaje}</p>

      <div className="btns">
        <button onClick={handleDecrement}>−</button>
        <button className="reset" onClick={handleReset} ref={inputRef}>Reset</button>
        <button onClick={handleIncrement}>+</button>
      </div>

      <div className="info">
        <small>useReducer · useEffect · useContext · useRef · useMemo · useCallback · useLogger</small>
      </div>
    </div>
  )
}

export default Counter
