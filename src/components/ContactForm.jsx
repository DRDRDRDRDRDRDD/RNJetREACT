function ContactForm() {
  return (
    <section className="contact-form-section">
      <h2>Остались вопросы?</h2>
      <form className="contact-form" action="mailto:office@insoftretail.ru" method="post" encType="text/plain">
        <div className="form-row">
          <input type="text" placeholder="Имя" className="form-input" name="firstname" required />
          <input type="text" placeholder="Фамилия" className="form-input" name="lastname" required />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Почта" className="form-input full-width" name="email" required />
        </div>
        <div className="form-row">
          <textarea placeholder="Текст сообщения" className="form-textarea" rows="4" name="message" required></textarea>
        </div>
        <button type="submit" className="form-submit-btn">ОТПРАВИТЬ ВОПРОС</button>
        <p style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>
          Ваше сообщение будет отправлено на почту: office@insoftretail.ru
        </p>
      </form>
    </section>
  )
}

export default ContactForm