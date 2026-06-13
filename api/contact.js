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

        console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("Password Length:", process.env.SMTP_PASSWORD?.length);
    const transporter = nodemailer.createTransport({
       host: 'smtpout.secureserver.net',
   port: 587,
  secure: false,
  requireTLS: true,
      connectionTimeout: 30000,
      greetingTimeout: 30000,
      socketTimeout: 30000,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    await transporter.verify();

    return res.status(200).json({
  success: true,
  verified: true
});

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'info@mpmohanandco.com',
      cc: 'tiru.prasad73@gmail.com',
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

    console.log('MAIL INFO:', JSON.stringify(info, null, 2));
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