import { Link } from 'react-router-dom'

function ContactInfo() {
  return (
    <section className="contact-info-section">
      <div className="contact-info-grid">
        <div className="contact-info-column">
          <Link to="/"><img src="/assets/images/Логотип.svg" className="logotype" alt="RN Mark" /></Link>
          <p>Компания RN Mark Inc. — производитель промышленных струйных принтеров в Канаде. Более 20 лет мы с удовольствием разрабатываем и поставляем доступные и высокопроизводительные кодировщики по всему миру.</p>
        </div>
        <div className="contact-info-column">
          <h3>Контакты</h3>
          <p>ООО ИнСофтРитейл (ИНН 7325105104)</p>
          <p>Адрес: РФ, г Ульяновск, ул. Рылеева, д.11, офис 4</p>
        </div>
        <div className="contact-info-column">
          <h3>Контактная информация</h3>
          <p>Телефон: +7 8422 58 63 70</p>
          <p>E-mail: office@insoftretail.ru</p>
          <div className="copyright-img">
            <a href="https://www.facebook.com/rnmarkinc"><img src="/assets/images/facebook.svg" alt="Facebook" /></a>
            <a href="https://www.youtube.com/user/RNjetprinter/videos"><img src="/assets/images/youtube.svg" alt="YouTube" /></a>
            <a href="https://www.linkedin.com/company/rn-mark-inc"><img src="/assets/images/in.svg" alt="LinkedIn" /></a>
            <a href="https://www.instagram.com/rnmarkinc/"><img src="/assets/images/instagram.svg" alt="Instagram" /></a>
            <a href="https://twitter.com/rnmarkinc"><img src="/assets/images/twitter.svg" alt="Twitter" /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Авторские права © 2022–2025 Все права защищены.</p>
      </div>
    </section>
  )
}

export default ContactInfo