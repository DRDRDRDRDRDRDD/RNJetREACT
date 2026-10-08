import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { productsData } from '../data/productsData'

function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const containerRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const search = (term) => {
    if (!term.trim()) {
      setShowDropdown(false)
      return
    }
    const t = term.toLowerCase().trim()
    const filtered = productsData.filter(p =>
      p.name.toLowerCase().includes(t) ||
      p.description.toLowerCase().includes(t) ||
      p.category.toLowerCase().includes(t)
    ).slice(0, 5)
    setResults(filtered)
    setShowDropdown(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    const exact = productsData.find(p => p.name.toLowerCase() === query.toLowerCase())
    if (exact) {
      navigate(`/products/${exact.slug}`)
    } else {
      search(query)
    }
  }

  return (
    <div className="searchContainer" ref={containerRef} style={{ position: 'relative' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Поиск..."
          className="searchInput"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            search(e.target.value)
          }}
        />
        <button type="submit" className="searchButton">
          <img src="/assets/images/Лупа.svg" width="30" height="30" className="searchIcon" alt="Поиск" />
        </button>
      </form>

      {showDropdown && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'white',
          border: '1px solid #ddd',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          maxHeight: '400px',
          overflowY: 'auto',
          zIndex: 9999,
          marginTop: '5px'
        }}>
          {results.length === 0 ? (
            <div style={{ padding: '12px 16px', color: '#666', textAlign: 'center', fontStyle: 'italic' }}>
              Товары не найдены
            </div>
          ) : (
            results.map((product, idx) => (
              <a
                key={idx}
                href={`/products/${product.slug}`}
                onClick={(e) => {
                  e.preventDefault()
                  navigate(`/products/${product.slug}`)
                  setShowDropdown(false)
                  setQuery('')
                }}
                style={{
                  display: 'block',
                  padding: '10px 16px',
                  textDecoration: 'none',
                  color: '#333',
                  borderBottom: '1px solid #eee'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              >
                <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>{product.name}</div>
                <div style={{ fontSize: '12px', color: '#e31e24', marginBottom: '2px' }}>{product.category}</div>
                <div style={{ fontSize: '11px', color: '#666', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {product.description}
                </div>
              </a>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar