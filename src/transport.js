// const nodemailer = require('nodemailer');
// const subject = 'Sent via an app!'
// const text = 'hey wifey, this is jared this is a message send directly from my coding terminal using a email package im going to use for my website. via a gmail account i just created'


// module.exports= {
//     birthdayEmail: (req,res)=> {
//  const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'gather.react.app@gmail.com',
//  // naturally, replace both with your real credentials or an application-specific password
//   }
// });

// const mailOptions = {
//   from: '"Jared Andersen 🐶"<gather.react.app@gmail.com>',
//   to: 'thejaredandersen@gmail.com',
//   subject: subject,
//   text: text,
// };

// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   })
// }
// }