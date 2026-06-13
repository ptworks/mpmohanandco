import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  try {
    res.status(200).json({
      success: true,
      message: 'API Working'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}