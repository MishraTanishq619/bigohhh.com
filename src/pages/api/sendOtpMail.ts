import otpEmail from '@/actions/OtpMailer'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, userEmail, otpNumber } = await req.body
    otpEmail(name, userEmail, otpNumber)
    res.json({ message: 'Sent' })
  }
}
