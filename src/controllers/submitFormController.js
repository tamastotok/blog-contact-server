const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

module.exports = async function submit_form(req, res) {
  if (!req.body) return res.status(400).send('Invalid input!');

  //  Log in to your email that will send messages
  let transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: ` "Nodemailer Contact" <${process.env.EMAIL_FROM}>`, // Your logged in email address
    to: process.env.EMAIL_TO, //  Email address which receive the message from submit
    subject: req.body.subject, // Subject from submit
    text: `${req.body.message} from "${req.body.name}" <${req.body.email}>`, // Message from submit
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) return res.status(400).send('Email service error!');

    res.status(200).send('You message has been sent successfully!');
  });
};
