import React, { useState } from 'react'

const index = () => {
  const [showOtpMailForm, setShowOtpMailForm] = useState(true)
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyItems: 'center',
          alignItems: 'center',
          border: '2px solid black',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#fff',
          boxShadow: '0px 0px 16px rgba(0,0,0,0.1)',
          borderRadius: '20px',
          margin: '0 auto',
          padding: '60px 40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <div>
            <img
              style={{ scale: '0.8' }}
              src="https://www.bigohhh.com/_next/image?url=%2Fimages%2Flogo.png&amp;w=256&amp;q=97"
              alt="Company Name"
            />
          </div>
          <div>
            <h1>Welcome to BigOhhh</h1>
          </div>
        </div>
        <form onSubmit={submitHandler}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div>
              <div style={{ marginBlock: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    color: '#4d5358',
                    marginBottom: ' 4px',
                    fontSize: ' 16px',
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  required={true}
                  style={{
                    background: '#fff',
                    border: '1px solid #c1c7cd',
                    boxSizing: 'border-box',
                    borderRadius: '4px',
                    width: '100%',
                    padding: '0 16px',
                    height: '48px',
                    lineHeight: '1',
                    fontSize: '16px',
                    color: '#4d5358',
                  }}
                  name="name"
                  placeholder="Your Full Name"
                />
              </div>

              <div style={{ marginBlock: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    color: '#4d5358',
                    marginBottom: ' 4px',
                    fontSize: ' 16px',
                  }}
                >
                  Mobile Number
                </label>
                <input
                  type="number"
                  required={true}
                  style={{
                    background: '#fff',
                    border: '1px solid #c1c7cd',
                    boxSizing: 'border-box',
                    borderRadius: '4px',
                    width: '100%',
                    padding: '0 16px',
                    height: '48px',
                    lineHeight: '1',
                    fontSize: '16px',
                    color: '#4d5358',
                  }}
                  name="number"
                  placeholder="Your Mobile Number"
                />
              </div>
              <div style={{ marginBlock: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    color: '#4d5358',
                    marginBottom: ' 4px',
                    fontSize: ' 16px',
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  required={true}
                  style={{
                    background: '#fff',
                    border: '1px solid #c1c7cd',
                    boxSizing: 'border-box',
                    borderRadius: '4px',
                    width: '100%',
                    padding: '0 16px',
                    height: '48px',
                    lineHeight: '1',
                    fontSize: '16px',
                    color: '#4d5358',
                  }}
                  name="email"
                  placeholder="Enter Your Email Address"
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  textAlign: 'center',
                  width: '100%',
                  color: '#4d5358',
                  marginBottom: '-22px',
                  fontSize: '22px',
                }}
              >
                <p>Your Query</p>
              </div>

              <div style={{ marginBlock: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    color: '#4d5358',
                    marginBottom: ' 4px',
                    fontSize: ' 16px',
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  required={true}
                  style={{
                    background: '#fff',
                    border: '1px solid #c1c7cd',
                    boxSizing: 'border-box',
                    borderRadius: '4px',
                    width: '100%',
                    padding: '0 16px',
                    height: '48px',
                    lineHeight: '1',
                    fontSize: '16px',
                    color: '#4d5358',
                  }}
                  name="subject"
                  placeholder="Enter Your subject Address"
                />
              </div>

              <div style={{ marginBlock: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    color: '#4d5358',
                    marginBottom: ' 4px',
                    fontSize: ' 16px',
                  }}
                >
                  Body
                </label>
                <textarea
                  required={true}
                  style={{
                    background: '#fff',
                    border: '1px solid #c1c7cd',
                    boxSizing: 'border-box',
                    borderRadius: '4px',
                    width: '100%',
                    padding: '10px 16px',
                    // height: '48px',
                    lineHeight: '1',
                    fontSize: '16px',
                    color: '#4d5358',
                  }}
                  name="body"
                  rows={4}
                  cols={30}
                  placeholder="Enter Your body Address"
                />
              </div>
            </div>
          </div>
          <div>
            <input
              style={{
                minWidth: '120px',
                minHeight: '52px',
                borderRadius: '8px',
                padding: '0 32px',
                fontWeight: '500',
                fontSize: '18px',
                lineHeight: '52px',
                display: 'flex',
                justifyContent: 'center',
                width: 'fit-content',
                transition: 'all 300ms ease-in-out',
                border: '1px solid transparent',
                cursor: 'pointer',
                width: '100%',

                color: 'rgb(0, 0, 0)',
                backgroundColor: 'rgb(255, 175, 53)',
                borderColor: 'rgb(255, 175, 53)',
              }}
              type="submit"
              value="Get OTP"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default index

const generateRandomOtp = () => Math.floor(Math.random() * 1000000)

const submitHandler = (e: any) => {
  e.preventDefault()
  let otp = generateRandomOtp().toString()

  let name = e.target.name.value
  let userEmail = e.target.email.value
  let otpNumber = otp

  fetch('/api/sendOtpMail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, userEmail, otpNumber }),
  })
}
