import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'

function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const burgerRef = useRef(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (burgerRef.current && !burgerRef.current.contains(e.target)) {
        setBurgerOpen(false)
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const dropdownData = {
    'Продукты': [
      { text: 'Продукты', submenu: [] },
      {
        text: 'Термоструйные принтеры',
        submenu: [
          {
            text: 'RNJet T Series',
            submenu: [
              'Датокодер RNJet T1',
              'Термоструйный принтер – RNJet T2 ST',
              'Широкоформатный струйный принтер TIJ – RNJet T4 ST'
            ]
          },
          {
            text: 'RNJet H Series',
            submenu: [
              'RNJet H1 Малосимвольный быстросохнущий маркировщик даты',
              'RNJet H2 Малосимвольный принтер с двумя печатающими головками'
            ]
          }
        ]
      },
      { text: 'Пьезопринтеры для пакетной печати', submenu: ['RNJet 100+', 'RNJet 200+', 'RNJet E1-72+', 'RNJet E1-140+'] },
      { text: 'Пьезопринтеры на основе картриджей', submenu: ['RNJet 100', 'RNJet 100 XL', 'RNJet 200', 'RNJet 200 XL', 'RNJet 72', 'RNJet 140', 'RNJet 72 XL', 'RNJet 140 XL', 'RNJet 140 BC', 'RNJet 288 XL'] },
      { text: 'Принтер для яиц RNJet EP-6H+', submenu: [] },
      { text: 'Чернила для промышленных струйных принтеров', submenu: [] }
    ],
    'Поддержка': [
      { text: 'Техническая поддержка', submenu: [] },
      { text: 'Часто задаваемые вопросы', submenu: [] },
      { text: 'Брошюры', submenu: [] }
    ],
    'Компания': [
      { text: 'О RN Mark', submenu: [] },
      { text: 'Блог', submenu: [] },
      { text: 'Дистрибьюторы', submenu: [] },
      { text: 'Новости и пресс-релизы', submenu: [] },
      { text: 'Контакт', submenu: [] }
    ]
  }

  const renderSubmenu = (items, level = 0) => {
    if (!items || items.length === 0) return null
    return (
      <div className="dropdown-submenu" style={{ marginLeft: `${level * 15}px`, display: 'none' }}>
        {items.map((item, idx) => {
          if (typeof item === 'string') {
            return (
              <Link key={idx} to="#" style={{ fontSize: '13px', padding: '5px 15px', display: 'block' }}>
                {item}
              </Link>
            )
          }
          return (
            <div key={idx} className="dropdown-item-container">
              <Link
                to="#"
                className="dropdown-main-link"
                style={{ fontSize: '13px' }}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  const submenu = e.currentTarget.nextSibling
                  if (submenu) {
                    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'
                    const arrow = e.currentTarget.querySelector('.submenu-arrow')
                    if (arrow) arrow.style.transform = submenu.style.display === 'block' ? 'rotate(90deg)' : 'rotate(0deg)'
                  }
                }}
              >
                {item.text}
                {item.submenu?.length > 0 && <span className="submenu-arrow">▶</span>}
              </Link>
              {renderSubmenu(item.submenu, level + 1)}
            </div>
          )
        })}
      </div>
    )
  }

  const handleDropdownClick = (menuName, e) => {
    e.preventDefault()
    e.stopPropagation()
    setDropdownOpen(dropdownOpen === menuName ? null : menuName)
  }

  return (
    <header>
      <div className="container">
        <div className="top-bar">
          <div className="logo">
            <Link to="/">
              <img src="/assets/images/Логотип.svg" alt="RN Mark" />
            </Link>
          </div>
          <nav>
            <ul className="nav-menu">
              {Object.keys(dropdownData).map((menuName) => (
                <li key={menuName} className="menu-list">
                  <a href="#" onClick={(e) => handleDropdownClick(menuName, e)}>
                    {menuName}
                    <img className="arrow" src="/assets/images/СтрелочкаН.svg" alt="" />
                  </a>
                </li>
              ))}
              <li className="menu-list"><a href="#">Онлайн покупки</a></li>
            </ul>
          </nav>

          <SearchBar />

          <img
            src="/assets/images/Меню.svg"
            id="menu"
            alt="Menu"
            onClick={(e) => {
              e.stopPropagation()
              setBurgerOpen(!burgerOpen)
            }}
          />

          {burgerOpen && (
            <div className="burger-menu" style={{ display: 'flex' }} ref={burgerRef}>
              <Link to="/application">Применения и рынки</Link>
              <Link to="#">Решения</Link>
              <Link to="/products">Продукты</Link>
              <Link to="#">Поддержка</Link>
              <Link to="/about">Компания</Link>
              <Link to="#">Онлайн покупки</Link>
            </div>
          )}
        </div>

        {dropdownOpen && (
          <div className="click-dropdown" style={{ display: 'block' }} ref={dropdownRef}>
            {dropdownData[dropdownOpen]?.map((item, idx) => (
              <div key={idx} className="dropdown-item-container">
                <Link to="#" className="dropdown-main-link">
                  {item.text}
                  {item.submenu?.length > 0 && <span className="submenu-arrow">▶</span>}
                </Link>
                {renderSubmenu(item.submenu, 1)}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header