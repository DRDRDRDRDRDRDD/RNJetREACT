import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

import '../styles/home.css' 

function Home() {
  const cards = [
    {
      icon: '/assets/images/Стоимость.svg', title: 'Стоимость', text: 'Оптимальное соотношение цены и качества'
    },
    { icon: '/assets/images/Медаль.svg', title: 'Качество', text: 'Канадское качество производства' },
    { icon: '/assets/images/Время.svg', title: 'Скорость', text: 'Высокая производительность печати' },
    { icon: '/assets/images/Гайка.svg', title: 'Обслуживание', text: 'Круглосуточная техническая поддержка' }
  ]

  const strengths = [
    { icon: '/assets/images/Точность.svg', title: 'Точность', text: 'Наши пакетные кодировщики обеспечивают высокую точность кодирования.' },
    { icon: '/assets/images/Индивидуальные решения.svg', title: 'Индивидуальные решения', text: 'Наши индивидуально разработанные решения созданы для ваших уникальных требований.' },
    { icon: '/assets/images/Эксплуатация с низкими требованиями к техническому обслуживанию.svg', title: 'Эксплуатация с низкими требованиями', text: 'Неприхотливая в обслуживании промышленная струйная маркировочная машина.' },
    { icon: '/assets/images/Простота в эксплуатации.svg', title: 'Простота в эксплуатации', text: 'Простая установка и эксплуатация с бесплатной технической поддержкой.' },
    { icon: '/assets/images/Бюджет.svg', title: 'Бюджетный', text: 'Недорогие и доступные решения для кодирования без ущерба для качества.' },
    { icon: '/assets/images/Техническая поддержка.svg', title: 'Техническая поддержка', text: 'Бесплатная техническая поддержка гарантирует бесперебойную работу.' }
  ]

  const materials = ['Стекло', 'Плёнка', 'Металл', 'Картон', 'Пластик', 'Дерево']
  const industries = [
    { img: '/assets/images/Молочные продукты.png', name: 'Молочные продукты' },
    { img: '/assets/images/Автомобильная промышленность.png', name: 'Автомобильная промышленность' },
    { img: '/assets/images/Напитки.png', name: 'Напитки' },
    { img: '/assets/images/Косметика.png', name: 'Косметика' },
    { img: '/assets/images/Медицина.png', name: 'Медицина' },
    { img: '/assets/images/Стройматериалы.png', name: 'Стройматериалы' },
    { img: '/assets/images/Мешки с мукой.png', name: 'Мешки с мукой' }
  ]

  const greenItems = ['Продукты питания и приправы', 'Кабель и труба', 'Медицина', 'Картонные упаковки', 'Удобрение', 'Экструзионные изделия', 'Напитки', 'СИЗ и маски', 'Электроника', 'Косметика', 'Молочные продукты', 'Автомобили', 'Пивные банки', 'Печать на яйцах', 'Антисептики', 'Поддоны и деревья', 'Цемент', 'Корм для животных']

  const whyUs = [
    { num: '/assets/images/Один.svg', title: 'Быстро и просто', text: 'Быстрая установка и простота в эксплуатации.' },
    { num: '/assets/images/Два.svg', title: 'Доступность и ценность', text: 'Низкие затраты на техническое обслуживание и выгода.' },
    { num: '/assets/images/Три.svg', title: 'Экономичность и выносливость', text: 'Низкие затраты и надежная работа.' },
    { num: '/assets/images/Четыре.svg', title: 'Возможности печати', text: 'Печать переменного текста, штрих-кодов, ПО.' },
    { num: '/assets/images/Пять.svg', title: 'Поддержка клиентов', text: 'Исключительная поддержка клиентов.' }
  ]

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-cards-container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>СОВРЕМЕННЫЕ РЕШЕНИЯ ДЛЯ КОДИРОВАНИЯ И МАРКИРОВКИ</h1>
                <p>Широкий ассортимент промышленных струйных принтеров</p>
                <Link to="/products" className="rn-button" style={{ textAlign: 'center' }}>Ознакомьтесь с продукцией RN</Link>
              </div>
              <div className="hero-image">
                <div className="hero-info"><p style={{ padding: '5px' }}>Канадское качество</p></div>
                <img src="/assets/images/Принтер.svg" alt="Принтер" />
              </div>
            </div>
            <div className="hero-content">
              <div className="hero-text">
                <h1>ПЕЧАТЬ НА ПОЛИПРОПИЛЕНОВЫХ МЕШКАХ</h1>
                <ul className="hero-infolist">
                  <li>Уникальные QR-коды</li>
                  <li>Решение для отслеживания и контроля</li>
                  <li>Система предотвращения отказов</li>
                </ul>
                <Link to="/marking" className="rn-button" style={{ textAlign: 'center' }}>Узнать больше</Link>
              </div>
              <div className="hero-image">
                <div className="hero-info"><p style={{ padding: '5px' }}>Печать динамических данных</p></div>
                <img src="/assets/images/Принтер11.svg" style={{ width: '300px', height: '280px' }} alt="Принтер" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Авторитетный производитель */}
      <section className="authority-section">
        <div className="container">
          <div className="authority-header">
            <h1>АВТОРИТЕТНЫЙ ПРОИЗВОДИТЕЛЬ</h1>
            <p>Решения для кодирования и маркировки.</p>
            <div className="divider"></div>
          </div>
          <div className="brands-grid">
            <div className="brand-item-main">
              <img src="/assets/images/Принтер2.svg" alt="Принтер RNJet" />
              <h3>Принтеры RNJet</h3>
              <p>Высококачественные промышленные принтеры для маркировки</p>
            </div>
            <div className="brand-features">
              {cards.map((c, i) => (
                <div key={i} className="feature-item">
                  <div className="feature-icon"><img src={c.icon} alt="" /></div>
                  <div className="feature-text">
                    <h4>{c.title}</h4>
                    <p>{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="button-info">
            <Link to="/products"><button className="button-red">Принтеры RNJet</button></Link>
            <Link to="/about"><button className="button-white">Почему именно RN Mark?</button></Link>
          </div>
        </div>
      </section>

      {/* Принтеры RN Mark */}
      <section className="printers-section">
        <h1>ПРОМЫШЛЕННЫЕ СТРУЙНЫЕ ПРИНТЕРЫ RN MARK</h1>
        <p>20 лет качества. Сделано в Канаде.</p>
        <div className="printers-grid">
          <div className="printer-info">
            <img src="/assets/images/1 картинка.svg" alt="" />
            <p>Струйные принтеры с широким набором символов</p>
            <ul className="feature-list">
              <li>Высокоточный двухголовочный механизм</li>
              <li>Печать высотой до 288 мм (RNJet 288 XL)</li>
              <li>Чернила на масляной и солнечной основе</li>
              <li>Подходит для текста, логотипов, штрих-кодов</li>
              <li>Двухцветная маркировка (RNJet 140 BC)</li>
            </ul>
            <Link to="/products" style={{ marginBottom: '10px' }}><button className="button-red">Читать дальше</button></Link>
          </div>
          <div className="printer-info">
            <img src="/assets/images/2 картинка.svg" alt="" />
            <p>Кодировщики малых символов</p>
            <ul className="feature-list">
              <li>Высокое разрешение и скорость</li>
              <li>Сольвентные и водорастворимые чернила</li>
              <li>Печать дат, временных кодов, логотипов</li>
              <li>Компактное решение</li>
            </ul>
            <Link to="/products"><button className="button-red">Читать дальше</button></Link>
          </div>
          <div className="printer-info">
            <img src="/assets/images/3 картинка.svg" alt="" />
            <p>Чернила и расходные материалы</p>
            <ul className="feature-list">
              <li>Быстрое высыхание</li>
              <li>Адгезия к любым поверхностям</li>
              <li>Устойчивость к воздействиям</li>
              <li>Пищевые, сольвентные, водные, масляные чернила</li>
            </ul>
            <Link to="/ink"><button className="button-red">Читать дальше</button></Link>
          </div>
        </div>
      </section>

      {/* Почему стоит выбрать RN Mark */}
      <section className="strengths">
        <div className="container">
          <div className="strengths-header">
            <h1>ПОЧЕМУ СТОИТ ВЫБРАТЬ RN MARK?</h1>
            <p>Промышленные струйные принтеры</p>
            <p className="description">Выберите промышленные струйные принтеры для кодирования и маркировки RN Mark, обеспечивающие непревзойденную надежность, точность и эффективность.</p>
          </div>
          <div className="elementor-section">
            <img src="/assets/images/ONTARIO MADE.svg" alt="" />
            <img src="/assets/images/SA.svg" alt="" />
            <img src="/assets/images/CE.svg" alt="" />
            <img src="/assets/images/HP.svg" alt="" />
            <img src="/assets/images/EPAL.svg" alt="" />
          </div>
          <div className="strengths-info">
            {strengths.map((s, i) => (
              <div key={i} className="card">
                <img src={s.icon} alt="" />
                <p className="subtitle">{s.title}</p>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Рынок */}
      <section className="market-section">
        <div className="container">
          <div className="market-header">
            <h1>РЫНОК, ОБСЛУЖИВАЕМЫЙ RN MARK</h1>
            <p>От промышленных товаров до продуктов питания — наши принтеры канадского производства обеспечивают точную печать практически на любой поверхности.</p>
          </div>
          <div className="market-content">
            <div className="print-anything">
              <h2>Печатайте что угодно на всём</h2>
              <div className="materials-grid">
                {materials.map((m, i) => (
                  <div key={i} className="material-item"><div className="material-name">{m}</div></div>
                ))}
              </div>
            </div>
            <div className="industry-examples">
              {industries.map((ind, i) => (
                <div key={i} className="industry-item">
                  <img src={ind.img} alt={ind.name} />
                  <div className="industry-code">{ind.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="market-buttons">
            <button className="market-btn-red">Посмотреть все отрасли</button>
            <div>
              <button className="market-btn-white"><img src="/assets/images/СтрелочкаЛ.svg" alt="Назад" /></button>
              <button className="market-btn-white"><img src="/assets/images/СтрелочкаП.svg" alt="Вперед" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Зелёные решения */}
      <section className="green">
        <div className="container">
          <div className="green-header">
            <h1>ЗА ЗЕЛЁНЫЕ РЕШЕНИЯ</h1>
            <p>Сократите пластиковые отходы и внедрите экологичный способ маркировки вашей продукции.</p>
          </div>
          <div className="green-info">
            <ul className="green-grid">
              {greenItems.map((item, i) => (
                <a key={i} href="#"><li>{item}</li></a>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Почему именно мы */}
      <section className="why-us-section">
        <div className="container">
          <div className="why-us-header">
            <h1>ПОЧЕМУ ИМЕННО МЫ</h1>
            <div className="divider"></div>
          </div>
          <div className="why-us-cards-container">
            <div className="why-us-cards">
              {whyUs.map((w, i) => (
                <div key={i} className="why-us-card">
                  <div className="why-us-number"><img src={w.num} alt="" /></div>
                  <h3 className="why-us-title">{w.title}</h3>
                  <p className="why-us-description">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Сделано в Канаде */}
      <section className="made-in-canada-section">
        <div className="container">
          <div className="made-in-canada-content">
            <div className="made-in-canada-text">
              <h2>GUARANTEED QUALITY</h2>
              <h1>MADE IN CANADA</h1>
            </div>
            <div className="made-in-canada-image">
              <img src="/assets/images/Сделано в канаде.png" alt="Made in Canada" />
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  )
}

export default Home