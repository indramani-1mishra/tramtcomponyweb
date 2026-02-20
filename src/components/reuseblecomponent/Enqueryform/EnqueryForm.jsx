import React, { useState } from 'react'

const enquiryOptions = [
  "Performance Marketing",
  "Core PR Services",
  "Premium / Advanced Services",
  "Media Relations Management",
  "Press Release Writing & Distribution",
  "Digital PR Campaigns",
  "Brand Reputation Management",
  "Corporate Communications",
  "Online Reputation Management (ORM)",
  "Startup PR Launch Packages",
  "Crisis Communication Management",
  "Personal Branding PR",
  "Influencer & Media Outreach",
]

/* ─── Main Enquiry Form ─── */
export default function EnqueryForm() {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    email: '',
    city: '',
    enquiryFor: enquiryOptions[0],
    message: ''
  })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enquiry submitted:', form)
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div style={{
        fontFamily: "'Lato', sans-serif",
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        padding: '40px 16px'
      }}>
        <div style={{
          maxWidth: '780px',
          margin: '0 auto',
          backgroundColor: '#fff',
          borderRadius: '6px',
          padding: '36px 40px 40px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          borderTop: '4px solid #1e4d8c'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#222',
            margin: '0 0 28px'
          }}>
            Enquiry Form
          </h2>

          <form onSubmit={handleSubmit}>
            <FormField label="Name">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#1e4d8c'}
                onBlur={e => e.target.style.borderColor = '#d0d0d0'}
              />
            </FormField>

            <FormField label="Contact">
              <input
                type="tel"
                name="contact"
                placeholder="Contact"
                value={form.contact}
                onChange={handleChange}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#1e4d8c'}
                onBlur={e => e.target.style.borderColor = '#d0d0d0'}
              />
            </FormField>

            <FormField label="Email">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#1e4d8c'}
                onBlur={e => e.target.style.borderColor = '#d0d0d0'}
              />
            </FormField>

            <FormField label="City">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#1e4d8c'}
                onBlur={e => e.target.style.borderColor = '#d0d0d0'}
              />
            </FormField>

            <FormField label="Enquiry For">
              <select
                name="enquiryFor"
                value={form.enquiryFor}
                onChange={handleChange}
                style={{ ...inputStyle, cursor: 'pointer' }}
                onFocus={e => e.target.style.borderColor = '#1e4d8c'}
                onBlur={e => e.target.style.borderColor = '#d0d0d0'}
              >
                {enquiryOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </FormField>

            <FormField label="Message">
              <textarea
                name="message"
                placeholder="Type your message here..."
                value={form.message}
                onChange={handleChange}
                rows={5}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                onFocus={e => e.target.style.borderColor = '#1e4d8c'}
                onBlur={e => e.target.style.borderColor = '#d0d0d0'}
              />
            </FormField>

            <button
              type="submit"
              style={submitBtnStyle}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#163a69'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1e4d8c'}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <QuickEnquiry />
    </>
  )
}

/* ─── Quick Enquiry Floating Widget ─── */
 function QuickEnquiry() {
  const [open, setOpen] = useState(false)
  const [qForm, setQForm] = useState({
    mobile: '',
    enquiryFor: enquiryOptions[0]
  })

  const handleChange = (e) =>
    setQForm({ ...qForm, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Quick enquiry:', qForm)
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '0',
      right: '24px',
      zIndex: 1000,
      width: '240px',
      fontFamily: "'Lato', sans-serif"
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#1e4d8c',
          color: '#fff',
          padding: '12px 16px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '700',
          borderRadius: '6px 6px 0 0'
        }}
      >
        <span>✳ Quick Enquiry</span>
        <span style={{
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: '0.2s'
        }}>▼</span>
      </button>

      {open && (
        <div style={{
          backgroundColor: '#fff',
          border: '1px solid #e5e5e5',
          borderTop: 'none',
          padding: '16px',
          borderRadius: '0 0 6px 6px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.12)'
        }}>
          <form onSubmit={handleSubmit}>
            <label style={qLabelStyle}>Mobile No</label>
            <input
              type="tel"
              name="mobile"
              value={qForm.mobile}
              onChange={handleChange}
              style={qInputStyle}
              onFocus={e => e.target.style.borderColor = '#1e4d8c'}
              onBlur={e => e.target.style.borderColor = '#d0d0d0'}
            />

            <label style={{ ...qLabelStyle, marginTop: '12px' }}>
              Enquiry For
            </label>
            <select
              name="enquiryFor"
              value={qForm.enquiryFor}
              onChange={handleChange}
              style={qInputStyle}
              onFocus={e => e.target.style.borderColor = '#1e4d8c'}
              onBlur={e => e.target.style.borderColor = '#d0d0d0'}
            >
              {enquiryOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>

            <button
              type="submit"
              style={{
                ...submitBtnStyle,
                marginTop: '14px',
                padding: '9px 24px',
                fontSize: '13px'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#163a69'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1e4d8c'}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

/* ─── Reusable Components & Styles ─── */
function FormField({ label, children }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <label style={{
        display: 'block',
        fontSize: '14px',
        fontWeight: '600',
        color: '#444',
        marginBottom: '6px'
      }}>
        {label}
      </label>
      {children}
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  border: '1px solid #d0d0d0',
  borderRadius: '4px',
  fontSize: '14px',
  outline: 'none',
  transition: '0.2s',
  fontFamily: "'Lato', sans-serif"
}

const submitBtnStyle = {
  backgroundColor: '#1e4d8c',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '11px 32px',
  fontSize: '14px',
  fontWeight: '700',
  cursor: 'pointer',
  transition: '0.2s',
  fontFamily: "'Lato', sans-serif"
}

const qLabelStyle = {
  fontSize: '13px',
  fontWeight: '600',
  marginBottom: '5px',
  color: '#444'
}

const qInputStyle = {
  width: '100%',
  padding: '8px 10px',
  border: '1px solid #d0d0d0',
  borderRadius: '4px',
  fontSize: '13px',
  outline: 'none',
  transition: '0.2s',
  fontFamily: "'Lato', sans-serif"
}