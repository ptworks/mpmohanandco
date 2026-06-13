import nodemailer from 'nodemailer';

export default async function handler(req, res) {
   if (req.method !== 'POST') {
    return res.status(200).json({
      success: true,
      message: 'API is running'
    });
  }

  try {
    const {
      firstName,
      email,
      phone,
      city,
      service,
      message
    } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.titan.email',
      port: 465,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    await transporter.verify();

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'info@mpmohanandco.com',
      replyTo: email,
      subject: 'Website Enquiry',
      html: `
        <h2>New Enquiry</h2>
        <p><b>Name:</b> ${firstName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });

    return res.status(200).json({
      success: true
    });

  } catch (err) {
    console.error('Email Error:', err);

    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
}