const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

module.exports = function main(data) {
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
    subject: data.subject, // Subject from submit
    text: `${data.message} from "${data.name}" <${data.email}>`, // Message from submit
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
};
