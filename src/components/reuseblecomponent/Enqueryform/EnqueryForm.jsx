import React, { useState } from 'react'
import { sendEnquiryEmail } from '../../customhooks/sendenquiry'
import { toast } from 'react-toastify'


const enquiryOptions = [
 
  
  "Enquery For",
  "Media Relations Management",
  "Political Public Image PR",
  "Award Nomination Recognition PR",
  "Brand Reputation Management",
  "Personal Branding PR",
  "Influencer & Media Outreach",
]

/* ─── Main Enquiry Form ─── */
export default function EnqueryForm() {
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    fullname: '',
    phone: '',
    email: '',
   enqueryfor: enquiryOptions[0],
    message: ''
  })

 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    await sendEnquiryEmail(form);

    toast.success("Enquiry Sent Successfully");

    setForm({
      fullname: "",
      phone: "",
      email: "",
      enqueryfor: enquiryOptions[0],
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Failed to send enquiry ❌");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div style={wrapperStyle}>
        <div style={cardStyle}>
          <h2 style={headingStyle}>Enquiry Form</h2>

          <form onSubmit={handleSubmit}>
            <FormField label="Name">
              <input
                type="text"
                name="fullname"
                placeholder="Enter your name"
                value={form.fullname}
                onChange={handleChange}
                style={inputStyle}
              />
            </FormField>

            <FormField label="Contact">
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                style={inputStyle}
              />
            </FormField>

            <FormField label="Email">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                style={inputStyle}
              />
            </FormField>
               <FormField label="Enquiry For">
              <select
                name="enqueryfor"
                value={form.enqueryfor}
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
                placeholder="Type your message..."
                value={form.message}
                onChange={handleChange}
                rows={5}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </FormField>

            <button
              type="submit"
              disabled={loading}
              style={{
                ...submitBtnStyle,
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              {loading ? 'Submitting...' : 'Submit'}
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

  const handleChange = (e) => {
    setQForm({ ...qForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Quick enquiry:', qForm)
  }

  return (
    <div style={quickWrapper}>
      <button onClick={() => setOpen(!open)} style={quickHeader}>
        <span>✳ Quick Enquiry</span>
        <span style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
      </button>

      {open && (
        <div style={quickBody}>
          <form onSubmit={handleSubmit}>
            <label style={qLabelStyle}>Mobile No</label>
            <input
              type="tel"
              name="mobile"
              value={qForm.mobile}
              onChange={handleChange}
              style={qInputStyle}
            />

            <label style={{ ...qLabelStyle, marginTop: '12px' }}>
              Enquiry For
            </label>
            <select
              name="enquiryFor"
              value={qForm.enquiryFor}
              onChange={handleChange}
              style={qInputStyle}
            >
              {enquiryOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>

            <button type="submit" style={{ ...submitBtnStyle, marginTop: '14px' }}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

/* ─── Reusable Components ─── */
function FormField({ label, children }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  )
}

/* ─── Styles ─── */
const wrapperStyle = {
  fontFamily: "'Lato', sans-serif",
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
  padding: '40px 16px'
}

const cardStyle = {
  maxWidth: '780px',
  margin: '0 auto',
  backgroundColor: '#fff',
  borderRadius: '6px',
  padding: '36px 40px',
  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
  borderTop: '4px solid #1e4d8c'
}

const headingStyle = {
  fontSize: '28px',
  fontWeight: '700',
  marginBottom: '28px'
}

const labelStyle = {
  display: 'block',
  fontSize: '14px',
  fontWeight: '600',
  marginBottom: '6px'
}

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  border: '1px solid #d0d0d0',
  borderRadius: '4px',
  fontSize: '14px',
  outline: 'none'
}

const submitBtnStyle = {
  backgroundColor: '#1e4d8c',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '11px 32px',
  fontSize: '14px',
  fontWeight: '700'
}

const quickWrapper = {
  position: 'fixed',
  bottom: '0',
  right: '24px',
  width: '240px',
  zIndex: 1000
}

const quickHeader = {
  width: '100%',
  backgroundColor: '#1e4d8c',
  color: '#fff',
  padding: '12px 16px',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: '700'
}

const quickBody = {
  backgroundColor: '#fff',
  padding: '16px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.12)'
}

const qLabelStyle = {
  fontSize: '13px',
  fontWeight: '600'
}

const qInputStyle = {
  width: '100%',
  padding: '8px 10px',
  border: '1px solid #d0d0d0',
  borderRadius: '4px',
  fontSize: '13px'
}