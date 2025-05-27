import './Contact.css'
import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import 'react-toastify/dist/ReactToastify.css'

const MAX_CHAR_LIMIT = 500

function Contact(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    const textarea = document.getElementById('message') as HTMLTextAreaElement
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }, [formData.message])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    if (name === 'message') setCharCount(value.length)
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <div className="maintenance-banner">
        ⚠️ <strong>Temporary Notice:</strong> This contact form is currently undergoing maintenance.<br />
        Please reach out directly via email at:
        <br />
        <a href="mailto:tanzimbinzahir@gmail.com" className="email-link">
          tanzimbinzahir@gmail.com
        </a>
      </div>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          disabled
        />

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your Gmail"
          value={formData.email}
          onChange={handleChange}
          disabled
        />

        <PhoneInput
          country={'my'}
          value={formData.phone}
          onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
          inputProps={{ name: 'phone', disabled: true }}
          inputStyle={{ width: '100%' }}
        />

        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          maxLength={MAX_CHAR_LIMIT}
          disabled
          style={{ resize: 'none', overflow: 'hidden' }}
        ></textarea>

        <div className="char-count">
          {charCount} / {MAX_CHAR_LIMIT} characters
        </div>

        <button type="submit" disabled>
          Contact Temporarily Unavailable
        </button>
      </form>

      <ToastContainer />
    </section>
  )
}

export default Contact
