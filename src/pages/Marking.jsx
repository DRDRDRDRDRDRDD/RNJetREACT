import { useState } from 'react'
import ContactForm from '../components/ContactForm'

import '../styles/marking.css' 

function Marking() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      q: 'Какое оборудование используется для печати на бумажных пакетах?',
      a: 'Промышленные струйные принтеры, такие как RNJet 72, широко используются для печати на бумажных пакетах. Эти принтеры оснащены специальными чернилами и технологией, подходящей для печати на различных поверхностях, включая бумагу.'
    },
    {
      q: 'В чём разница между ткаными мешками из полиэтилена высокой плотности (HDPE) и полипропилена (PP)?',
      a: 'Тканые мешки из HDPE изготавливаются из более плотного пластика, что обеспечивает им большую прочность и долговечность. Тканые мешки из PP легче, гибче и имеют более гладкую поверхность. Выбор зависит от предполагаемого использования, веса продукта и бюджета.'
    }
  ]

  return (
    <>
      <section className="categories-section">
        <div className="container">
          <div className="categories-header">
            <h1>Нанесение маркировки на цементную бумагу, пластик, фиброцементные, полипропиленовые пакеты</h1>
            <p>Нанесение кода и маркировки на большие бумажные, пластиковые и полипропиленовые пакеты в пыльных производственных помещениях</p>
          </div>
        </div>
      </section>

      <section className="container-info">
        <div className="information">
          <div className="head-information">
            <h2>Mы рады предложить решения для предприятий производства:</h2>
            <ul>
              <li>Цемента</li>
              <li>Удобрений</li>
              <li>Муки</li>
              <li>Зерна</li>
              <li>Кофе</li>
            </ul>
          </div>
          <div className="head-information-img">
            <img src="/assets/images/Цемент.png" alt="Цемент" />
          </div>
          <div className="head-information">
            <h2>Рекомендуем:</h2>
            <div>
              <p>RNJet H1+ — отличный вариант для печати на небольших пакетах из-под муки или кофе, мешочках, пластике или бумаге.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="description-info">
        <div className="description">
          <div className="head-description">
            <h2>Хотите маркировать свои товары уникальным QR-кодом? <br />У RN Mark есть решение и для вас!</h2>
            <img src="/assets/images/RNJet100meme.png" alt="RNJet" />
          </div>
          <p style={{ width: '1100px' }}>Компания RN MARK предлагает простые в установке струйные принтеры для маркировки мешков с цементом, удобрениями, зерном, кофе и мукой. Промышленные струйные принтеры RN Mark позволяют осуществлять бесконтактную печать и получать уникальный QR-код на каждом мешке.</p>
        </div>
      </section>

      <section className="questions">
        <div className="container">
          <h1>Часто задаваемые вопросы</h1>
          {faqs.map((faq, i) => (
            <div key={i} className="questions-list">
              <div className={`item ${activeIndex === i ? 'active' : ''}`}>
                <div className="item-header" onClick={() => setActiveIndex(activeIndex === i ? null : i)}>
                  <img src="/assets/images/СтрелочкаП.svg" alt="Развернуть" />
                  <h3>{faq.q}</h3>
                </div>
                <p className="answer">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
    </>
  )
}

export default Marking