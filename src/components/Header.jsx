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
    </header>
  )
}

export default Header
