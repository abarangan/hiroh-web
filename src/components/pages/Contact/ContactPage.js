import React, { useState } from 'react';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xgvlopqg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section className='section' style={{ paddingBottom: '2rem' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 className='sectionTitle' style={{textAlign: 'center',marginTop:'3rem'}}>Contact Us</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-gray)', marginBottom: '4rem' }}>
          Have questions about HIROH? We're here to help.
        </p>

        {formStatus === 'success' && (
          <div style={{
            backgroundColor: 'var(--color-green)',
            color: 'var(--text-white)',
            padding: '1rem',
            borderRadius: '0.5rem',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Thank you! We'll get back to you soon.
          </div>
        )}

        {formStatus === 'error' && (
          <div style={{
            backgroundColor: 'var(--color-red)',
            color: 'var(--text-white)',
            padding: '1rem',
            borderRadius: '0.5rem',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Something went wrong. Please try again.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: 'var(--bg-white)',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 10px 30px var(--color-black-10)'
          }}
        >
          {/* Hidden Formspree configuration fields */}
          <input type="hidden" name="_subject" value="New Contact from HIROH Website" />
          <input type="hidden" name="_captcha" value="true" />

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-700)', fontWeight: '500' }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid var(--color-gray-300)',
                borderRadius: '0.5rem',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-700)', fontWeight: '500' }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid var(--color-gray-300)',
                borderRadius: '0.5rem',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-700)', fontWeight: '500' }}>
              Subject
            </label>
            <select
              name="subject"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid var(--color-gray-300)',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                backgroundColor: 'white'
              }}
            >
              <option value="">Select a topic</option>
              <option value="sales">Sales Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="business">Business/Partnership</option>
              <option value="media">Media/Press</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-gray-700)', fontWeight: '500' }}>
              Message
            </label>
            <textarea
              name="message"
              required
              rows="5"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid var(--color-gray-300)',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: 'var(--bg-teal)',
              color: 'var(--text-white)',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-primary-teal-hover)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--bg-teal)'}
          >
            Send Message
          </button>
        </form>

        {/* Company Address */}
        <div style={{
          textAlign: 'center',
          marginTop: '16rem',
          padding: '1.5rem',
          backgroundColor: 'transparent',
          borderRadius: '1rem',
          maxWidth: '400px',
          margin: '4rem auto 0'
        }}>
          <h3 style={{
            color: 'var(--text-primary)',
            fontSize: '1.25rem',
            marginBottom: '0.5rem',
            fontWeight: '600'
          }}>
            Avarana Technologies, LLC
          </h3>
          <p style={{
            color: 'var(--text-gray)',
            fontSize: '1rem',
            lineHeight: '1.6',
            margin: 0
          }}>
            1309 Coffeen Avenue Suite 1200<br />
            Sheridan, WY 82801
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
