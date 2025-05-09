import './Contact.css'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import emailjs from 'emailjs-com'
import 'react-toastify/dist/ReactToastify.css'

const MAX_CHAR_LIMIT = 500
const STORAGE_KEY = 'lastGmailSubmission'

function Contact(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const isValidGmail = (email: string) =>
    /^[A-Za-z0-9._%+-]+@gmail\.com$/.test(email)

  const hasSubmittedToday = (email: string): boolean => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    const last = data[email]
    if (!last) return false
    const diff = Date.now() - Number(last)
    return diff < 24 * 60 * 60 * 1000
  }

  const saveSubmissionTime = (email: string) => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    data[email] = Date.now()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, phone, message } = formData

    if (!name || !email || !phone || !message) {
      toast.error('All fields are required.')
      return
    }

    if (!isValidGmail(email)) {
      toast.error('Only valid @gmail.com addresses are allowed.')
      return
    }

    if (hasSubmittedToday(email)) {
      toast.error('You can only send one message per day.')
      return
    }

    if (charCount > MAX_CHAR_LIMIT) {
      toast.error('Message exceeds character limit.')
      return
    }

    setIsSubmitting(true)

    try {
      // Admin alert template (template_2lf0trq)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN_ID!,
        {
          name,
          email,
          phone,
          message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )

      // Auto-reply to user (template_1g19lkr)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_USER_ID!,
        {
          name,
          email
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )

      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setCharCount(0)
      saveSubmissionTime(email)
    } catch (err: any) {
      console.error('EmailJS Error:', err?.text || err?.message || err)
      toast.error('Failed to send message. Try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="sr-only">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your Gmail"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone" className="sr-only">Phone</label>
        <PhoneInput
          country={'my'}
          value={formData.phone}
          onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
          inputProps={{ name: 'phone', required: true }}
          inputStyle={{ width: '100%' }}
        />

        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          maxLength={MAX_CHAR_LIMIT}
          required
          style={{ resize: 'none', overflow: 'hidden' }}
        ></textarea>

        <div className="char-count">
          {charCount} / {MAX_CHAR_LIMIT} characters
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      <ToastContainer />
    </section>
  )
}

export default Contact
