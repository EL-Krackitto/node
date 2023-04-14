const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pssnpsssn@gmail.com',
    pass: 'fgdhd2Rhf'
  }
});

const mailOptions = {
  from: 'pssnpsssn@gmail.com',
  to: 'pssnpsssn@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent using Node.js and Nodemailer!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
