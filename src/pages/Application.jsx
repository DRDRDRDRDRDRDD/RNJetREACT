import ContactForm from '../components/ContactForm'

import '../styles/application.css' 

function Application() {
  const industrialCards = [
    { title: 'Автомобильная промышленность', text: 'Маркировка деталей, VIN-кодов, компонентов' },
    { title: 'Строительство и возведение', text: 'Маркировка стройматериалов, труб, профилей' },
    { title: 'Химические вещества', text: 'Маркировка химической продукции, реагентов' },
    { title: 'Электроника', text: 'Печать на печатных платах, компонентах' },
    { title: 'Медицинский', text: 'Маркировка медицинских изделий, оборудования' },
    { title: 'Поддоны и древесина', text: 'Кодирование поддонов, деревянных изделий' },
    { title: 'Провода, кабели и трубы', text: 'Непрерывная печать на кабелях и трубах' }
  ]

  const pharmaCards = [
    { title: 'Косметика и средства личной гигиены', text: 'Маркировка косметических средств, кремов, шампуней' },
    { title: 'Корма для домашних животных и скота', text: 'Кодирование кормов, добавок, ветеринарных препаратов' },
    { title: 'Фармацевтические препараты и пищевые добавки', text: 'Печать сроков годности, серийных номеров, UDI-кодов' },
    { title: 'Чистящие средства', text: 'Маркировка бытовой химии, чистящих растворов' }
  ]

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>ОТРАСЛИ ПРИМЕНЕНИЯ</h1>
          <p>Решения для кодирования и маркировки в различных отраслях промышленности</p>
          <div className="divider"></div>
        </div>
      </section>

      <section className="industry-section">
        <div className="container">
          <div className="industry-header">
            <h2>Промышленные товары</h2>
            <div className="industry-divider"></div>
          </div>
          <div className="industry-description">
            <p>Независимо от того, работаете ли вы в автомобильной, строительной, химической, электронной, медицинской, металлургической, пластмассовой или кабельной промышленности, принтеры RN Mark предлагают надежные и эффективные решения для печати.</p>
          </div>
          <div className="industry-grid">
            {industrialCards.map((c, i) => (
              <div key={i} className="industry-card">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-section alt-bg">
        <div className="container">
          <div className="industry-header">
            <h2>Продукты питания и напитки</h2>
            <div className="industry-divider"></div>
          </div>
          <div className="industry-description">
            <p>Благодаря решениям канадского производства от RN Mark вы можете быть уверены, что ваши продукты питания и напитки будут точно маркированы необходимой информацией.</p>
          </div>
          <div className="industry-two-column">
            <div className="industry-column">
              <div className="industry-category">
                <h3>Напитки</h3>
                <ul className="industry-list">
                  <li>Напитки</li>
                  <li>Молочные продукты</li>
                  <li>Пивоварни</li>
                  <li>Кофейные пакетики</li>
                </ul>
              </div>
            </div>
            <div className="industry-column">
              <div className="industry-category">
                <h3>Продукты питания</h3>
                <ul className="industry-list">
                  <li>Яйца и яичные лотки</li>
                  <li>Мешки с мукой</li>
                  <li>Упаковка для каннабиса</li>
                  <li>Другие упакованные пищевые продукты</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="industry-section">
        <div className="container">
          <div className="industry-header">
            <h2>Фармацевтические препараты</h2>
            <div className="industry-divider"></div>
          </div>
          <div className="industry-description">
            <p>В фармацевтической отрасли и производстве пищевых добавок точность и отслеживаемость имеют первостепенное значение.</p>
          </div>
          <div className="industry-grid-2col">
            {pharmaCards.map((c, i) => (
              <div key={i} className="industry-card-large">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  )
}

export default Application