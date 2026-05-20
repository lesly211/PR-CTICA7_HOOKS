import { ThemeProvider, useTheme } from './context/ThemeContext'
import Counter from './components/Counter'

function AppContent() {
  const { dark } = useTheme()
  return (
    <div className={dark ? 'app dark' : 'app'}>
      <Counter />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
