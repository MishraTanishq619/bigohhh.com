import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE_PROVIDER,
  port: 465,
  secure: true, // true for 465, false for other ports
  logger: true,
  debug: true,
  secureConnection: false,
  auth: {
    // from smtp server ,
    user: process.env.SMTP_SENDER_MAIL,
    pass: process.env.SMTP_SENDER_APP_PASSKEY, // from app passkeys
  },
  tls: {
    rejectUnAuthorized: true,
  },
})

async function makeOtpMessage(name: string, userEmail: string, otpNumber: string): Promise<any> {
  try {
    const message = {
      from: process.env.MAILER_FROM,
      to: userEmail,
      subject: 'Your One-Time Password (OTP) for Email Verification',
      html: ` <div style="font-family: Arial, sans-serif;  margin: 0 auto;">
      <h2>Your One-Time Password (OTP) for Email Verification</h2>
      <p>Dear ${name},</p>
      <p>Thank you for reaching out to BigOhhh.com, We're thrilled to assist you on your coding journey.</p>
      <p>As part of our security measures, we require all users to verify their email address. Below, you'll find your unique One-Time Password (OTP) that you'll need to enter on our website to complete the verification process:</p>
      <p><strong>OTP:</strong> ${otpNumber}</p>
      
      <p>Once you've completed this step, your email address will be successfully verified, and you can fill the "Contact Us form" as per your query.</p>
      
      <p>Thank you for choosing BigOhhh. We're excited to have you on board!</p>
      <p>Best regards,</p>
      <p>BigOhhh Team</p>
  </div>`,
    }

    return message
  } catch (error) {
    // console.error('Error in makeOtpMessage:', error)
    return 'Error in makeOtpMessage.'
  }
}

// async..await is not allowed in global scope, must use a wrapper
async function otpEmail(name: string, userEmail: string, otpNumber: string): Promise<any> {
  try {
    // send mail with defined transport object
    let message = await makeOtpMessage(name, userEmail, otpNumber)
    const info = await transporter.sendMail(message)

    return info
  } catch (error) {
    console.log(error)
    return 'Error Occurred'
  }
}
export default otpEmail
