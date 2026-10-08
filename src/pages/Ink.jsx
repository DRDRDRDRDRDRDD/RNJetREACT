import ContactForm from '../components/ContactForm'

import '../styles/ink.css' 

function Ink() {
  const solventColors = [
    { className: 'black', name: 'Черные сольвентные чернила' },
    { className: 'blue', name: 'Синие сольвентные чернила' },
    { className: 'orange', name: 'Оранжевые сольвентные чернила' },
    { className: 'red', name: 'Красные сольвентные чернила' },
    { className: 'white', name: 'Белые сольвентные чернила' },
    { className: 'yellow', name: 'Желтые растворимые чернила' }
  ]

  const oilColors = [
    { className: 'black', name: 'Черные масляные чернила' },
    { className: 'green', name: 'Зеленые масляные чернила' },
    { className: 'red', name: 'Красные масляные чернила' },
    { className: 'blue', name: 'Синие масляные чернила' }
  ]

  const inkFeatures = [
    { title: 'Высококонтрастные чернила', text: 'Идеально подходят для экструдированных изделий, таких как проволока и трубы.' },
    { title: 'Пигментированные чернила', text: 'Белые, желтые или оранжевые пигментированные чернила — идеальное решение для темных поверхностей.' },
    { title: 'Пищевые чернила', text: 'Идеально подходят для яиц, хлеба и шоколада.' },
    { title: 'Термотропные чернила от черного к красному', text: 'Идеально подходят для алюминиевых банок и жестяных коробок.' },
    { title: 'Медленно сохнущие пигментированные чернила', text: 'Мы предлагаем эти чернила белого, желтого и оранжевого цвета.' },
    { title: 'Масляные чернила медленного высыхания', text: 'Мы предлагаем эти чернила в черном цвете.' }
  ]

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>ЧЕРНИЛА ДЛЯ ПРОМЫШЛЕННЫХ СТРУЙНЫХ ПРИНТЕРОВ</h1>
          <p>Обеспечивает впечатляющие, долговечные и устойчивые результаты печати. Прилипает к поверхности — независимо от обстоятельств.</p>
          <div className="divider"></div>
        </div>
      </section>

      <section className="ink-section">
        <div className="container">
          <div className="ink-header">
            <h2>Чернила на основе растворителей</h2>
            <div className="ink-divider"></div>
          </div>
          <div className="ink-description">
            <p>Чернила на основе растворителей специально разработаны для печати на непористых поверхностях.</p>
            <p className="color-info">Печать возможна в любом цвете по вашему выбору: оранжевый, желтый, белый, красный, черный и синий.</p>
          </div>
          <div className="color-grid">
            {solventColors.map((c, i) => (
              <div key={i} className="color-card">
                <div className={`color-swatch ${c.className}`}></div>
                <span className="color-name">{c.name}</span>
              </div>
            ))}
          </div>
          <div className="buy-now-container">
            <a href="#"><button className="buy-now-btn">КУПИТЬ СЕЙЧАС →</button></a>
          </div>
        </div>
      </section>

      <section className="ink-section alt-bg">
        <div className="container">
          <div className="ink-header">
            <h2>Чернила на масляной основе</h2>
            <div className="ink-divider"></div>
          </div>
          <div className="ink-description">
            <p>Принтеры, использующие чернила на масляной основе, специально разработаны для печати на пористых материалах.</p>
            <p className="color-info">Мы предлагаем чернила на масляной основе синего, черного, красного и зеленого цветов.</p>
          </div>
          <div className="color-grid four-colors">
            {oilColors.map((c, i) => (
              <div key={i} className="color-card">
                <div className={`color-swatch ${c.className}`}></div>
                <span className="color-name">{c.name}</span>
              </div>
            ))}
          </div>
          <div className="buy-now-container">
            <a href="#" className="buy-now-btn">КУПИТЬ СЕЙЧАС →</a>
          </div>
        </div>
      </section>

      <section className="ink-showcase">
        <div className="container">
          <div className="ink-showcase-header">
            <h2>Широкий ассортимент высококачественных чернил</h2>
            <p>Компания RN Mark предлагает широкий ассортимент высококачественных чернил в зависимости от ваших потребностей.</p>
          </div>
          <div className="ink-features-grid">
            {inkFeatures.map((f, i) => (
              <div key={i} className="ink-feature-card">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
          <div className="fast-drying-section">
            <h3>Быстросохнущие чернила для напитков</h3>
            <div className="drying-info">
              <div className="drying-item">
                <span className="drying-badge">TIJ технология</span>
                <p>Идеально подходят для высокоскоростных производственных линий. Время высыхания 1-3 секунды.</p>
              </div>
              <div className="drying-item">
                <span className="drying-badge">Пьезотехнология</span>
                <p>Быстросохнущие чернила для напитков: время высыхания 10-15 секунд.</p>
              </div>
            </div>
            <div className="fda-approval">
              <p>Одобренные Министерством сельского хозяйства США чернила FDG, предназначенные для маркировки яичной скорлупы, являются лучшим и самым безопасным вариантом.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  )
}

export default Ink