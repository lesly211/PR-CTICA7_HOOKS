import { useState, useMemo, useCallback, useRef } from 'react'
import useFetch from '../hooks/useFetch'

function PostList() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
  const [search, setSearch] = useState('')
  const inputRef = useRef(null)

  const filtered = useMemo(() => {
    if (!data) return []
    return data.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
    )
  }, [data, search])

  const handleFocus = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  if (loading) return <p className="msg">Cargando posts...</p>
  if (error) return <p className="msg error">Error: {error}</p>

  return (
    <div className="section">
      <h2>Posts (useFetch + useMemo + useCallback + useRef)</h2>
      <div className="search-row">
        <input
          ref={inputRef}
          type="text"
          placeholder="Buscar post..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <p className="count">{filtered.length} resultados</p>
      <ul className="post-list">
        {filtered.map(post => (
          <li key={post.id}>
            <strong>#{post.id}</strong> {post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
