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
      email,
      firstName,
      lastName,
      phone,
      experience,
      exams,
      current,
      expected
    } = req.body;

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
   const info =  await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'info@mpmohanandco.com',
      cc: 'tiru.prasad73@gmail.com',
      replyTo: email,
      subject: 'Website Enquiry',
      html: `
        <h2>New Enquiry</h2>
        <p><b>Email:</b> ${email}</p>
        <p><b>First Name:</b> ${firstName}</p>
        <p><b>Last Name:</b> ${lastName}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Experience:</b> ${experience}</p>
        <p><b>Are you planning to write CA Final exams?</b> ${exams}</p>
        <p><b>Current CTC:</b> ${current}</p>
        <p><b>Expected CTC:</b> ${expected}</p>
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