// src/components/PrinterPage.jsx
import ContactForm from './ContactForm'

export default function PrinterPage({ printer }) {
  const {
    name,
    subtitle,
    description,
    image,
    badges = [],
    specs = [],
    printFeatures = [],
    inkColors = [],
    inkText,
    applications = [],
    benefits = [],
    advantages = [],
    video
  } = printer

  return (
    <div className="container">
      {/* Cекция с принтером */}
      <section className="product-hero">
        <div className="product-image">
          <img src={image || `/assets/images/${name.replace(/\s/g, '')}.png`} alt={name} />
        </div>
        <div className="product-title">
          <h1>{name} <span>{subtitle}</span></h1>
          <p>{description}</p>
          <div className="badge-container">
            {badges.map((b, i) => (
              <span key={i} className="badge">{b}</span>
            ))}
          </div>
          <div className="product-cta">
            <a
              href="#"
              className="rn-button"
              style={{ background: 'var(--red)', color: 'white', padding: '15px 30px' }}
            >
              Скачать брошюру
            </a>
            <a
              href="#"
              className="rn-button"
              style={{
                background: 'transparent',
                color: 'var(--red)',
                border: '2px solid var(--red)',
                padding: '15px 30px'
              }}
            >
              Запросить цену
            </a>
          </div>
        </div>
      </section>

      {/* Детальная информация */}
      <section className="info-grid">
        {specs.length > 0 && (
          <div className="info-card">
            <h2>Технические характеристики</h2>
            <table className="specs-table">
              <tbody>
                {specs.map((s, i) => (
                  <tr key={i}>
                    <td>{s.label}</td>
                    <td>{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {printFeatures.length > 0 && (
          <div className="info-card">
            <h2>Функции печати</h2>
            <ul className="feature-list-compact">
              {printFeatures.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        )}

        {(inkColors.length > 0 || inkText) && (
          <div className="info-card">
            <h2>Чернила и расходные материалы</h2>
            {inkColors.length > 0 && (
              <div className="ink-colors">
                {inkColors.map((c, i) => (
                  <span
                    key={i}
                    className="color-dot"
                    style={{ background: c.color, border: c.border || 'none' }}
                    title={c.name}
                  />
                ))}
              </div>
            )}
            {inkText && <p style={{ marginTop: '15px' }}>{inkText}</p>}
          </div>
        )}

        {applications.length > 0 && (
          <div className="info-card">
            <h2>Применение</h2>
            <div className="applications-list">
              {applications.map((a, i) => (
                <span key={i} className="app-item">{a}</span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Почему стоит обратить внимание */}
      {benefits.length > 0 && (
        <section className="benefits-highlight">
          <h2>Почему стоит обратить внимание на этот принтер</h2>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="benefit-item">
                <h3>{i + 1}. {b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Ключевые преимущества */}
      {advantages.length > 0 && (
        <section className="advantages">
          <h2>Ключевые преимущества {name}</h2>
          <div className="printers-grid">
            {advantages.map((a, i) => (
              <div key={i} className="printers-grid-card">{a}</div>
            ))}
          </div>
        </section>
      )}

      {/* Ресурсы */}
      <section style={{ margin: '60px 0' }}>
        <h2 style={{ color: 'var(--red)' }}>Ресурсы</h2>
        <div className="resources">
          <div className="resource-item">
            <img src="/assets/images/Стоимость.svg" alt="PDF" />
            <h4>Техническая спецификация</h4>
            <a href="#" style={{ color: 'var(--red)' }}>Скачать PDF</a>
          </div>
          <div className="resource-item">
            <img src="/assets/images/Медаль.svg" alt="BROCHURE" />
            <h4>Брошюра {name}</h4>
            <a href="#" style={{ color: 'var(--red)' }}>Скачать</a>
          </div>
          <div className="resource-item">
            <img src="/assets/images/Гайка.svg" alt="VIDEO" />
            <h4>Видеообзор</h4>
            <a href={video || '#'} style={{ color: 'var(--red)' }}>Смотреть на YouTube</a>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  )
}