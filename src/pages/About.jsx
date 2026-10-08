import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

import '../styles/about.css' 

function About() {
  const features = [
    { icon: '/assets/images/Медаль.svg', title: 'Исключительное, непревзойденное качество', text: 'Компания RN Mark с гордостью предлагает промышленные струйные принтеры по непревзойденной цене и с канадским качеством.' },
    { icon: '/assets/images/Техническая поддержка.svg', title: 'Профессиональная техническая поддержка', text: 'Благодаря опытной команде продаж RN Mark вы можете рассчитывать на профессиональную техническую поддержку.' },
    { icon: '/assets/images/Техническая поддержка.svg', title: 'Непревзойденная техническая поддержка', text: 'Наши квалифицированные специалисты всегда готовы оперативно помочь.' }
  ]

  const solutions = [
    { title: 'Робототехника', text: 'Решения от наших экспертов в области робототехники для автоматизации производственных процессов.' },
    { title: 'Встроенные системы', text: 'Проектирование встроенных систем для интеграции в любую производственную линию.' },
    { title: 'Промышленная автоматизация', text: 'Комплексные решения по автоматизации и интеграции производственных процессов.' }
  ]

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>О КОМПАНИИ RN MARK</h1>
          <p>Канадский производитель промышленных струйных принтеров</p>
          <div className="divider"></div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Канадский производитель RN Mark упрощает кодирование и маркировку продукции</h2>
              <p>Компания RN Mark Inc. — производитель промышленных струйных принтеров в Канаде (Ричмонд-Хилл, Онтарио). Более 20 лет мы с удовольствием разрабатываем и поставляем доступные и высокопроизводительные кодировщики по всему миру.</p>
              <p>Компания RN Mark была основана в <span className="highlight">2002 году</span>. С тех пор наши инженеры и преданная своему делу команда стремятся создавать первоклассные машины.</p>
              <p className="focus-text">В настоящее время основное внимание уделяется струйным принтерам TIJ и высокоточным DOD-принтерам.</p>
            </div>
            <div className="about-image">
              <img src="/assets/images/Сделано в канаде.png" alt="Made in Canada" />
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Что отличает нас от остальных?</h2>
            <div className="section-divider"></div>
          </div>
          <div className="features-intro">
            <p>К настоящему времени мы создали прочную репутацию, что привело к стабильному и устойчивому росту по всему миру.</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon"><img src={f.icon} alt="" /></div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-section">
        <div className="container">
          <div className="section-header">
            <h2>Какие сопутствующие товары может предложить компания?</h2>
            <div className="section-divider"></div>
          </div>
          <div className="solutions-content">
            <p>Компании по всему миру, нуждающиеся в кодировании и маркировке, ищут уникальные и надежные <span className="highlight">решения, разработанные с учетом индивидуальных потребностей</span>.</p>
            <div className="solutions-grid">
              {solutions.map((s, i) => (
                <div key={i} className="solution-item">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="global-section">
        <div className="container">
          <div className="global-content">
            <div className="global-text">
              <h2>Глобальное присутствие</h2>
              <div className="global-divider"></div>
              <p>Несмотря на то, что наши корни находятся в Канаде, мы создали глобальное присутствие, сотрудничая с более чем <span className="stat-number">37 дистрибьюторами</span> по всему миру.</p>
              <p className="growth-text">В заключение отметим, что каждый год мы наблюдаем устойчивый и значительный рост нашей клиентской базы.</p>
              <div className="cta-button-container">
                <a href="#" className="cta-button">Свяжитесь с нами</a>
              </div>
            </div>
            <div className="global-image">
              <img src="/assets/images/Логотип.svg" alt="RN Mark Global" />
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  )
}

export default About