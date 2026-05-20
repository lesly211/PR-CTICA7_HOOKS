import { ThemeProvider, AuthProvider, useTheme } from './context/AppContext'
import Header from './components/Header'
import Counter from './components/Counter'
import PostList from './components/PostList'
import ContactForm from './components/ContactForm'

function AppContent() {
  const { dark } = useTheme()

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <Header />
      <main className="main">
        <Counter />
        <PostList />
        <ContactForm />
      </main>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
