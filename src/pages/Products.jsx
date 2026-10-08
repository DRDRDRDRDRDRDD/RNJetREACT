import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import { productsData } from '../data/productsData'

import '../styles/products.css' 

function Products() {
  const packagePrinters = productsData.filter(p => p.category === 'Принтеры с системой пакетной печати')
  const cartridgePrintersSmall = productsData.filter(p =>
    p.category === 'Принтеры с картриджной системой' &&
    ['RNJet 100', 'RNJet 200', 'RNJet EP-6H+', 'RNJet 100 XL', 'RNJet 200 XL',
      'RNJet H1+', 'RNJet H2+', 'RNJet H2 ST', 'RNJet H4 ST', 'RNJet T1', 'RNJet T2 ST'].includes(p.name)
  )
  const cartridgePrintersLarge = productsData.filter(p =>
    p.category === 'Принтеры с картриджной системой' &&
    ['RNJet 72', 'RNJet 140', 'RNJet 72 XL', 'RNJet 140 XL', 'RNJet 288 XL', 'RNJet 140 BC'].includes(p.name)
  )

  const renderCard = (product, className = 'product-card', infoClass = 'product-info', btnClass = 'rn-button') => (
    <div key={product.name} className={className}>
      <div className={className.includes('date') ? 'product-image-date' : 'product-image'}>
        <img src={`/assets/images/${product.name.replace(/\s/g, '')}.png`} alt={product.name} />
      </div>
      <div className={infoClass}>
        <h3>{product.name}</h3>
        <p className={className.includes('date') ? 'product-description-date' : 'product-description'}>{product.description}</p>
        <Link to={`/products/${product.slug}`} className={btnClass}>ПОДРОБНЕЕ</Link>
      </div>
    </div>
  )

  return (
    <>
      <section className="categories-section">
        <div className="container">
          <div className="categories-header">
            <h1>РЕШЕНИЕ ДЛЯ КОДИРОВАНИЯ И МАРКИРОВКИ</h1>
            <p>Промышленный струйный принтер</p>
          </div>
        </div>
      </section>

      <div className="heading">
        <h2>Струйные кодировщики для печати мелких символов</h2>
      </div>

      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h1>Принтеры с системой пакетной печати</h1>
            <p>Система для оптовой упаковки | Идеально подходит для первичной упаковки | Встраиваемые кодировщики</p>
            <div className="divider"></div>
          </div>
          <div className="products-grid">
            {packagePrinters.slice(0, 2).map(p => renderCard(p))}
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h1>Принтеры с картриджной системой</h1>
            <p>Устройство для кодирования даты | Кодирование и маркировка мелкими символами</p>
            <div className="divider"></div>
          </div>
          <div className="products-grid-date">
            {cartridgePrintersSmall.slice(0, 3).map(p => renderCard(p, 'product-card-date', 'product-info-date', 'add-to-cart'))}
          </div>
          <div className="products-grid" style={{ marginTop: '30px' }}>
            {cartridgePrintersSmall.slice(3).map(p => renderCard(p))}
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h1>Принтеры с системой пакетной печати</h1>
            <p>Система для массовой печати | Идеально подходит для струйной печати крупными символами</p>
            <div className="divider"></div>
          </div>
          <div className="products-grid">
            {packagePrinters.slice(2).map(p => renderCard(p))}
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h1>Принтеры с картриджной системой</h1>
            <p>Устройство для кодирования даты | Кодирование и маркировка крупными символами</p>
            <div class="divider"></div>
          </div>
          <div className="product-grid-date">
            {cartridgePrintersLarge.slice(0, 2).map(p => renderCard(p, 'product-card-date', 'product-info-date', 'add-to-cart'))}
          </div>
          <div className="products-grid" style={{ marginTop: '30px' }}>
            {cartridgePrintersLarge.slice(2).map(p => renderCard(p))}
          </div>
        </div>
      </section>

      <section className="container-info">
        <div className="information">
          <div className="head-information">
            <h2>Отрасли применения принтеров RN Mark.</h2>
            <img src="/assets/images/Фон2.png" alt="" />
          </div>
          <ul>
            <li>Автомобильный</li>
            <li>Напитки (в банках и бутылках)</li>
            <li>Потребительские товары в упаковке</li>
            <li>Электроника (печатные платы (PCB))</li>
            <li>Фармацевтическая промышленность (UDI)</li>
            <li>Изделия из пластмассы и резины</li>
          </ul>
        </div>
      </section>

      <ContactForm />
    </>
  )
}

export default Products