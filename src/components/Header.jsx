import { useTheme, useAuth } from '../context/AppContext'

function Header() {
  const { dark, setDark } = useTheme()
  const { user } = useAuth()

  return (
    <header className="header">
      <div>
        <h1>React Hooks</h1>
        <span className="subtitle">IS093A - Semana 07</span>
      </div>
      <div className="header-right">
        <span className="user">👤 {user.name}</span>
        <button onClick={() => setDark(d => !d)}>
          {dark ?  'Claro' : 'Oscuro'}
        </button>
      </div>
    </header>
  )
}

export default Header
