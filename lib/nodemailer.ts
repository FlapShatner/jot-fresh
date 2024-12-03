'use server'
import nodemailer from 'nodemailer'

const UN = process.env.PW_RESET_EMAIL
const PW = process.env.PW_RESET_EMAIL_PASSWORD

const transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
  user: UN,
  pass: PW,
 },
})

export const sendEmail = async (to: string, subject: string, emailHtml: string) => {
 try {
  const result = await transporter.sendMail({
   from: 'reset@jrobertsweb.dev',
   to,
   subject,
   html: emailHtml,
  })
  return result
 } catch (error) {
  console.error(error)
  return null
 }
}
